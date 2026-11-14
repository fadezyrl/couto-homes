import fs from "fs";

const c = fs.readFileSync("couto-homes-estimator-demo.html", "utf8");

const styleMatch = c.match(/<style>([\s\S]*?)<\/style>/);
fs.writeFileSync("_extracted-style.css", styleMatch ? styleMatch[1] : "NO STYLE");

const scriptMatch = c.match(/<script>([\s\S]*?)<\/script>/);
fs.writeFileSync("_extracted-script.js", scriptMatch ? scriptMatch[1] : "NO SCRIPT");

console.log("style", styleMatch ? styleMatch[1].length : 0);
console.log("script", scriptMatch ? scriptMatch[1].length : 0);

const imgs = [...c.matchAll(/src="(data:image\/[^"]+)"/g)];
console.log("img count", imgs.length);
imgs.forEach((m, i) => {
  console.log(i, m[1].slice(0, 40), "len", m[1].length);
  const [, meta, b64] = m[1].match(/^data:([^;]+);base64,(.+)$/) || [];
  if (meta && b64) {
    const ext = meta.includes("png") ? "png" : meta.includes("jpeg") || meta.includes("jpg") ? "jpg" : "bin";
    fs.writeFileSync(`public/brand-logo.${ext}`, Buffer.from(b64, "base64"));
    console.log("wrote public/brand-logo." + ext);
  }
});

const bg = [...c.matchAll(/url\((data:image[^)]+)\)/g)];
console.log("bg count", bg.length);
bg.forEach((m, i) => {
  console.log("bg", i, m[1].slice(0, 40), "len", m[1].length);
  const [, meta, b64] = m[1].match(/^data:([^;]+);base64,(.+)$/) || [];
  if (meta && b64) {
    const ext = meta.includes("png") ? "png" : meta.includes("jpeg") || meta.includes("jpg") ? "jpg" : "bin";
    fs.writeFileSync(`public/hero-photo.${ext}`, Buffer.from(b64, "base64"));
    console.log("wrote public/hero-photo." + ext);
  }
});

// Extract body HTML without style/script/data uris for structure reference
const bodyMatch = c.match(/<body>([\s\S]*?)<script>/);
if (bodyMatch) {
  let body = bodyMatch[1]
    .replace(/src="data:image\/[^"]+"/g, 'src="/brand-logo.png"')
    .replace(/url\(data:image[^)]+\)/g, "url(/hero-photo.jpg)");
  fs.writeFileSync("_extracted-body.html", body);
  console.log("body", body.length);
}
