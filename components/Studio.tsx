import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
export function Action({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : "button-primary"}`}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-link">
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="page-intro">
      <p className="section-label">{label}</p>
      <h1>{title}</h1>
      <div className="intro-copy">{children}</div>
    </header>
  );
}
export function ContactCTA() {
  return (
    <section id="contact" className="contact-cta">
      <div>
        <p className="section-label">Let’s make it work.</p>
        <h2>
          Have something you want
          <br className="desktop-break" /> to build or improve?
        </h2>
        <p>
          Tell me what you’re working on. We can discuss what you need and what
          a practical solution could look like.
        </p>
      </div>
      <div className="contact-actions">
        <Action href="/contact">Discuss a Project</Action>
        <a className="email-link" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
    </section>
  );
}
