const sharp = require("sharp");
const path = require("path");

const width = 1200;
const height = 630;

const cards = [
  {
    file: "og-image.png",
    eyebrow: "GRATIS · SIN LOGIN · SIN INSTALAR",
    title: ["El primer prompt", "decide la respuesta."],
    subtitle: "De idea en bruto a brief claro para cualquier IA.",
    cardTitle: ["Respuestas", "menos vagas."],
    badge: ["Tarea + contexto", "pendientes + reglas", "formato de salida"],
    steps: ["1 Elige", "2 Pega", "3 Copia"],
    footer: "Prompt Claro · Open source"
  },
  {
    file: "og-image-en.png",
    eyebrow: "FREE · NO LOGIN · NO INSTALL",
    title: ["Your first prompt", "decides the answer."],
    subtitle: "Turn a rough ask into a clear, verifiable AI brief.",
    cardTitle: ["No more vague", "AI answers."],
    badge: ["Task + context", "missing info + rules", "output format"],
    steps: ["1 Pick", "2 Paste", "3 Copy"],
    footer: "Prompt Claro / Clear Prompt Builder · Open source"
  },
  {
    file: "og-image-hi.png",
    eyebrow: "FREE · NO LOGIN · NO APP INSTALL",
    title: ["पहला prompt", "जवाब तय करता है."],
    subtitle: "Rough idea को clear, verifiable AI brief में बदलें.",
    cardTitle: ["No more vague", "AI answers."],
    badge: ["Task + context", "missing info + rules", "output format"],
    steps: ["1 चुनें", "2 Paste", "3 Copy"],
    footer: "Prompt Claro / Clear Prompt Builder · Open source"
  },
  {
    file: "og-image-pa.png",
    eyebrow: "FREE · NO LOGIN · NO APP INSTALL",
    title: ["ਪਹਿਲਾ prompt", "ਜਵਾਬ ਤੈਅ ਕਰਦਾ ਹੈ."],
    subtitle: "Rough idea ਨੂੰ clear, verifiable AI brief ਵਿੱਚ ਬਦਲੋ.",
    cardTitle: ["No more vague", "AI answers."],
    badge: ["Task + context", "missing info + rules", "output format"],
    steps: ["1 ਚੁਣੋ", "2 Paste", "3 Copy"],
    footer: "Prompt Claro / Clear Prompt Builder · Open source"
  }
];

function escapeText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function stepPills(steps) {
  return steps.map((step, index) => {
    const x = 70 + index * 154;
    const arrow = index < steps.length - 1
      ? `<text x="${x + 114}" y="426" font-size="30" font-weight="700" fill="#137869">→</text>`
      : "";
    return `
      <rect x="${x}" y="386" width="110" height="56" rx="16" fill="#ffffff" stroke="#d7e0ec"/>
      <text x="${x + 55}" y="421" text-anchor="middle" font-size="22" font-weight="800" fill="#172033">${escapeText(step)}</text>
      ${arrow}
    `;
  }).join("");
}

function renderSvg(card) {
  return `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="${width}" height="${height}" fill="#f4f8fb"/>
    <defs>
      <pattern id="grid" width="36" height="36" patternUnits="userSpaceOnUse">
        <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#dce8f0" stroke-width="1"/>
      </pattern>
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#16233a" flood-opacity="0.20"/>
      </filter>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#grid)" opacity="0.75"/>
    <circle cx="1040" cy="-80" r="260" fill="#e9f5f2"/>
    <circle cx="-80" cy="620" r="260" fill="#eef3ff"/>

    <g transform="translate(58 62)">
      <text x="0" y="0" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="900" letter-spacing="1.6" fill="#137869">${escapeText(card.eyebrow)}</text>
      <text x="0" y="82" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="900" fill="#172033">${escapeText(card.title[0])}</text>
      <text x="0" y="156" font-family="Arial, Helvetica, sans-serif" font-size="72" font-weight="900" fill="#172033">${escapeText(card.title[1])}</text>
      <text x="0" y="228" font-family="Arial, Helvetica, sans-serif" font-size="31" font-weight="800" fill="#65738a">${escapeText(card.subtitle)}</text>
      ${stepPills(card.steps)}
      <text x="0" y="520" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="800" fill="#65738a">${escapeText(card.footer)}</text>
    </g>

    <g filter="url(#shadow)">
      <rect x="770" y="218" width="330" height="240" rx="22" fill="#111b2d"/>
      <text x="796" y="284" font-family="Arial, Helvetica, sans-serif" font-size="21" font-weight="900" fill="#9ec5ff">AI-READY BRIEF</text>
      <text x="796" y="330" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="900" fill="#ffffff">${escapeText(card.cardTitle[0])}</text>
      <text x="796" y="364" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="900" fill="#ffffff">${escapeText(card.cardTitle[1])}</text>
      <text x="796" y="398" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" fill="#d9e6f6">${escapeText(card.badge[0])}</text>
      <text x="796" y="424" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" fill="#d9e6f6">${escapeText(card.badge[1])}</text>
      <text x="796" y="450" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" fill="#d9e6f6">${escapeText(card.badge[2])}</text>
    </g>
  </svg>`;
}

async function main() {
  const root = path.resolve(__dirname, "..");
  for (const card of cards) {
    await sharp(Buffer.from(renderSvg(card)))
      .png({ compressionLevel: 9 })
      .toFile(path.join(root, card.file));
    console.log(`generated ${card.file}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
