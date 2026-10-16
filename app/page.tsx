import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Bot,
  Workflow,
  Layers,
  Code2,
  Database,
  Zap,
  Check,
} from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
import { PROJECTS_DATA, INSIGHTS_DATA } from "@/lib/data";
import { faqItems, site } from "@/lib/site";
function CallButton() {
  return (
    <Link href="/contact" className="lf-button">
      <Image src="/assets/abu_bakar.jpg" width={28} height={28} alt="" />
      Discuss your project
    </Link>
  );
}
const offerings = [
  ["Website design & development", Globe],
  ["AI assistants & chatbots", Bot],
  ["Workflow automation", Workflow],
  ["CRM integrations", Database],
  ["Custom business software", Code2],
  ["Customer portals", Layers],
  ["Connected systems", Zap],
] as const;
export default function HomePage() {
  return (
    <div className="lf-page">
      <section className="lf-hero">
        <div className="lf-inner lf-hero-grid">
          <div>
            <div className="lf-availability">
              <i />
              Let’s build something useful
            </div>
            <h1>
              <span>Technology that</span>
              <br />
              delivers results.
            </h1>
            <p>
              <strong>Thoughtful design. Connected business systems.</strong> I
              create websites, AI assistants and automations that help your
              business work better.
            </p>
            <CallButton />
          </div>
          <div className="lf-stack" aria-label="Selected project previews">
            {PROJECTS_DATA.slice(0, 3).map((p, i) => (
              <Link
                href={`/work/${p.slug}`}
                className={`lf-stack-card lf-stack-${i}`}
                key={p.slug}
              >
                <ProjectVisual slug={p.slug} />
                <span>
                  {p.title}
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div className="lf-trust">
        <div className="lf-inner">
          <span>Design. Build. Connect.</span>
          <div className="lf-ticker">
            <div className="lf-ticker-track">
              {[0, 1].map((copy) => (
                <div
                  className="lf-ticker-group"
                  key={copy}
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  <span>Next.js</span>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>AI + APIs</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="lf-section" id="work">
        <div className="lf-inner">
          <div className="lf-heading">
            <h2>Latest Projects</h2>
            <Link href="/work">All projects ↗</Link>
          </div>
          <div className="lf-project-grid">
            {PROJECTS_DATA.slice(0, 4).map((p, i) => (
              <Link
                className={`lf-project lf-project-${i}`}
                href={`/work/${p.slug}`}
                key={p.slug}
              >
                <div className="lf-project-image">
                  <ProjectVisual slug={p.slug} />
                </div>
                <div className="lf-project-caption">
                  <div>
                    <h3>{p.title}</h3>
                    <p>
                      {p.category} · {p.badgeType.toLowerCase()}
                    </p>
                  </div>
                  <span aria-hidden="true">↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="lf-statement">
        <div className="lf-inner">
          <p>
            Good technology makes the next step easier. Clear interfaces,
            connected tools, and a person in the loop when it matters.
          </p>
          <Image src="/assets/abu_bakar.jpg" width={40} height={40} alt="" />
          <strong>{site.name}</strong>
          <span>{site.role}</span>
        </div>
      </section>
      <section className="lf-section" id="services">
        <div className="lf-inner lf-two-col">
          <div>
            <h2>
              <span>Services that</span>
              <br />
              move your
              <br />
              business forward.
            </h2>
            <div className="lf-tool-icons">
              <Globe />
              <Code2 />
              <Bot />
              <Workflow />
            </div>
          </div>
          <div className="lf-services">
            {offerings.map(([name, Icon]) => (
              <Link href="/systems" key={name}>
                <span>
                  <Icon size={21} />
                </span>
                {name}
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="lf-section" id="about">
        <div className="lf-inner">
          <h2 className="lf-wide-heading">
            <span>Designing experiences</span>
            <br />
            that solve real problems.
          </h2>
          <div className="lf-two-col lf-about">
            <div>
              <div className="lf-portrait">
                <Image
                  src="/assets/abu_bakar.jpg"
                  alt={site.name}
                  width={912}
                  height={1136}
                />
              </div>
              <h3>{site.name}</h3>
              <p>{site.role}</p>
              <Link href="/about" className="lf-small-link">
                More about me ↗
              </Link>
            </div>
            <div className="lf-about-copy">
              <p>
                <strong>
                  I bring websites, AI and business workflows together.
                </strong>{" "}
                My work starts with understanding what people need to do, then
                designing a clear path to get it done.
              </p>
              <p>
                <strong>Useful systems begin with a clear purpose.</strong> From
                a focused landing page to an integrated customer workflow, I
                plan the interface, the tools and the handoffs as one
                experience.
              </p>
              <p>
                <strong>A thoughtful approach from idea to launch.</strong>{" "}
                Scope, design, build and review happen in clear stages, with
                room for feedback along the way.
              </p>
              <span className="lf-signature">Abu Bakar</span>
            </div>
          </div>
        </div>
      </section>
      <section className="lf-section" id="engagement">
        <div className="lf-inner">
          <div className="lf-two-col">
            <h2>
              <span>Your next idea.</span>
              <br />
              Let’s build it.
            </h2>
            <p className="lf-section-description">
              A clear scope and a practical plan, shaped around your business.
              Project cost and timing are agreed after we understand what you
              need.
            </p>
          </div>
          <div className="lf-steps">
            {[
              [
                "01",
                "Discuss",
                "Tell me about your goals and the problem you want to solve.",
              ],
              ["02", "Define", "We agree the scope, priorities and approach."],
              [
                "03",
                "Build",
                "Review the work as it takes shape, then prepare for launch.",
              ],
            ].map(([n, t, d]) => (
              <div key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <div className="lf-engagement">
            <div className="lf-bolt">
              <Zap size={160} fill="currentColor" strokeWidth={0.6} />
              <h3>
                One idea.
                <br />A connected solution.
              </h3>
              <p>Websites, AI and automation.</p>
            </div>
            <div className="lf-plan">
              <span className="lf-availability">
                <i />
                Project-based collaboration
              </span>
              <h3>Built around your needs.</h3>
              <p>From a single website to a connected business workflow.</p>
              <hr />
              {[
                "A clearly defined scope",
                "Design and development",
                "Reviewable stages",
                "Responsive, accessible interfaces",
                "Agreed handoff and next steps",
              ].map((t) => (
                <p key={t}>
                  <Check size={17} />
                  {t}
                </p>
              ))}
              <CallButton />
            </div>
          </div>
          <Link href="/contact" className="lf-project-cta">
            <div>
              <h3>Have something specific in mind?</h3>
              <p>Tell me what you’d like to build.</p>
            </div>
            <ArrowUpRight size={28} />
          </Link>
        </div>
      </section>
      <section className="lf-section">
        <div className="lf-inner">
          <h2>
            <span>A considered approach.</span>
            <br />
            From start to finish.
          </h2>
          <div className="lf-values">
            {[
              [
                "Clarity first",
                "A useful solution starts with understanding your business, your users and the outcome you need.",
              ],
              [
                "Connected thinking",
                "The interface and the systems behind it are designed together, so information has a clear place to go.",
              ],
              [
                "People in the loop",
                "AI supports the work. Important decisions and exceptions stay with the people responsible for them.",
              ],
              [
                "Purposeful design",
                "Every page and interaction should help someone understand, decide or take the next step.",
              ],
              [
                "Reviewable progress",
                "Work is shared in stages so feedback can shape the result while it is being built.",
              ],
              [
                "Practical handoff",
                "Launch includes an agreed handoff and a clear conversation about maintenance and future improvements.",
              ],
            ].map(([t, d]) => (
              <article key={t}>
                <span>✦</span>
                <h3>{t}</h3>
                <p>{d}</p>
                <div className="lf-value-author">
                  <Image
                    src="/assets/abu_bakar.jpg"
                    width={30}
                    height={30}
                    alt=""
                  />
                  <span>How I work</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="lf-section">
        <div className="lf-inner">
          <h2>Frequently asked questions.</h2>
          <div className="lf-faq-layout">
            <div>
              {faqItems.slice(0, 5).map((f, i) => (
                <details key={f.question}>
                  <summary>
                    <span>0{i + 1}</span>
                    {f.question}
                    <b>+</b>
                  </summary>
                  <p>{f.answer}</p>
                </details>
              ))}
            </div>
            <aside>
              <Image
                src="/assets/abu_bakar.jpg"
                width={56}
                height={56}
                alt=""
              />
              <h3>
                Still not sure?
                <br />
                Let’s talk about it.
              </h3>
              <p>A short description is enough to start a conversation.</p>
              <CallButton />
            </aside>
          </div>
        </div>
      </section>
      <section className="lf-section">
        <div className="lf-inner">
          <div className="lf-heading">
            <h2>Thoughts & insights.</h2>
            <Link href="/insights">All articles ↗</Link>
          </div>
          <div className="lf-articles">
            {INSIGHTS_DATA.slice(0, 3).map((a, i) => (
              <Link href={`/insights/${a.slug}`} key={a.slug}>
                <div
                  className={`lf-article-art lf-art-${i}`}
                  aria-hidden="true"
                >
                  {i === 0 ? <Workflow /> : i === 1 ? <Layers /> : <Bot />}
                  <span>{a.category}</span>
                </div>
                <div>
                  <p>
                    {a.category} · {a.readTime}
                  </p>
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <span className="lf-small-link">Read article ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
