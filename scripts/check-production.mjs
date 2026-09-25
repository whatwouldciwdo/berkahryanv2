import assert from "node:assert/strict";

// Run against next start, not next dev. No external test dependency required.
const base = new URL(process.argv[2] ?? "http://127.0.0.1:3000");
const origin = "https://berkahryan.com";
async function get(path) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
  return response.text();
}
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
}
const xml = await get("/sitemap.xml");
assert.ok(!xml.includes("<lastmod>"), "No synthetic modification dates");
const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
assert.ok(urls.length >= 7, "Sitemap includes core routes");
assert.equal(new Set(urls).size, urls.length, "Unique sitemap URLs");
for (const url of urls) {
  assert.equal(new URL(url).origin, origin);
  const path = new URL(url).pathname;
  const html = await get(path);
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map((m) => attributes(m[0]));
  const canonicals = links.filter((link) => link.rel === "canonical");
  assert.equal(canonicals.length, 1, `${path}: one canonical`);
  assert.equal(new URL(canonicals[0].href).href, new URL(url).href, `${path}: canonical`);
  assert.equal([...html.matchAll(/<main\b/g)].length, 1, `${path}: one main landmark`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title, `${path}: title`);
  assert.equal((title.match(/CV\. Berkah Ryan/g) ?? []).length, 1, `${path}: business suffix`);
  const tags = [...html.matchAll(/<meta\b[^>]*>/g)].map((m) => attributes(m[0]));
  const meta = (key) => tags.find((tag) => tag.property === key || tag.name === key)?.content;
  for (const key of ["description", "og:title", "og:description", "og:image", "og:site_name", "twitter:card", "twitter:image"]) {
    assert.ok(meta(key), `${path}: ${key}`);
  }
  assert.equal(new URL(meta("og:url")).href, new URL(url).href, `${path}: OG URL`);
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
    .flatMap((m) => JSON.parse(m[1]));
  const organization = schemas.filter((s) => s["@id"] === `${origin}/#organization`);
  assert.equal(organization.length, 1, `${path}: one organization definition`);
  assert.equal(organization[0]["@type"], "LocalBusiness");
  if (path.startsWith("/blog/")) {
    const article = schemas.find((s) => s["@type"] === "BlogPosting");
    assert.ok(article && /^\d{4}-[01]\d-[0-3]\d$/.test(article.datePublished), `${path}: publication date`);
    assert.equal(meta("article:published_time"), article.datePublished);
    assert.ok(html.includes(`dateTime="${article.datePublished}"`) || html.includes(`datetime="${article.datePublished}"`));
  }
  console.log(`PASS ${path}`);
}
const robots = await get("/robots.txt");
assert.ok(robots.includes("OAI-SearchBot") && robots.includes(`${origin}/sitemap.xml`));
const llms = await get("/llms.txt");
for (const match of llms.matchAll(/\]\((https:\/\/berkahryan\.com[^)]*)\)/g)) {
  await get(new URL(match[1]).pathname);
}
for (const path of ["/not-a-real-page", "/blog/not-a-real-post", "/layanan/not-a-real-service", "/proyek/not-a-real-project"]) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 404, `${path}: 404`);
  await response.arrayBuffer();
}
const image = await fetch(new URL("/_next/image?url=%2Fberkah-ryan-rental-alat-berat-cilegon.webp&w=640&q=75", base), { signal: AbortSignal.timeout(30000) });
assert.equal(image.status, 200, "Image optimizer");
assert.ok(image.headers.get("content-type")?.startsWith("image/"));
assert.ok((await image.arrayBuffer()).byteLength > 0, "Image body");
console.log(`PASS: ${urls.length} sitemap pages, metadata, JSON-LD, llms links, robots, 404s, image optimizer.`);
