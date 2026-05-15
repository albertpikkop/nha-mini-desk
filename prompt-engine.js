(function () {
  "use strict";

  function hasPendingMarker(rule) {
    return /\[(PENDIENTE|PENDING)\]/i.test(rule);
  }

  function getPendingAwareRules(rules, pendingEnabled) {
    return pendingEnabled ? rules : rules.filter((rule) => !hasPendingMarker(rule));
  }

  function buildPromptFromState(options) {
    const {
      translations,
      language,
      notes,
      caseKey,
      outputKey,
      outcome,
      pendingEnabled,
    } = options;
    const languageData = translations[language] || translations.es;
    const cleanNotes = notes.trim();
    const selectedCase = caseKey || "general";
    const selectedFormat = outputKey || "clear";
    const desiredOutcome = outcome.trim() || languageData.defaults.outcome;
    const pendingInstruction = pendingEnabled
      ? languageData.prompt.pendingOn
      : languageData.prompt.pendingOff;

    if (!cleanNotes) return { text: "", statusKey: "missingNotes" };

    const extraRules = getPendingAwareRules(
      languageData.caseGuidance[selectedCase] || languageData.caseGuidance.general,
      pendingEnabled
    ).map((rule) => `- ${rule}`).join("\n");
    const expectationRules = languageData.prompt.expectations.map((rule) => `- ${rule}`).join("\n");
    const selectedProcessSteps =
      (languageData.categoryProcessSteps && languageData.categoryProcessSteps[selectedCase]) ||
      languageData.prompt.processSteps ||
      [];
    const processSteps = getPendingAwareRules(selectedProcessSteps, pendingEnabled)
      .map((rule, index) => `${index + 1}. ${rule}`)
      .join("\n");
    const nhaRules = getPendingAwareRules(languageData.prompt.nhaRules, pendingEnabled)
      .map((rule) => `- ${rule}`)
      .join("\n");
    const finalChecks = getPendingAwareRules(languageData.prompt.finalCheck || [], pendingEnabled)
      .map((rule) => `- ${rule}`)
      .join("\n");

    return {
      text: `[${languageData.prompt.headings.task}]
${desiredOutcome}

[${languageData.prompt.headings.context}]
${languageData.prompt.caseType}: ${languageData.cases[selectedCase]}
${languageData.prompt.audienceLabel}: ${languageData.prompt.audience}
${languageData.prompt.rawContext}

[${languageData.prompt.headings.notes}]
${cleanNotes}

[${languageData.prompt.headings.expectation}]
${expectationRules}
- ${languageData.prompt.responseLanguage}
- ${pendingInstruction}

[${languageData.prompt.headings.process}]
${processSteps}

[${languageData.prompt.headings.rules}]
${nhaRules}
${extraRules}

[${languageData.prompt.headings.finalCheck}]
${languageData.prompt.finalCheckIntro}
${finalChecks}

[${languageData.prompt.headings.output}]
${languageData.prompt.formatRequested}: ${languageData.outputs[selectedFormat]}
${languageData.formatGuidance[selectedFormat]}`,
    };
  }

  function looksLikeInitialPrompt(answer, originalPrompt, isEmptyPrompt = () => false) {
    const normalizedAnswer = answer.trim();
    const normalizedPrompt = originalPrompt && !isEmptyPrompt(originalPrompt)
      ? originalPrompt.trim()
      : "";

    if (normalizedPrompt && normalizedAnswer === normalizedPrompt) return true;

    const promptMarkers = [
      "[TAREA]", "[TASK]", "[काम]", "[ਕੰਮ]",
      "[CONTEXTO]", "[CONTEXT]", "[संदर्भ]", "[ਸੰਦਰਭ]",
      "[TEXTO ORIGINAL]", "[ORIGINAL TEXT]", "[मूल टेक्स्ट]", "[ਮੂਲ text]",
      "[EXPECTATIVA]", "[EXPECTATION]", "[उम्मीद]", "[ਉਮੀਦ]",
      "[FORMATO DE SALIDA]", "[OUTPUT FORMAT]"
    ];

    const markerCount = promptMarkers.filter((marker) => normalizedAnswer.includes(marker)).length;
    return markerCount >= 3;
  }

  function buildVerificationPromptFromState(options) {
    const {
      translations,
      language,
      notes,
      answer,
      caseKey,
      outputKey,
      firstPrompt,
      isEmptyPrompt,
    } = options;
    const languageData = translations[language] || translations.es;
    const audit = languageData.auditPrompt;
    const cleanNotes = notes.trim();
    const cleanAnswer = answer.trim();
    const selectedCase = caseKey || "general";
    const selectedFormat = outputKey || "clear";
    const originalPrompt = firstPrompt && !isEmptyPrompt(firstPrompt)
      ? firstPrompt
      : audit.sourcePromptMissing;

    if (!cleanNotes) return { text: "", statusKey: "verifyMissingOriginal" };
    if (!cleanAnswer) return { text: "", statusKey: "verifyMissingAnswer" };

    if (looksLikeInitialPrompt(cleanAnswer, originalPrompt, isEmptyPrompt)) {
      return { text: "", statusKey: "verifyLooksLikePrompt" };
    }

    const rules = audit.rules.map((rule) => `- ${rule}`).join("\n");
    const outputRules = audit.output.map((rule, index) => `${index + 1}. ${rule}`).join("\n");

    return {
      text: `[${audit.headings.task}]
${audit.task}

[${audit.headings.context}]
${audit.workType}: ${languageData.cases[selectedCase]}
${audit.expectedOutput}: ${languageData.outputs[selectedFormat]}
${audit.sourceMode}
${languageData.prompt.responseLanguage}

[${audit.headings.notes}]
${cleanNotes}

[${audit.headings.sourcePrompt}]
${originalPrompt}

[${audit.headings.answer}]
${cleanAnswer}

[${audit.headings.rules}]
${rules}

[${audit.headings.output}]
${outputRules}`,
    };
  }

  function countWords(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  function scorePromptInput(options) {
    const {
      notes,
      outcome,
      caseKey,
      outputKey,
      pendingEnabled,
      promptText,
    } = options;
    const wordCount = countWords(notes || "");
    const cleanOutcome = (outcome || "").trim();
    const cleanPrompt = promptText || "";
    const strengths = [];
    const missing = [];
    let score = 0;

    if (cleanOutcome.length >= 28) {
      score += 25;
      strengths.push("goal");
    } else {
      missing.push("goal");
    }

    if (wordCount >= 25) {
      score += 25;
      strengths.push("contextStrong");
    } else if (wordCount >= 10) {
      score += 15;
      strengths.push("contextBasic");
      missing.push("context");
    } else {
      missing.push("context");
    }

    if (caseKey && outputKey && !(caseKey === "general" && outputKey === "clear")) {
      score += 20;
      strengths.push("format");
    } else {
      score += 10;
      missing.push("specificTemplate");
    }

    if (pendingEnabled) {
      score += 20;
      strengths.push("pending");
    } else {
      missing.push("pending");
    }

    if (/\[(FINAL CHECK|REVISI[ÓO]N FINAL|अंतिम|FINAL)\]/i.test(cleanPrompt) || cleanPrompt.includes("[PENDING]") || cleanPrompt.includes("[PENDIENTE]")) {
      score += 10;
      strengths.push("safety");
    } else {
      missing.push("safety");
    }

    return {
      score: Math.min(score, 100),
      wordCount,
      strengths,
      missing,
    };
  }

  function summarizeRawInput(notes, maxLength = 180) {
    const cleanNotes = notes.trim().replace(/\s+/g, " ");
    if (cleanNotes.length <= maxLength) return cleanNotes;
    return `${cleanNotes.slice(0, maxLength - 1).trim()}...`;
  }

  function buildShareCardText(options) {
    const {
      title,
      score,
      rawLabel,
      improvedLabel,
      strengthsLabel,
      linkLabel,
      rawNotes,
      improvedPrompt,
      strengths,
      shareUrl,
    } = options;
    const promptPreview = improvedPrompt.trim().split("\n").filter(Boolean).slice(0, 8).join("\n");
    const strengthLines = strengths.slice(0, 3).map((item) => `- ${item}`).join("\n");

    return `${title}: ${score}/100

${rawLabel}
${summarizeRawInput(rawNotes)}

${improvedLabel}
${promptPreview}

${strengthsLabel}
${strengthLines}

${linkLabel}
${shareUrl}`;
  }

  window.PromptClaroEngine = {
    buildPromptFromState,
    buildVerificationPromptFromState,
    looksLikeInitialPrompt,
    scorePromptInput,
    buildShareCardText,
  };
})();
