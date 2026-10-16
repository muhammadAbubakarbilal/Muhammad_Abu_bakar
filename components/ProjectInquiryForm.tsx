"use client";
import { useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { projectTypes, site } from "@/lib/site";
export function ProjectInquiryForm({
  deliveryConfigured,
}: {
  deliveryConfigured: boolean;
}) {
  const [busy, setBusy] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [draft, setDraft] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [emailHref, setEmailHref] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setErrors({});
    setDraft(null);
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;
    const text = `Name: ${values.name}\nEmail: ${values.email}\nProject type: ${values.projectType}\n\n${values.description}\n\nWebsite: ${values.website || "Not supplied"}\nBudget: ${values.budget || "Not supplied"}\nTimeline: ${values.timeline || "Not supplied"}\nExisting tools: ${values.currentTools || "Not supplied"}`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(`Project inquiry: ${values.projectType}`)}&body=${encodeURIComponent(text)}`;
    setEmailHref(href);
    if (!deliveryConfigured) {
      setDraft(text);
      requestAnimationFrame(() => statusRef.current?.focus());
      return;
    }
    setBusy(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        signal: AbortSignal.timeout(20000),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSent(true);
        requestAnimationFrame(() => statusRef.current?.focus());
      } else {
        setErrors(
          data.errors || {
            general:
              data.error ||
              "Your inquiry could not be sent. Please use the email option below.",
          },
        );
        if (!data.errors) setDraft(text);
        requestAnimationFrame(() => {
          if (data.errors) {
            const field = form.querySelector<HTMLElement>(
              `[name="${Object.keys(data.errors)[0]}"]`,
            );
            const details = field?.closest("details");
            if (details) details.open = true;
            field?.focus();
          } else statusRef.current?.focus();
        });
      }
    } catch {
      setErrors({
        general:
          "Your inquiry could not be sent. Please open the email draft below and send it from your email app.",
      });
      setDraft(text);
      requestAnimationFrame(() => statusRef.current?.focus());
    } finally {
      setBusy(false);
    }
  }
  function fieldError(name: string) {
    return errors[name] ? (
      <p className="field-error" id={`${name}-error`}>
        {errors[name]}
      </p>
    ) : null;
  }
  if (sent)
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="form-status">
        <CheckCircle2 size={32} />
        <h2>Inquiry delivered.</h2>
        <p>Thank you for sharing your project. I’ll review the details.</p>
        <button
          className="button button-secondary"
          onClick={() => setSent(false)}
        >
          Write another inquiry
        </button>
      </div>
    );
  return (
    <form
      ref={formRef}
      className="inquiry-form"
      onSubmit={submit}
      aria-busy={busy}
    >
      <div className="form-row">
        <div>
          <label htmlFor="name">
            Your name <span>(required)</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your full name"
          />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="email">
            Email <span>(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="you@business.com"
          />
          {fieldError("email")}
        </div>
      </div>
      <div>
        <label htmlFor="projectType">
          Project type <span>(required)</span>
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={
            errors.projectType ? "projectType-error" : undefined
          }
        >
          <option value="" disabled>
            Select what you have in mind
          </option>
          {projectTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
        {fieldError("projectType")}
      </div>
      <div>
        <label htmlFor="description">
          What would you like to build or improve? <span>(required)</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          minLength={10}
          maxLength={4000}
          rows={5}
          placeholder="A short description is enough to get started."
          aria-invalid={Boolean(errors.description)}
          aria-describedby={
            errors.description ? "description-error" : undefined
          }
        />
        {fieldError("description")}
      </div>
      <details className="optional-fields">
        <summary>
          A little more context <span>(optional)</span>
        </summary>
        <div className="optional-fields-inner">
          <div className="form-row">
            <div>
              <label htmlFor="website">Business website</label>
              <input
                type="url"
                id="website"
                name="website"
                aria-invalid={Boolean(errors.website)}
                aria-describedby={errors.website ? "website-error" : undefined}
                autoComplete="url"
                placeholder="https://"
                maxLength={500}
              />
              {fieldError("website")}
            </div>
            <div>
              <label htmlFor="budget">Budget range</label>
              <input
                id="budget"
                name="budget"
                placeholder="A range, or let’s work it out"
                maxLength={100}
              />
            </div>
          </div>
          <div className="form-row">
            <div>
              <label htmlFor="timeline">Timeline</label>
              <input
                id="timeline"
                name="timeline"
                placeholder="When would you like to start?"
                maxLength={100}
              />
            </div>
            <div>
              <label htmlFor="currentTools">Existing tools</label>
              <input
                id="currentTools"
                name="currentTools"
                placeholder="Only if relevant"
                maxLength={500}
              />
            </div>
          </div>
        </div>
      </details>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company-fax">Leave this field empty</label>
        <input
          id="company-fax"
          name="companyFax"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {errors.general && (
        <p className="field-error" role="alert">
          {errors.general}
        </p>
      )}
      <div className="form-submit">
        <button className="button button-primary" type="submit" disabled={busy}>
          {busy ? (
            <>
              <Loader2 className="loading-icon" size={17} aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              {deliveryConfigured ? "Send Project Inquiry" : "Prepare Email"}
              <ArrowUpRight size={17} aria-hidden="true" />
            </>
          )}
        </button>
        <p>
          {deliveryConfigured
            ? "Share only the information needed to discuss your project."
            : "This prepares a draft. You send it from your email app."}
        </p>
      </div>
      {draft && (
        <div
          ref={statusRef}
          tabIndex={-1}
          className="email-draft"
          role="status"
        >
          <h2>Your email draft is ready.</h2>
          <p>
            Your message has not been sent. Open your email app to review and
            send it to {site.email}.
          </p>
          <a className="button button-primary" href={emailHref}>
            Open Email Draft
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <details>
            <summary>View or copy the message</summary>
            <pre>{draft}</pre>
          </details>
        </div>
      )}
      <noscript>
        <p>
          The form needs JavaScript to prepare your message. You can email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> directly.
        </p>
      </noscript>
    </form>
  );
}
