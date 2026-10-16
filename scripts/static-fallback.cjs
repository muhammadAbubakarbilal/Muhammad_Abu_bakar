// A readable, factual fallback for captured pages when JavaScript is disabled.
// Reuse portfolio data rather than the template's split-word animation markup.
const fs = require('node:fs');
const ts = require('typescript');
function readData(file) {
  const result = {};
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  new Function('exports', code)(result);
  return result;
}
const { PROJECTS_DATA: projects, INSIGHTS_DATA: articles } = readData('lib/data.ts');
const { site, services, processSteps, faqItems } = readData('lib/site.ts');
const escape = text => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const paragraph = text => `<p>${escape(text)}</p>`;
const link = (href, text) => `<a href="${escape(href)}">${escape(text)}</a>`;
const projectList = list => `<ul>${list.map(project => `<li><h3>${link(`/work/${project.slug}`, project.title)}</h3>${paragraph(project.tagline)}<small>${project.badgeType === 'INDEPENDENT BUILD' ? 'Independent build' : project.badgeType === 'CONCEPT BUILD' ? 'Concept study' : 'Demo architecture'}</small></li>`).join('')}</ul>`;
const articleList = () => `<ul>${articles.map(article => `<li><h2>${link(`/insights/${article.slug}`, article.title)}</h2>${paragraph(article.excerpt)}</li>`).join('')}</ul>`;
module.exports = (html, route) => {
  let title, content;
  const project = projects.find(item => route === `/projects/${item.slug}`);
  const article = articles.find(item => route === `/blog/${item.slug}`);
  if (route === '/') {
    title = 'Websites, AI & systems. Built for business.';
    content = paragraph('I design websites and build AI assistants, CRM workflows and custom software that help businesses manage inquiries, connect their tools and reduce repetitive work.')
      + `<section id="work"><h2>Selected work</h2>${projectList(projects.slice(0, 4))}</section>`
      + `<section id="services"><h2>What I build</h2>${services.map(service => `<h3>${escape(service.title)}</h3>${paragraph(service.description)}`).join('')}</section>`
      + `<section id="about"><h2>The person behind the work</h2>${paragraph(`${site.name} — ${site.role}. I start by understanding the business, then design the interface, connections and human handoffs around the work.`)}</section>`
      + `<section id="pricing"><h2>From idea to working solution</h2>${processSteps.map(step => `<h3>${escape(step.title)}</h3>${paragraph(step.short)}`).join('')}${paragraph('Project scope, timing and cost are discussed before work begins.')}</section>`
      + `<section id="faq"><h2>Useful answers</h2>${faqItems.slice(0, 4).map(item => `<details><summary>${escape(item.question)}</summary>${paragraph(item.answer)}</details>`).join('')}</section>`;
  } else if (route === '/projects') {
    title = 'Selected work'; content = projectList(projects);
  } else if (route === '/blog') {
    title = 'Practical insights'; content = articleList();
  } else if (project) {
    title = project.title;
    content = paragraph(project.tagline) + paragraph(project.badgeType === 'INDEPENDENT BUILD' ? 'Independent website build.' : 'Documented architecture study. Illustrative functionality; no verified client deployment or measured outcomes are claimed.')
      + `<section><h2>The goal</h2>${paragraph(project.problem)}<h2>The approach</h2>${paragraph(project.systemSummary)}</section>`
      + `<section><h2>The workflow</h2><ol>${project.workflow.map(step => `<li><h3>${escape(step.title)}</h3>${paragraph(step.description)}</li>`).join('')}</ol></section>`
      + `<section><h2>Technical approach</h2>${project.technicalStack.map(layer => `<h3>${escape(layer.technology)}</h3>${paragraph(layer.purpose)}`).join('')}</section>`;
  } else if (article) {
    title = article.title;
    content = paragraph(article.content.intro) + article.content.sections.map(section => `<section><h2>${escape(section.heading)}</h2>${section.body.map(paragraph).join('')}${section.highlight ? `<blockquote>${escape(section.highlight)}</blockquote>` : ''}</section>`).join('') + paragraph(article.content.takeaway);
  } else {
    title = route === '/terms' ? 'Working together' : 'Privacy and project inquiries';
    content = paragraph('The website contact form prepares an email draft for you to review and send. For questions about your inquiry or project arrangements, contact me directly.');
  }
  const fallback = `<noscript id="portfolio-static-fallback"><style>html body{background:#fafafa!important;color:#191919!important}body>#main{display:none!important}.portfolio-static{max-width:1040px;margin:auto;padding:28px 24px;font:17px/1.6 Switzer,Arial,sans-serif}.portfolio-static nav{display:flex;flex-wrap:wrap;gap:20px;margin-bottom:48px}.portfolio-static a{color:#191919;text-decoration:underline;text-underline-offset:4px}.portfolio-static h1{font-size:clamp(34px,6vw,68px);line-height:1.08;letter-spacing:-.03em;margin:16px 0 28px}.portfolio-static h2{font-size:28px;line-height:1.2;margin:24px 0 16px}.portfolio-static h3{font-size:21px;line-height:1.3;margin:24px 0 8px}.portfolio-static p{margin:12px 0;color:#444}.portfolio-static section{margin:44px 0}.portfolio-static ul,.portfolio-static ol{padding-left:24px}.portfolio-static li{padding-bottom:18px}.portfolio-static footer{border-top:1px solid #ccc;padding-top:24px;margin-top:48px;overflow-wrap:anywhere}.portfolio-static summary{padding:14px 0;cursor:pointer}.portfolio-static :focus-visible{outline:2px solid #191919;outline-offset:5px}</style><div class="portfolio-static"><header><nav aria-label="Main navigation">${link('/', site.name)}${link('/projects', 'Work')}${link('/#services', 'Services')}${link('/blog', 'Insights')}${link(`mailto:${site.email}`, 'Contact')}</nav><p>${escape(site.role)}</p></header><main id="static-content"><h1>${escape(title)}</h1>${content}</main><footer><h2>Discuss a project</h2>${paragraph('Tell me what you would like to build or improve.')}${link(`mailto:${site.email}`, site.email)}</footer></div></noscript>`;
  return html.replace(/<noscript id="portfolio-static-fallback">[\s\S]*?<\/noscript>/g, '').replace('</body>', fallback + '</body>');
};
