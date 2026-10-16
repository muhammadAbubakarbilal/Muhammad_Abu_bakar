// Exercise delivery behavior without contacting an external service.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("../node_modules/typescript");
function load(file) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  new Function("require", "exports", code)(
    (name) => (name === "@/lib/site" ? load("lib/site.ts") : require(name)),
    exports,
  );
  return exports;
}
const { POST } = load("app/api/contact/route.ts");
const valid = {
  name: "QA Visitor",
  email: "qa@example.com",
  projectType: "Website / Landing Page",
  description: "Website redesign test, not a real inquiry.",
};
const request = (body) =>
  new Request("http://localhost/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
  });
(async () => {
  let calls = 0;
  process.env.CONTACT_WEBHOOK_URL = "https://example.invalid/inquiries";
  process.env.CONTACT_WEBHOOK_TOKEN = "test-only-token";
  global.fetch = async (url, options) => {
    calls++;
    assert.equal(url, "https://example.invalid/inquiries");
    assert.equal(options.headers.Authorization, "Bearer test-only-token");
    const payload = JSON.parse(options.body);
    assert.equal(payload.description, valid.description);
    assert.equal(payload.source, "portfolio");
    return new Response("", { status: 202 });
  };
  const accepted = await POST(request(valid));
  assert.equal(accepted.status, 200);
  assert.equal((await accepted.json()).success, true);
  assert.equal(calls, 1);
  global.fetch = async () => new Response("", { status: 500 });
  assert.equal((await POST(request(valid))).status, 502);
  global.fetch = async () => {
    throw new Error("timeout");
  };
  assert.equal((await POST(request(valid))).status, 502);
  delete process.env.CONTACT_WEBHOOK_URL;
  assert.equal((await POST(request(valid))).status, 503);
  assert.equal(
    (await POST(request({ ...valid, email: "invalid" }))).status,
    400,
  );
  assert.equal(
    (await POST(request({ ...valid, description: "x".repeat(4001) }))).status,
    400,
  );
  assert.equal(
    (await POST(request({ ...valid, companyFax: "bot" }))).status,
    400,
  );
  assert.equal(
    (await POST(request({ ...valid, projectType: "Unknown" }))).status,
    400,
  );
  assert.equal(
    (await POST(request({ ...valid, description: "x".repeat(17000) }))).status,
    413,
  );
  const legacy = {
    name: valid.name,
    email: valid.email,
    problem: "CRM",
    currentProcess: valid.description,
  };
  assert.equal((await POST(request(legacy))).status, 503);
  console.log(
    "PASS: 10 contact API checks, including mocked delivery success, failure, timeout, validation, limits, honeypot and legacy input. No external messages sent.",
  );
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
