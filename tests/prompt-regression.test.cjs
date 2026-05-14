const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const dataPath = path.join(__dirname, "..", "data", "prompt-data.js");
const enginePath = path.join(__dirname, "..", "prompt-engine.js");
const appPath = path.join(__dirname, "..", "app.js");
const dataCode = fs.readFileSync(dataPath, "utf8");
const engineCode = fs.readFileSync(enginePath, "utf8");
const appCode = fs.readFileSync(appPath, "utf8");

function createClassList() {
  const classes = new Set();
  return {
    add: (...names) => names.forEach((name) => classes.add(name)),
    remove: (...names) => names.forEach((name) => classes.delete(name)),
    toggle: (name, force) => {
      if (force === undefined) {
        if (classes.has(name)) {
          classes.delete(name);
          return false;
        }
        classes.add(name);
        return true;
      }
      if (force) classes.add(name);
      else classes.delete(name);
      return Boolean(force);
    },
    contains: (name) => classes.has(name),
  };
}

function createElement(initial = {}) {
  const element = {
    value: "",
    textContent: "",
    innerHTML: "",
    checked: false,
    disabled: false,
    dataset: {},
    style: {},
    children: [],
    classList: createClassList(),
    attributes: {},
    ...initial,
    appendChild(child) {
      this.children.push(child);
      if (!this.value && child && Object.prototype.hasOwnProperty.call(child, "value")) {
        this.value = child.value;
      }
      return child;
    },
    addEventListener() {},
    setAttribute(name, value) {
      this.attributes[name] = String(value);
    },
    getAttribute(name) {
      return this.attributes[name];
    },
    removeAttribute(name) {
      delete this.attributes[name];
    },
    scrollIntoView() {},
    select() {},
  };
  return element;
}

function loadApp() {
  const elements = {
    "#rawNotes": createElement(),
    "#caseType": createElement({ value: "general" }),
    "#outputFormat": createElement({ value: "clear" }),
    "#desiredOutcome": createElement(),
    "#pendingRule": createElement({ checked: true }),
    "#promptOutput": createElement(),
    "#statusMessage": createElement(),
    "#aiAnswer": createElement(),
    ".answer-checker": createElement(),
    ".verification": createElement(),
    "#feedbackBox": createElement(),
    "#feedbackStatus": createElement(),
    "#shareBox": createElement(),
    "#verificationPromptOutput": createElement(),
    "#verificationStatus": createElement(),
    "#selectedExamplePreview": createElement(),
    "#exampleStatus": createElement(),
    "#loadSelectedExample": createElement(),
    "#generatePrompt": createElement(),
    "#tryExample": createElement(),
    "#copyPrompt": createElement(),
    "#downloadPrompt": createElement(),
    "#copyShare": createElement(),
    "#generateVerificationPrompt": createElement(),
    "#copyVerificationPrompt": createElement(),
    "#clearForm": createElement(),
  };

  const languageSelect = createElement({ value: "es" });
  const ratingButtons = [1, 2, 3, 4, 5].map((rating) => createElement({ dataset: { rating: String(rating) } }));
  const storage = new Map();

  const document = {
    documentElement: createElement({ lang: "es" }),
    title: "",
    querySelector(selector) {
      if (selector === "meta[name='description']") return createElement();
      if (selector === ".info-page") return null;
      if (selector === "[data-i18n='verification.two']") return createElement();
      return elements[selector] || null;
    },
    querySelectorAll(selector) {
      if (selector === "[data-language-select]") return [languageSelect];
      if (selector === "[data-rating]") return ratingButtons;
      return [];
    },
    createElement() {
      return createElement();
    },
    createRange() {
      return { selectNodeContents() {} };
    },
  };

  const context = {
    console,
    document,
    URL,
    URLSearchParams,
    Blob: class Blob {
      constructor(parts, options) {
        this.parts = parts;
        this.options = options;
      }
    },
    setTimeout,
    clearTimeout,
    window: {
      document,
      location: {
        protocol: "https:",
        href: "https://example.test/nha-tce/",
        pathname: "/nha-tce/",
        search: "",
      },
      history: { replaceState() {} },
      localStorage: {
        getItem(key) {
          return storage.has(key) ? storage.get(key) : null;
        },
        setItem(key, value) {
          storage.set(key, String(value));
        },
      },
      crypto: { randomUUID: () => "test-session-id" },
      scrollY: 0,
      innerWidth: 1024,
      open() {},
      getSelection() {
        return { removeAllRanges() {}, addRange() {} };
      },
    },
  };
  context.globalThis = context;
  context.window.URL = URL;
  context.window.Blob = context.Blob;
  context.window.setTimeout = setTimeout;
  context.window.clearTimeout = clearTimeout;
  context.window.navigator = { clipboard: { writeText() {} } };
  context.navigator = context.window.navigator;

  vm.createContext(context);
  vm.runInContext(dataCode, context, { filename: dataPath });
  vm.runInContext(engineCode, context, { filename: enginePath });
  vm.runInContext(appCode, context, { filename: appPath });

  return { context, elements, languageSelect, ratingButtons };
}

function configurePrompt(app, { language, caseKey, outputKey, notes, outcome, pending = true }) {
  app.context.setLanguage(language);
  app.elements["#caseType"].value = caseKey;
  app.elements["#outputFormat"].value = outputKey;
  app.elements["#rawNotes"].value = notes;
  app.elements["#desiredOutcome"].value = outcome || "";
  app.elements["#pendingRule"].checked = pending;
}

function testEnglishSalesPrompt() {
  const app = loadApp();
  configurePrompt(app, {
    language: "en",
    caseKey: "sales",
    outputKey: "customerReply",
    notes: "Customer asked for price and installation date. Delivery cost is not confirmed.",
    outcome: "Write a careful customer reply.",
  });

  const prompt = app.context.buildPrompt();
  assert.match(prompt, /\[TASK\]/);
  assert.match(prompt, /Work type: Sales \/ Customer/);
  assert.match(prompt, /Requested format: Customer reply/);
  assert.match(prompt, /Mark any missing, uncertain, or unconfirmed information as \[PENDING\]/);
  assert.match(prompt, /Do not promise discounts, dates, delivery, refunds, or compensation unless confirmed/);
  assert.match(prompt, /Customer asked for price and installation date/);
}

function testSpanishPendingOffPrompt() {
  const app = loadApp();
  configurePrompt(app, {
    language: "es",
    caseKey: "legal",
    outputKey: "legalChecklist",
    notes: "Contrato de arrendamiento con fecha y jurisdicción pendientes.",
    pending: false,
  });

  const prompt = app.context.buildPrompt();
  assert.match(prompt, /\[TAREA\]/);
  assert.match(prompt, /Tipo de trabajo: Legal/);
  assert.match(prompt, /Formato solicitado: Checklist legal/);
  assert.match(prompt, /Lista cualquier dato faltante/);
  assert.doesNotMatch(prompt, /Marcar? .*como \[PENDIENTE\]/i);
}

function testVerificationPromptGuard() {
  const app = loadApp();
  configurePrompt(app, {
    language: "en",
    caseKey: "career",
    outputKey: "resume",
    notes: "I want to improve my fresher resume for support roles.",
  });
  const firstPrompt = app.context.buildPrompt();
  app.elements["#promptOutput"].textContent = firstPrompt;
  app.elements["#aiAnswer"].value = firstPrompt;

  const verificationPrompt = app.context.buildVerificationPrompt();
  assert.equal(verificationPrompt, "");
  assert.match(app.elements["#verificationStatus"].textContent, /pasted the initial prompt/i);
}

async function testRatingUnavailableMessage() {
  const app = loadApp();
  app.context.setLanguage("en");
  await app.context.submitRating(5);
  assert.match(app.elements["#feedbackStatus"].textContent, /hosted version/i);
  assert.equal(app.ratingButtons[4].disabled, true);
}

async function run() {
  testEnglishSalesPrompt();
  testSpanishPendingOffPrompt();
  testVerificationPromptGuard();
  await testRatingUnavailableMessage();
  console.log("Prompt regression tests passed.");
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
