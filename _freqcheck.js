/* Temporary: dump visible-copy lines containing engagement/collaboration words. */
const fs = require("fs");
const path = require("path");
const ROOT = __dirname;

/* ---------- 1. collect Arabic and English visible copy separately ---------- */
const AR_RE = /[\u0621-\u064A\u0627\u0623\u0625\u0622\u0629\u0624\u0626\u06A9\u06AF\u06CC]/;
const LAT_RE = /[A-Za-z]/;

const arSources = [];
const enSources = [];

// 1a. content.js string literals (language detected by script type)
const contentSrc = fs.readFileSync(path.join(ROOT, "content.js"), "utf8");
const litRe = /"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'/g;
let lm;
while ((lm = litRe.exec(contentSrc)) !== null) {
  const raw = (lm[1] !== undefined ? lm[1] : lm[2]) || "";
  if (!raw.trim()) continue;
  if (/^https?:|^mailto:/i.test(raw.trim())) continue;
  if (AR_RE.test(raw)) arSources.push(raw);
  else if (LAT_RE.test(raw)) enSources.push(raw);
}

// 1b. HTML text nodes (all HTML shells are Arabic; English arrives via content.js)
const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
for (const file of htmlFiles) {
  let raw = fs.readFileSync(path.join(ROOT, file), "utf8");
  raw = raw.replace(/<!--[\s\S]*?-->/g, " ");
  raw = raw.replace(/<script[\s\S]*?<\/script>/gi, " ");
  raw = raw.replace(/<style[\s\S]*?<\/style>/gi, " ");
  raw = raw.replace(/<[^>]+>/g, " ");
  arSources.push(raw);
}

const arText = arSources.join(" \n ");
const enText = enSources.join(" \n ");

/* ---------- 2. normalize ---------- */
const AR_DIACRITICS = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g;
function normAr(w) {
  return w
    .replace(AR_DIACRITICS, "")
    .replace(/\u0629/g, "\u0647")
    .replace(/\u0649/g, "\u064A")
    .replace(/[\u0623\u0625\u0622\u0627]/g, "\u0627");
}
/** Strip Arabic clitic prefixes (ال / و / ل / ب / ف / ك + ال) to reach the stem. */
function stemAr(tok) {
  let t = tok;
  let changed = true;
  while (changed) {
    changed = false;
    if (/^[\u0644\u0648\u0628\u0641\u0643]\u0627/.test(t) && t.length > 5) { t = t.slice(2); changed = true; continue; }
    if (/^[\u0644\u0648\u0628\u0641\u0643]/.test(t) && t.length > 4) { t = t.slice(1); changed = true; continue; }
    if (/^\u0627\u0644/.test(t) && t.length > 4) { t = t.slice(2); changed = true; continue; }
  }
  return t;
}

/* ---------- 3. count stems ---------- */
const arStems = {};
for (const m of arText.matchAll(/[\u0621-\u064A\u0627\u0623\u0625\u0622\u0629\u0624\u0626\u06A9\u06AF\u06CC]+/g)) {
  const s = stemAr(normAr(m[0]));
  if (s.length < 3) continue;
  arStems[s] = (arStems[s] || 0) + 1;
}
const enWords = {};
for (const m of enText.matchAll(/[A-Za-z][A-Za-z'-]{2,}/g)) {
  const w = m[0].toLowerCase();
  enWords[w] = (enWords[w] || 0) + 1;
}

/* ---------- 4. candidate families ---------- */
const CANDIDATES = [
  { label: "تواصل / Contact", ar: ["تواصل"], en: ["connect", "connected", "connection", "contact", "contacts"] },
  { label: "تعاون / Collaborat*", ar: ["تعاون"], en: ["collaboration", "collaborations", "collaborate", "collaborating", "collaborative"] },
  { label: "شراك / Partner*", ar: ["شراك"], en: ["partnership", "partnerships", "partner", "partners"] },
  { label: "حوار / Dialog*", ar: ["حوار"], en: ["dialogue", "dialogues", "conversation", "conversations"] },
  { label: "مشروع / Project*", ar: ["مشروع"], en: ["project", "projects"] },
  { label: "فكر / Idea*", ar: ["فكر"], en: ["idea", "ideas"] },
  { label: "ثقاف / Cultur*", ar: ["ثقاف"], en: ["culture", "cultural"] },
  { label: "عمل / Work*", ar: ["عمل"], en: ["work", "works", "working"] },
  { label: "رسالة / Message*", ar: ["رسال"], en: ["message", "messages"] },
  { label: "استشار / Consult*", ar: ["استشار"], en: ["consultation", "consulting", "consultancy"] },
  { label: "مشارك / Participat*", ar: ["مشارك"], en: ["participation", "participate", "participating"] }
];

const rows = CANDIDATES.map((c) => {
  const arHits = Object.entries(arStems).filter(([s]) => c.ar.some((k) => s.startsWith(k)));
  const arN = arHits.reduce((n, [, c2]) => n + c2, 0);
  const enHits = Object.entries(enWords).filter(([w]) => c.en.includes(w));
  const enN = enHits.reduce((n, [, c2]) => n + c2, 0);
  return {
    label: c.label,
    arN,
    enN,
    total: arN + enN,
    brk:
      "ar[" + arHits.map(([w, n]) => `${w}=${n}`).join(", ") + "]" +
      " en[" + enHits.map(([w, n]) => `${w}=${n}`).join(", ") + "]"
  };
});
rows.sort((a, b) => b.total - a.total || b.arN - a.arN);

const lines = [];
lines.push("AR sources: content.js AR literals + HTML text nodes (" + htmlFiles.length + " files)");
lines.push("EN sources: content.js EN literals");
lines.push("");
lines.push("CANDIDATE".padEnd(26) + "AR".padStart(4) + "EN".padStart(4) + "TOT".padStart(5) + "   breakdown");
for (const r of rows) {
  lines.push(r.label.padEnd(26) + String(r.arN).padStart(4) + String(r.enN).padStart(4) + String(r.total).padStart(5) + "   " + r.brk);
}
lines.push("");
lines.push("=== AR TOP 35 STEMS (visible copy) ===");
lines.push(Object.entries(arStems).sort((a, b) => b[1] - a[1]).slice(0, 35).map(([w, c]) => `${w}\t${c}`).join("\n"));
lines.push("");
lines.push("=== EN TOP 35 WORDS (visible copy) ===");
lines.push(Object.entries(enWords).sort((a, b) => b[1] - a[1]).slice(0, 35).map(([w, c]) => `${w}\t${c}`).join("\n"));

/* ---------- 5. context dump for engagement families ---------- */
const CONTEXT_KEYS = {
  "\u062a\u0639\u0627\u0648\u0646": "COLLAB-AR",
  "\u0634\u0631\u0627\u0643": "PARTNER-AR",
  "\u062d\u0648\u0627\u0631": "DIALOG-AR",
  "\u0645\u0634\u0627\u0631\u0643": "PARTICIPATE-AR",
  "\u062a\u0648\u0627\u0635\u0644": "CONTACT-AR",
  "\u0627\u062a\u0635\u0644": "REACH-AR",
  "\u0641\u0643\u0631": "IDEA-AR"
};
const CONTEXT_EN = {
  collaborat: "COLLAB-EN",
  partner: "PARTNER-EN",
  dialog: "DIALOG-EN",
  conversation: "CONV-EN",
  connect: "CONNECT-EN",
  contact: "CONTACT-EN",
  idea: "IDEA-EN",
  engag: "ENGAGE-EN"
};

const ctxLines = [];
const litRe2 = /"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'/g;
let lm2;
while ((lm2 = litRe2.exec(contentSrc)) !== null) {
  const raw = (lm2[1] !== undefined ? lm2[1] : lm2[2]) || "";
  if (!raw.trim()) continue;
  if (/^https?:|^mailto:/i.test(raw.trim())) continue;
  for (const key in CONTEXT_KEYS) {
    if (raw.indexOf(key) !== -1) {
      ctxLines.push(`[${CONTEXT_KEYS[key]}] ${raw.replace(/\s+/g, " ").slice(0, 200)}`);
      break;
    }
  }
  for (const key in CONTEXT_EN) {
    if (raw.toLowerCase().indexOf(key) !== -1) {
      ctxLines.push(`[${CONTEXT_EN[key]}] ${raw.replace(/\s+/g, " ").slice(0, 200)}`);
      break;
    }
  }
}
for (const file of htmlFiles) {
  let raw = fs.readFileSync(path.join(ROOT, file), "utf8");
  raw = raw.replace(/<!--[\s\S]*?-->/g, " ").replace(/<script[\s\S]*?<\/script>/gi, " ");
  raw = raw.replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ");
  for (const chunk of raw.split(/\n+/)) {
    const t = chunk.replace(/\s+/g, " ").trim();
    if (t.length < 4) continue;
    for (const key in CONTEXT_KEYS) {
      if (t.indexOf(key) !== -1) {
        ctxLines.push(`[${CONTEXT_KEYS[key]}|html] ${t.slice(0, 200)}`);
        break;
      }
    }
  }
}

lines.push("");
lines.push("=== CONTEXT DUMP (unique, sorted) ===");
lines.push([...new Set(ctxLines)].sort().join("\n"));

fs.writeFileSync(path.join(ROOT, "_freqout.txt"), lines.join("\n"), "utf8");
console.log("written _freqout.txt (" + lines.length + " lines)");
