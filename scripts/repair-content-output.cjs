// Refresh only the content bindings and two known text/link defects.
// Keep the existing renderer, captured layout and personalization intact.
const fs = require('node:fs');
const path = require('node:path');
const staticFallback = require('./static-fallback.cjs');
const root = 'public/_launchfolio';
const target = path.join(root, 'portfolio-content.js');
const current = fs.readFileSync(target, 'utf8');
fs.writeFileSync(target, current.split('\n')[0] + '\n' + fs.readFileSync('scripts/content-runtime.js', 'utf8'));
const {pages} = JSON.parse(fs.readFileSync(path.join(root, 'portfolio-routes.json'), 'utf8'));
for (const page of pages) {
  const file = path.join(root, 'pages', page.file);
  const original = fs.readFileSync(file, 'utf8');
  let content = original.replace(/https?:\/\/mailto:abgakhar787@gmail\.com/g, '/?contact=1');
  if (page.route === '/') content = content.replace('Websites, AI assistants, and connected systems built <span', 'Websites, AI assistants, and connected systems built around <span');
  content = staticFallback(content, page.route);
  if (content !== original) fs.writeFileSync(file, content);
}
console.log('Refreshed content bindings, scope sentence and malformed contact links.');
