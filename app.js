const {
  caseKeys,
  outputKeys,
  outputOptionsByCase,
  translations,
  contextualSamples,
} = window.PromptClaroData;
const {
  buildPromptFromState,
  buildVerificationPromptFromState,
} = window.PromptClaroEngine;

let currentLanguage = "es";
let lastDefaultOutcome = translations.es.defaults.outcome;

const rawNotes = document.querySelector("#rawNotes");
const caseType = document.querySelector("#caseType");
const outputFormat = document.querySelector("#outputFormat");
const desiredOutcome = document.querySelector("#desiredOutcome");
const pendingRule = document.querySelector("#pendingRule");
const promptOutput = document.querySelector("#promptOutput");
const statusMessage = document.querySelector("#statusMessage");
const aiAnswer = document.querySelector("#aiAnswer");
const answerChecker = document.querySelector(".answer-checker");
const humanChecklist = document.querySelector(".verification");
const feedbackBox = document.querySelector("#feedbackBox");
const feedbackStatus = document.querySelector("#feedbackStatus");
const ratingButtons = document.querySelectorAll("[data-rating]");
const shareBox = document.querySelector("#shareBox");
const verificationPromptOutput = document.querySelector("#verificationPromptOutput");
const verificationStatus = document.querySelector("#verificationStatus");
const selectedExamplePreview = document.querySelector("#selectedExamplePreview");
const exampleStatus = document.querySelector("#exampleStatus");
const languageSelects = document.querySelectorAll("[data-language-select]");
let ratingSubmitted = false;

const localizedPageNames = {
  es: "",
  en: "en.html",
  hi: "hi.html",
  pa: "pa.html"
};

const languagePreferenceKey = "prompt-claro-language";

function getLocalizedPath(language) {
  const pageName = localizedPageNames[language] || "";
  const basePath = window.location.pathname
    .replace(/(?:index|en|hi|pa)\.html$/i, "")
    .replace(/\/?$/, "/");
  return `${basePath}${pageName}`;
}

function getShareUrl(language = currentLanguage) {
  if (window.location.protocol === "file:") return "[LINK]";
  const url = new URL(window.location.href);
  url.pathname = getLocalizedPath(language);
  url.search = "";
  url.searchParams.set("lang", language);
  url.searchParams.set("preview", "0.1.11-category-process");
  url.hash = "";
  return url.toString();
}

function getShareText(language = currentLanguage) {
  const languageData = translations[language] || translations.es;
  const previousLanguage = currentLanguage;
  currentLanguage = language;
  const text = languageData.shareText();
  currentLanguage = previousLanguage;
  return text;
}

function openWhatsAppShare(language = currentLanguage) {
  const text = getShareText(language);
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function t(key) {
  return translations[currentLanguage].ui[key] || translations.es.ui[key] || key;
}

function saveLanguagePreference(language) {
  if (!translations[language]) return;
  try {
    window.localStorage.setItem(languagePreferenceKey, language);
  } catch {
    // Ignore storage failures; language still changes for the current page.
  }
}

function getSavedLanguagePreference() {
  try {
    const savedLanguage = window.localStorage.getItem(languagePreferenceKey);
    return translations[savedLanguage] ? savedLanguage : "";
  } catch {
    return "";
  }
}

function setLanguage(language, showChangeNotice = false) {
  const existingPrompt = promptOutput ? promptOutput.textContent.trim() : "";
  const existingVerificationPrompt = verificationPromptOutput ? verificationPromptOutput.textContent.trim() : "";
  const hasGeneratedPrompt = existingPrompt && !isEmptyPrompt(existingPrompt);
  const hasUserText = rawNotes ? rawNotes.value.trim().length > 0 : false;
  const nextLanguage = translations[language] ? language : "es";
  const previousDefault = lastDefaultOutcome;
  currentLanguage = nextLanguage;
  saveLanguagePreference(currentLanguage);
  const languageData = translations[currentLanguage];

  document.documentElement.lang = languageData.htmlLang;
  document.title = document.querySelector(".info-page")
    ? `${t("info.title")} | ${t("hero.title")}`
    : languageData.title;
  const description = document.querySelector("meta[name='description']");
  if (description) description.setAttribute("content", languageData.description);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });

  languageSelects.forEach((select) => {
    select.value = currentLanguage;
  });

  updateLanguageLinks();
  updateBrowserLanguageUrl(currentLanguage);
  populateOptions();
  updateSelectedExamplePreview();
  updatePendingDependentCopy();

  if (desiredOutcome) {
    const existing = desiredOutcome.value.trim();
    if (!existing || existing === previousDefault) {
      desiredOutcome.value = languageData.defaults.outcome;
    }
  }

  lastDefaultOutcome = languageData.defaults.outcome;

  if (promptOutput && (!promptOutput.textContent.trim() || isEmptyPrompt(promptOutput.textContent.trim()))) {
    renderPromptOutput(languageData.defaults.emptyPrompt);
  }

  if (verificationPromptOutput && (!existingVerificationPrompt || isEmptyVerificationPrompt(existingVerificationPrompt))) {
    renderVerificationPromptOutput(languageData.defaults.emptyVerification, false);
  }

  if (showChangeNotice && (hasGeneratedPrompt || hasUserText)) {
    setStatus(languageData.statuses.languageChanged);
  }
}

function populateLanguageSelects() {
  languageSelects.forEach((select) => {
    select.innerHTML = "";
    Object.entries(translations).forEach(([key, value]) => {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = value.name;
      select.appendChild(option);
    });
  });
}

function updateLanguageLinks() {
  document.querySelectorAll("a[href='info.html'], a[href^='info.html?']").forEach((link) => {
    link.href = `info.html?lang=${currentLanguage}`;
  });
  document.querySelectorAll("a[href='index.html'], a[href^='index.html?']").forEach((link) => {
    link.href = `index.html?lang=${currentLanguage}`;
  });
}

function updateBrowserLanguageUrl(language) {
  if (window.location.protocol === "file:" || !window.history?.replaceState) return;

  const currentUrl = new URL(window.location.href);

  if (currentUrl.pathname.endsWith("/info.html")) {
    currentUrl.searchParams.set("lang", language);
    window.history.replaceState({}, "", currentUrl.toString());
    return;
  }

  currentUrl.pathname = getLocalizedPath(language);
  currentUrl.search = "";
  currentUrl.hash = "";
  window.history.replaceState({}, "", currentUrl.toString());
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requestedLanguage = params.get("lang");
  if (translations[requestedLanguage]) return requestedLanguage;

  const pageName = window.location.pathname.split("/").pop().toLowerCase();
  const pageLanguage = pageName
    ? Object.entries(localizedPageNames).find(([, name]) => name === pageName)
    : null;
  if (pageLanguage && translations[pageLanguage[0]]) return pageLanguage[0];

  const savedLanguage = getSavedLanguagePreference();
  if (savedLanguage) return savedLanguage;

  const htmlLanguage = document.documentElement.lang;
  return translations[htmlLanguage] ? htmlLanguage : "es";
}

function populateOptions() {
  if (!caseType || !outputFormat) return;

  const previousCase = caseType.value || "general";
  const previousOutput = outputFormat.value || "clear";
  const languageData = translations[currentLanguage];

  caseType.innerHTML = "";
  caseKeys.forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = languageData.cases[key];
    caseType.appendChild(option);
  });
  caseType.value = caseKeys.includes(previousCase) ? previousCase : "general";

  const availableOutputs = outputOptionsByCase[caseType.value] || outputOptionsByCase.general;
  outputFormat.innerHTML = "";
  availableOutputs.forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = languageData.outputs[key];
    outputFormat.appendChild(option);
  });
  outputFormat.value = availableOutputs.includes(previousOutput) ? previousOutput : availableOutputs[0];
}

function getSelectedExamplePreviewText(selectedCase = caseType.value, selectedOutput = outputFormat.value) {
  const languageData = translations[currentLanguage];
  const caseLabel = languageData.cases[selectedCase];
  const outputLabel = languageData.outputs[selectedOutput];
  const messages = {
    es: `Ejemplo: ${caseLabel} -> ${outputLabel}`,
    en: `Example: ${caseLabel} -> ${outputLabel}`,
    hi: `Example: ${caseLabel} -> ${outputLabel}`,
    pa: `Example: ${caseLabel} -> ${outputLabel}`
  };
  return messages[currentLanguage] || messages.es;
}

function getSelectedExampleButtonText() {
  return t("samples.selected");
}

function getSelectedOutcomeText(selectedCase, selectedOutput) {
  const languageData = translations[currentLanguage];
  const caseLabel = languageData.cases[selectedCase];
  const outputLabel = languageData.outputs[selectedOutput];
  const messages = {
    es: `Usando este texto, prepara ${outputLabel} para un trabajo de ${caseLabel}. No inventes datos y marca lo faltante.`,
    en: `Using this text, prepare ${outputLabel} for ${caseLabel}. Do not invent data and mark what is missing.`,
    hi: `इस text से ${caseLabel} के लिए ${outputLabel} तैयार करें. Data invent न करें और missing चीज़ mark करें.`,
    pa: `ਇਸ text ਨਾਲ ${caseLabel} ਲਈ ${outputLabel} ਤਿਆਰ ਕਰੋ. Data invent ਨਾ ਕਰੋ ਅਤੇ missing ਚੀਜ਼ mark ਕਰੋ.`
  };
  return messages[currentLanguage] || messages.es;
}

function getSelectedExampleLoadedText(selectedCase, selectedOutput) {
  const messages = {
    es: "Ejemplo cargado. Puedes editarlo abajo o generar el prompt.",
    en: "Example loaded. Edit it below or generate the prompt.",
    hi: "Example load हो गया. नीचे edit करें या prompt generate करें.",
    pa: "Example load ਹੋ ਗਿਆ. ਹੇਠਾਂ edit ਕਰੋ ਜਾਂ prompt generate ਕਰੋ."
  };
  return messages[currentLanguage] || messages.es;
}

function updateSelectedExamplePreview() {
  if (!selectedExamplePreview || !caseType || !outputFormat) return;
  selectedExamplePreview.textContent = getSelectedExamplePreviewText();
  const loadButton = document.querySelector("#loadSelectedExample");
  if (loadButton) loadButton.textContent = getSelectedExampleButtonText();
  if (exampleStatus) exampleStatus.textContent = t("samples.selectedHelp");
}

function updatePendingDependentCopy() {
  const verificationMissingItem = document.querySelector("[data-i18n='verification.two']");
  if (!verificationMissingItem || !pendingRule) return;
  verificationMissingItem.textContent = pendingRule.checked ? t("verification.two") : t("verification.twoOff");
}

function isEmptyPrompt(text) {
  return Object.values(translations).some((languageData) => text === languageData.defaults.emptyPrompt);
}

function isEmptyVerificationPrompt(text) {
  return Object.values(translations).some((languageData) => text === languageData.defaults.emptyVerification);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderOutputElement(element, text) {
  if (!element) return;
  const safeText = escapeHtml(text);
  element.innerHTML = safeText.replace(
    /\[(PENDIENTE|PENDING)\]/gi,
    '<span class="pending-marker">[$1]</span>'
  );
}

function renderPromptOutput(text) {
  renderOutputElement(promptOutput, text);
}

function renderVerificationPromptOutput(text, show = false) {
  renderOutputElement(verificationPromptOutput, text);
  if (verificationPromptOutput) {
    verificationPromptOutput.classList.toggle("is-hidden", !show);
  }
}

function showAnswerChecker() {
  if (answerChecker) answerChecker.classList.remove("is-hidden");
}

function hideAnswerChecker() {
  if (answerChecker) answerChecker.classList.add("is-hidden");
  if (answerChecker && "open" in answerChecker) answerChecker.open = false;
}

function showGeneratedFlow() {
  if (humanChecklist) humanChecklist.classList.add("is-hidden");
  if (feedbackBox) feedbackBox.classList.add("is-hidden");
  if (shareBox) shareBox.classList.add("is-hidden");
  hideAnswerChecker();
  resetRatingState();
}

function showCopiedFlow() {
  if (humanChecklist) humanChecklist.classList.remove("is-hidden");
  if (feedbackBox) feedbackBox.classList.remove("is-hidden");
  if (shareBox) shareBox.classList.remove("is-hidden");
  showAnswerChecker();
}

function hidePostPromptFlow() {
  if (humanChecklist) humanChecklist.classList.add("is-hidden");
  if (feedbackBox) feedbackBox.classList.add("is-hidden");
  if (shareBox) shareBox.classList.add("is-hidden");
  hideAnswerChecker();
}

function setFeedbackStatus(message, warning = false) {
  if (!feedbackStatus) return;
  feedbackStatus.textContent = message;
  feedbackStatus.classList.toggle("warning", warning);
}

function getRatingSessionId() {
  const key = "prompt-claro-session";
  try {
    let value = window.localStorage.getItem(key);
    if (!value) {
      value = window.crypto && window.crypto.randomUUID
        ? window.crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      window.localStorage.setItem(key, value);
    }
    return value;
  } catch {
    return null;
  }
}

function setSelectedRating(rating) {
  ratingButtons.forEach((button) => {
    const buttonRating = Number(button.dataset.rating);
    button.classList.toggle("is-selected", buttonRating <= rating);
    button.setAttribute("aria-checked", String(buttonRating === rating));
  });
}

function setRatingButtonsDisabled(disabled) {
  ratingButtons.forEach((button) => {
    button.disabled = disabled;
  });
}

function resetRatingState() {
  ratingSubmitted = false;
  setRatingButtonsDisabled(false);
  setSelectedRating(0);
  setFeedbackStatus("");
}

function getRatingEndpoint() {
  if (typeof fetch !== "function") return "";
  if (!window.location || window.location.protocol === "file:") return "";
  return "/api/nha-tce/rating";
}

async function submitRating(rating) {
  const languageData = translations[currentLanguage];
  if (ratingSubmitted) return;

  setSelectedRating(rating);
  setRatingButtonsDisabled(true);
  setFeedbackStatus("");

  const ratingEndpoint = getRatingEndpoint();
  if (!ratingEndpoint) {
    ratingSubmitted = true;
    setFeedbackStatus(languageData.statuses.ratingUnavailable || languageData.statuses.ratingFailed, false);
    return;
  }

  try {
    const response = await fetch(ratingEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        rating,
        language: currentLanguage,
        workType: caseType ? caseType.value : null,
        outputFormat: outputFormat ? outputFormat.value : null,
        path: window.location.pathname,
        sessionId: getRatingSessionId(),
      }),
    });

    if (!response.ok) throw new Error("Rating failed");
    ratingSubmitted = true;
    setFeedbackStatus(languageData.statuses.ratingSaved);
  } catch {
    ratingSubmitted = true;
    setFeedbackStatus(languageData.statuses.ratingFailed || languageData.statuses.ratingUnavailable, false);
  }
}

function buildPrompt() {
  const languageData = translations[currentLanguage];
  const result = buildPromptFromState({
    translations,
    language: currentLanguage,
    notes: rawNotes.value,
    caseKey: caseType.value,
    outputKey: outputFormat.value,
    outcome: desiredOutcome.value,
    pendingEnabled: pendingRule.checked,
  });

  if (result.statusKey) {
    setStatus(languageData.statuses[result.statusKey], true);
    return "";
  }

  return result.text;
}

function buildVerificationPrompt() {
  const languageData = translations[currentLanguage];
  const result = buildVerificationPromptFromState({
    translations,
    language: currentLanguage,
    notes: rawNotes.value,
    answer: aiAnswer ? aiAnswer.value : "",
    caseKey: caseType.value,
    outputKey: outputFormat.value,
    firstPrompt: promptOutput ? promptOutput.textContent.trim() : "",
    isEmptyPrompt,
  });

  if (result.statusKey) {
    setVerificationStatus(languageData.statuses[result.statusKey], true);
    return "";
  }

  return result.text;
}

function setStatus(message, warning = false) {
  if (!statusMessage) return;
  statusMessage.textContent = message;
  statusMessage.classList.toggle("warning", warning);
}

function setVerificationStatus(message, warning = false) {
  if (!verificationStatus) return;
  verificationStatus.textContent = message;
  verificationStatus.classList.toggle("warning", warning);
}

function shouldNudgeToOutput() {
  return window.matchMedia("(max-width: 860px)").matches;
}

function getScrollBehavior() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function nudgeToElement(selector) {
  const element = document.querySelector(selector);
  if (!element || !shouldNudgeToOutput()) return;

  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }

  window.setTimeout(() => {
    element.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
  }, 90);
}

function nudgeToOutputPanel() {
  nudgeToElement(".output-panel");
}

function nudgeToCopyButton() {
  nudgeToElement("#copyPrompt");
}

function nudgeToInput() {
  nudgeToElement("#rawNotes");
}

function nudgeToVerificationPrompt() {
  nudgeToElement(".verification-output");
}

function resetVerificationPrompt() {
  if (aiAnswer) aiAnswer.value = "";
  resetVerificationResult();
}

function resetVerificationResult() {
  renderVerificationPromptOutput(translations[currentLanguage].defaults.emptyVerification, false);
  setVerificationStatus("");
}

function loadSample(sampleName, generateImmediately = false) {
  const languageData = translations[currentLanguage];
  const settings = languageData.sampleSettings[sampleName];

  rawNotes.value = languageData.samples[sampleName];
  caseType.value = settings.caseKey;
  outputFormat.value = settings.outputKey;
  desiredOutcome.value = settings.desiredOutcome;
  resetVerificationPrompt();

  if (generateImmediately) {
    const prompt = buildPrompt();
    renderPromptOutput(prompt);
    showGeneratedFlow();
    setStatus(languageData.statuses.sampleReady);
    nudgeToCopyButton();
    return;
  }

  setStatus(languageData.statuses.sampleLoaded);
}

function loadSelectedExample() {
  const languageData = translations[currentLanguage];
  const selectedCase = caseType.value;
  const selectedOutput = outputFormat.value;
  const fallbackSamples = contextualSamples[currentLanguage] || contextualSamples.es;

  rawNotes.value = languageData.samples[selectedCase] || fallbackSamples[selectedCase] || fallbackSamples.general;
  desiredOutcome.value = getSelectedOutcomeText(selectedCase, selectedOutput);
  renderPromptOutput(languageData.defaults.emptyPrompt);
  resetVerificationPrompt();
  hidePostPromptFlow();
  const message = getSelectedExampleLoadedText(selectedCase, selectedOutput);
  if (exampleStatus) exampleStatus.textContent = message;
  setStatus(message);
  nudgeToInput();
}

function setupToolPage() {
  if (!rawNotes || !caseType || !outputFormat || !desiredOutcome || !pendingRule || !promptOutput) return;

  document.querySelector("#generatePrompt").addEventListener("click", () => {
    const prompt = buildPrompt();
    if (!prompt) return;
    renderPromptOutput(prompt);
    resetVerificationResult();
    showGeneratedFlow();
    setStatus(translations[currentLanguage].statuses.generated);
    nudgeToCopyButton();
  });

  document.querySelector("#tryExample").addEventListener("click", () => {
    nudgeToInput();
    if (rawNotes) rawNotes.focus({ preventScroll: true });
  });

  document.querySelector("#loadSelectedExample").addEventListener("click", () => {
    loadSelectedExample();
  });

  caseType.addEventListener("change", () => {
    populateOptions();
    updateSelectedExamplePreview();
    const languageData = translations[currentLanguage];
    desiredOutcome.value = getSelectedOutcomeText(caseType.value, outputFormat.value);
    if (exampleStatus) exampleStatus.textContent = t("samples.selectedHelp");
    setStatus(languageData.statuses.optionChanged);
  });
  outputFormat.addEventListener("change", () => {
    updateSelectedExamplePreview();
    desiredOutcome.value = getSelectedOutcomeText(caseType.value, outputFormat.value);
    setStatus(translations[currentLanguage].statuses.optionChanged);
  });
  pendingRule.addEventListener("change", () => {
    updatePendingDependentCopy();
    const prompt = promptOutput.textContent.trim();
    if (prompt && !isEmptyPrompt(prompt)) {
      setStatus(translations[currentLanguage].statuses.optionChanged);
    }
  });

  document.querySelector("#copyPrompt").addEventListener("click", async () => {
    const languageData = translations[currentLanguage];
    const prompt = promptOutput.textContent.trim();
    if (!prompt || isEmptyPrompt(prompt)) {
      setStatus(languageData.statuses.copyFirst, true);
      return;
    }

    try {
      await navigator.clipboard.writeText(prompt);
      showCopiedFlow();
      setStatus(languageData.statuses.copied);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(promptOutput);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      showCopiedFlow();
      setStatus(languageData.statuses.selected, true);
    }
  });

  document.querySelector("#downloadPrompt").addEventListener("click", () => {
    const languageData = translations[currentLanguage];
    const prompt = promptOutput.textContent.trim();
    if (!prompt || isEmptyPrompt(prompt)) {
      setStatus(languageData.statuses.downloadFirst, true);
      return;
    }

    const blob = new Blob([prompt], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = languageData.downloadFileName || "prompt-claro.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    setStatus(languageData.statuses.downloaded);
  });

  document.querySelector("#copyShare").addEventListener("click", async () => {
    const languageData = translations[currentLanguage];
    try {
      await navigator.clipboard.writeText(getShareText(currentLanguage));
      setStatus(languageData.statuses.shareCopied);
    } catch {
      setStatus(languageData.statuses.shareFailed, true);
    }
  });

  document.querySelectorAll("[data-share-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.shareLanguage || currentLanguage;
      openWhatsAppShare(language);
    });
  });

  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      submitRating(Number(button.dataset.rating));
    });
  });

  const generateVerificationButton = document.querySelector("#generateVerificationPrompt");
  if (generateVerificationButton) {
    generateVerificationButton.addEventListener("click", () => {
      const languageData = translations[currentLanguage];
      const verificationPrompt = buildVerificationPrompt();
      if (!verificationPrompt) return;
      renderVerificationPromptOutput(verificationPrompt, true);
      setVerificationStatus(languageData.statuses.verifyGenerated);
      nudgeToVerificationPrompt();
    });
  }

  const copyVerificationButton = document.querySelector("#copyVerificationPrompt");
  if (copyVerificationButton) {
    copyVerificationButton.addEventListener("click", async () => {
      const languageData = translations[currentLanguage];
      const verificationPrompt = verificationPromptOutput ? verificationPromptOutput.textContent.trim() : "";
      if (!verificationPrompt || isEmptyVerificationPrompt(verificationPrompt)) {
        setVerificationStatus(languageData.statuses.verifyCopyFirst, true);
        return;
      }

      try {
        await navigator.clipboard.writeText(verificationPrompt);
        setVerificationStatus(languageData.statuses.verifyCopied);
      } catch {
        const range = document.createRange();
        range.selectNodeContents(verificationPromptOutput);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        setVerificationStatus(languageData.statuses.verifySelected, true);
      }
    });
  }

  document.querySelector("#clearForm").addEventListener("click", () => {
    const languageData = translations[currentLanguage];
    rawNotes.value = "";
    caseType.value = "general";
    outputFormat.value = "clear";
    desiredOutcome.value = languageData.defaults.outcome;
    renderPromptOutput(languageData.defaults.emptyPrompt);
    resetVerificationPrompt();
    hidePostPromptFlow();
    resetRatingState();
    if (exampleStatus) exampleStatus.textContent = t("samples.selectedHelp");
    setStatus("");
  });
}

function init() {
  populateLanguageSelects();
  languageSelects.forEach((select) => {
    select.addEventListener("change", () => setLanguage(select.value, true));
  });
  setLanguage(getInitialLanguage());
  setupToolPage();
}

init();
