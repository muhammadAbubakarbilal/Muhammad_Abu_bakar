import Link from "next/link";
import { site } from "@/lib/site";
import { RotatingWord } from "./RotatingWord";
export function Footer() {
  return (
    <footer className="lf-footer">
      <div className="lf-inner">
        <h2>
          Let’s <RotatingWord />
          <br />
          <span>incredible work</span>
          <br />
          together.
        </h2>
        <div className="lf-footer-links">
          <div>
            <p>Have a project in mind?</p>
            <a href={`mailto:${site.email}`}>{site.email} ↗</a>
          </div>
          <nav aria-label="Footer navigation">
            {[
              ["Work", "/work"],
              ["Services", "/systems"],
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Blog", "/insights"],
              ["FAQ", "/faq"],
            ].map(([n, h]) => (
              <Link key={h} href={h}>
                {n}
              </Link>
            ))}
          </nav>
        </div>
        <div className="lf-wordmark" aria-hidden="true">
          ABUBAKAR
        </div>
        <div className="lf-copyright">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <a href="#main-content">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
