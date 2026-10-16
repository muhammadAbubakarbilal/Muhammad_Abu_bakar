/* Source-level reorder: keep server HTML and Framer's render tree identical.
 * Sections are sliced verbatim, never reserialized or rebuilt. Idempotent. */
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const parse5 = require("parse5");
const ts = require("typescript");

const order = [
  "About Me", "Services", "Latest Projects", "Big Quote Testimonial",
  "Pricing", "Client Logos", "Testimonials", "Articles", "FAQ",
];
const moduleName = "UgXDd86x_N79a96NfFLGG4kH_BU5mjOwtU3OFrsBWYg.CS-TrCJc.mjs";

function reorder(root = "public/_launchfolio") {
  const htmlPath = path.join(root, "pages/index.html");
  const modulePath = path.join(root, "runtime/sites/7FFluPnX10fGrpp4NOdXsm", moduleName);
  let html = fs.readFileSync(htmlPath, "utf8");
  const originalCode = fs.readFileSync(modulePath, "utf8");
  const code = originalCode
    .replace('children:["Visitors shouldn\'t have to guess.",u(`br`,{})]', 'children:["Visitors shouldn\'t",u(`br`,{}),"have to guess.",u(`br`,{})]')
    .replace('children:"You shouldn\'t have to chase"', 'children:["You shouldn\'t",u(`br`,{}),"have to chase"]');
  const document = parse5.parse(html, { sourceCodeLocationInfo: true });
  let main;
  const visitHTML = node => {
    if (node.tagName === "main" && node.attrs.some(a => a.name === "data-framer-name" && a.value === "Main")) main = node;
    (node.childNodes || []).forEach(visitHTML);
  };
  visitHTML(document);
  assert(main, "Expected exported homepage Main container");
  const children = main.childNodes.filter(n => n.tagName);
  const names = children.map(n => {
    const name = n.attrs.find(a => a.name === "data-framer-name")?.value;
    return name === "Project Logos" ? "Client Logos" : name;
  });
  assert.deepEqual([...names].sort(), [...order].sort(), "Homepage structure changed; inspect before reordering");
  const blocks = Object.fromEntries(children.map((node, i) => [names[i], html.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset)]));
  html = html.slice(0, children[0].sourceCodeLocation.startOffset)
    + order.map(name => blocks[name]).join("")
    + html.slice(children.at(-1).sourceCodeLocation.endOffset);

  const tree = ts.createSourceFile(modulePath, code, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  let renderChildren;
  const visitJS = node => {
    if (ts.isArrayLiteralExpression(node) && node.elements.some(e => /^u\(m\.section,\{className:`framer-vltq38`/.test(e.getText(tree)))) renderChildren = node;
    ts.forEachChild(node, visitJS);
  };
  visitJS(tree);
  assert(renderChildren, "Expected Framer homepage render tree");
  const elements = [...renderChildren.elements];
  const renderNames = elements.map(e => e.getText(tree).match(/"data-framer-name":`([^`]+)`/)?.[1]);
  assert.deepEqual([...renderNames].sort(), [...order].sort(), "Framer render structure changed; inspect before reordering");
  const renderBlocks = Object.fromEntries(elements.map((e, i) => [renderNames[i], e.getText(tree)]));
  const updatedCode = code.slice(0, renderChildren.getStart(tree))
    + "[" + order.map(name => renderBlocks[name]).join(",") + "]"
    + code.slice(renderChildren.end);

  const bridge = '<script src="/_launchfolio/homepage-flow.js"></script>';
  if (!html.includes(bridge)) html = html.replace('<script src="/_launchfolio/contact-alias.js"', bridge + '<script src="/_launchfolio/contact-alias.js"');
  assert(html.includes(bridge), "Expected contact script insertion point");
  const questions = '<script src="/_launchfolio/business-questions.js"></script>';
  if (!html.includes(questions)) html = html.replace(bridge, questions + bridge);
  const showcaseStyle = '<link rel="stylesheet" href="/_launchfolio/business-showcase.css">';
  if (!html.includes(showcaseStyle)) html = html.replace('</head>', '<script>document.documentElement.classList.add("business-showcase-page")</script>' + showcaseStyle + '</head>');
  // Preserve the abbreviated no-JS fallback's existing content, but align its
  // existing sections with the new business-first order too.
  html = html.replace(/(<noscript id="portfolio-static-fallback">)([\s\S]*?)(<\/noscript>)/, (_, start, content, end) => {
    const sections = [...content.matchAll(/<section id="([^"]+)">[\s\S]*?<\/section>/g)];
    if (!sections.length) return start + content + end;
    const fallback = Object.fromEntries(sections.map(s => [s[1], s[0]]));
    const fallbackOrder = ["about", "services", "work", "pricing", "faq"];
    assert.deepEqual(Object.keys(fallback).sort(), [...fallbackOrder].sort());
    return start + content.slice(0, sections[0].index)
      + fallbackOrder.map(id => fallback[id]).join("")
      + content.slice(sections.at(-1).index + sections.at(-1)[0].length) + end;
  });

  // Validate both transformations before writing either file.
  if (html !== fs.readFileSync(htmlPath, "utf8")) fs.writeFileSync(htmlPath, html);
  if (updatedCode !== originalCode) fs.writeFileSync(modulePath, updatedCode);
}

module.exports = reorder;
if (require.main === module) reorder();
