const caseKeys = ["general", "legal", "consulting", "cx", "operations", "coding", "proposal"];
const outputKeys = ["facts", "summary", "draft", "actionPlan", "email", "risks"];

const translations = {
  es: {
    name: "Español",
    htmlLang: "es",
    title: "Prompt Claro | Brief claro para cualquier IA",
    description: "Convierte una idea en bruto en un brief claro para ChatGPT, Gemini, Claude, Codex, Cursor o la IA que uses. Gratis, sin login y sin instalar nada.",
    ui: {
      "language.label": "Idioma",
      "hero.eyebrow": "Gratis · Sin login · Sin instalar nada",
      "hero.title": "Prompt Claro",
      "hero.subtitle": "De idea cruda a brief listo para ChatGPT, Claude, Gemini, Codex o Cursor.",
      "hero.tryExample": "Probar en 20 segundos",
      "hero.privacy": "Lo que escribes no se guarda en una base de datos.",
      "why.label": "Error común al pedir IA",
      "why.copy": "La mayoría pide: \"ayúdame a mejorar esto. Hablé con un cliente; ventas está desordenado. Dame un plan.\" La IA tiene que adivinar tarea, contexto, formato, faltantes y riesgos. Elige abajo y acláralo primero.",
      "steps.one": "Elige el trabajo",
      "steps.two": "Carga o pega",
      "steps.three": "Copia a tu IA",
      "input.title": "1. Elige el trabajo",
      "input.subtitle": "Primero selecciona qué quieres hacer. Después escribe o pega tu idea tal como está.",
      "input.explainerTitle": "No tienes que arreglarlo antes.",
      "input.explainerCopy": "Puede ser una idea, un mensaje, una llamada o un correo. La herramienta lo convierte en una instrucción clara para la IA.",
      "form.caseLabel": "¿Qué tipo de trabajo es?",
      "form.outputLabel": "¿Qué quieres recibir?",
      "form.choiceHelp": "Primero elige el tipo de trabajo y el resultado que quieres. Luego carga un ejemplo o escribe tu propio caso abajo.",
      "samples.selected": "Cargar este ejemplo",
      "samples.selectedHelp": "Se cargará un caso de ejemplo según tu selección.",
      "samples.cx": "Cargar ejemplo de mensaje",
      "samples.consultoria": "Cargar ejemplo de consultoría",
      "samples.arrendamiento": "Cargar ejemplo legal",
      "notes.title": "2. Escribe o pega tu caso",
      "notes.subtitle": "Puede ser un mensaje, una llamada, un correo, una idea o un texto medio revuelto.",
      "notes.label": "Tu idea, mensaje o texto, sin arreglar",
      "notes.help": "No lo maquilles. Escribe como piensas o pega lo que ya tienes; si hay dudas o datos faltantes, déjalos ahí.",
      "notes.placeholder": "Ejemplo: quiero responder a un cliente, tengo estos datos, falta confirmar la fecha, no quiero prometer algo que no sé...",
      "outcome.label": "Dile a la IA qué quieres que te entregue",
      "pending.label": "Si falta información, obligar a la IA a marcar [PENDIENTE]",
      "actions.generate": "3. Generar prompt",
      "actions.clear": "Limpiar",
      "output.title": "4. Copia y usa",
      "output.subtitle": "Este texto lleva reglas para ordenar la información y reducir inventos.",
      "output.nextTitle": "Qué haces después",
      "output.nextCopy": "Copia este prompt y pégalo en ChatGPT, Gemini, Claude o la IA que uses. Vas a darle una instrucción mucho más clara.",
      "actions.copy": "Copiar para tu IA",
      "actions.download": "Descargar .txt",
      "share.title": "¿Te ayudó este método?",
      "share.copy": "Si te sirvió, mándaselo a alguien que todavía le pide cosas a la IA de forma desordenada.",
      "actions.share": "Copiar invitación para compartir",
      "verification.title": "Antes de confiar en la respuesta de la IA",
      "verification.one": "¿La IA separó hechos de supuestos?",
      "verification.two": "¿Marcó lo faltante como [PENDIENTE]?",
      "verification.twoOff": "¿Separó claramente lo faltante o incierto?",
      "verification.three": "¿Inventó algún dato que no estaba en tu texto?",
      "verification.four": "¿El resultado se puede rastrear a información real?",
      "verification.five": "¿Hay una decisión humana pendiente antes de usarlo?",
      "privacy.note": "La herramienta no guarda lo que escribes. Si quieres borrarlo de la pantalla, presiona \"Limpiar\" o cierra la pestaña.",
      "footer.creator": "Creado por Albert Punj",
      "footer.meta": "v0.1.3 · © 2026 Albert Punj · Lanzado 6 May 2026",
      "footer.license": "MIT License",
      "footer.info": "Cómo funciona y términos",
      "info.eyebrow": "Método NHA",
      "info.title": "Cómo funciona y términos",
      "info.subtitle": "Una explicación sencilla para que sepas qué hace y qué no hace.",
      "info.whatTitle": "Qué hace",
      "info.whatOne": "Prompt Claro toma lo que quieres pedirle a la IA y lo convierte en un brief más claro para ChatGPT, Gemini, Claude, Codex, Cursor o la IA que uses.",
      "info.whatTwo": "No responde por la IA. No reemplaza tu criterio. Solo te ayuda a pedir mejor.",
      "info.howTitle": "Cómo se usa",
      "info.howOne": "Elige qué tipo de trabajo quieres hacer.",
      "info.howTwo": "Escribe o pega tu caso tal como lo tienes.",
      "info.howThree": "Genera el prompt.",
      "info.howFour": "Copia el prompt y pégalo en ChatGPT, Gemini, Claude o la IA que uses.",
      "info.howFive": "Revisa la respuesta antes de usarla.",
      "info.browserTitle": "Cómo funciona",
      "info.browserOne": "La página arma el prompt en tu navegador. No necesitas instalar una app ni crear cuenta.",
      "info.browserTwo": "La herramienta no guarda lo que escribes en una base de datos y no lo envía a nuestro servidor para generar el prompt.",
      "info.browserThree": "Si quieres borrar lo que pegaste, presiona \"Limpiar\" o cierra la pestaña.",
      "info.privacyTitle": "Privacidad",
      "info.privacyOne": "Evita pegar información extremadamente sensible si no estás seguro de querer trabajar con ella en una página web.",
      "info.privacyTwo": "Los navegadores pueden conservar temporalmente el estado de una página por comodidad. La herramienta no guarda lo que escribes de forma intencional.",
      "info.limitsTitle": "Límites",
      "info.limitsOne": "La salida de cualquier IA puede tener errores. Revisa siempre nombres, fechas, cifras, leyes, datos médicos, datos financieros y cualquier decisión importante.",
      "info.limitsTwo": "Esta herramienta no da asesoría legal, médica, financiera ni profesional. Es una ayuda para ordenar instrucciones.",
      "info.termsTitle": "Términos de uso",
      "info.termsOne": "Usa la herramienta bajo tu responsabilidad. Tú decides qué información pegar, qué prompt usar y qué hacer con la respuesta de la IA.",
      "info.termsTwo": "No uses esta herramienta para crear contenido ilegal, engañoso, dañino o para tomar decisiones importantes sin revisión humana.",
      "info.curiosityTitle": "Para personas curiosas",
      "info.curiosityOne": "El proyecto está hecho como una página simple de navegador. La idea es que más personas aprendan a usar IA con método, sin depender de herramientas complicadas.",
      "footer.back": "Volver a Prompt Claro"
    },
    cases: {
      general: "General",
      legal: "Legal México",
      consulting: "Consultoría",
      cx: "CX / Cliente",
      operations: "Operaciones",
      coding: "Código / producto",
      proposal: "Propuesta comercial"
    },
    outputs: {
      facts: "Lista de hechos y pendientes",
      summary: "Resumen ejecutivo",
      draft: "Borrador de documento",
      actionPlan: "Plan de acción",
      email: "Email profesional",
      risks: "Checklist de riesgos"
    },
    defaults: {
      outcome: "Convierte mi caso en una salida clara, verificable y lista para revisar antes de usar.",
      emptyPrompt: "Tu prompt aparecerá aquí. Primero escribe o pega tu caso y presiona \"Generar prompt\"."
    },
    downloadFileName: "prompt-claro.txt",
    statuses: {
      missingNotes: "Primero escribe o pega tu caso. Puede estar desordenado; esa es la idea.",
      generated: "Listo. Copia este prompt y pégalo en ChatGPT, Gemini, Claude o la IA que uses.",
      sampleReady: "Ejemplo listo. Copia el prompt y pégalo en ChatGPT, Gemini, Claude o la IA que uses para ver la diferencia.",
      sampleLoaded: "Ejemplo cargado. Puedes editarlo antes de generar el prompt.",
      copyFirst: "Genera un prompt antes de copiar.",
      copied: "Prompt copiado al portapapeles.",
      selected: "No se pudo copiar automáticamente. El prompt quedó seleccionado.",
      downloadFirst: "Genera un prompt antes de descargar.",
      downloaded: "Archivo prompt-claro.txt descargado.",
      shareCopied: "Mensaje para compartir copiado.",
      shareFailed: "No se pudo copiar el mensaje. Copia el link manualmente.",
      languageChanged: "Idioma cambiado. Tu texto y prompt actual se conservan. Presiona \"Generar prompt\" para crear una versión en este idioma.",
      optionChanged: "Opción cambiada. Presiona \"Generar prompt\" otra vez para actualizar el prompt."
    },
    prompt: {
      headings: {
        task: "TAREA",
        context: "CONTEXTO",
        notes: "TEXTO ORIGINAL",
        expectation: "EXPECTATIVA",
        rules: "REGLAS DE VERIFICACIÓN",
        output: "FORMATO DE SALIDA"
      },
      caseType: "Tipo de trabajo",
      audienceLabel: "Audiencia",
      audience: "Profesional mexicano que necesita una salida útil, clara y verificable.",
      rawContext: "La información viene de un texto inicial y puede estar incompleta, mezclada o escrita con urgencia.",
      responseLanguage: "Responde en español claro, salvo que el texto original pida otro idioma.",
      pendingOn: "Marca cualquier dato faltante, incierto o no confirmado como [PENDIENTE].",
      pendingOff: "Lista cualquier dato faltante, incierto o no confirmado en una sección de Faltantes.",
      expectations: [
        "Trabaja con cuidado y no asumas datos críticos.",
        "Usa lenguaje profesional y claro.",
        "Separa lo confirmado de lo supuesto.",
        "Si falta información crítica, lista preguntas primero y después entrega una versión provisional usando solo hechos confirmados.",
        "Mantén la respuesta práctica y concisa; no escribas un reporte largo si el formato no lo pide."
      ],
      nhaRules: [
        "Separa hechos confirmados de supuestos.",
        "Marca datos faltantes como [PENDIENTE].",
        "No inventes nombres, fechas, cifras, RFCs, artículos, cláusulas, fuentes ni datos legales.",
        "Si falta información crítica, lista preguntas antes de cualquier conclusión.",
        "Incluye una sección de riesgos.",
        "Incluye verificación humana solo si aporta valor; no agregues secciones extra si el formato solicitado ya cubre riesgos y preguntas.",
        "No agregues secciones fuera del formato solicitado salvo que sean necesarias."
      ],
      formatRequested: "Formato solicitado"
    },
    caseGuidance: {
      legal: ["No inventes artículos de ley.", "No inventes RFC.", "No inventes nombres de sociedades.", "Si falta jurisdicción, marca [PENDIENTE].", "Si falta identificación de partes, marca [PENDIENTE].", "Recomienda revisión por abogado antes de usar cualquier documento."],
      consulting: ["Separa síntomas de causas probables.", "No inventes métricas.", "Marca supuestos de negocio como [PENDIENTE].", "Incluye preguntas para diagnóstico."],
      cx: ["Mantén tono empático y profesional.", "No prometas compensaciones o fechas no confirmadas.", "Separa hechos internos de información del cliente.", "Incluye siguiente acción clara."],
      operations: ["Distingue problemas urgentes de mejoras estructurales.", "No inventes responsables.", "Marca dependencias y fechas faltantes como [PENDIENTE].", "Incluye riesgos operativos."],
      coding: ["Separa comportamiento observado de hipótesis.", "No inventes rutas de archivos, funciones, APIs, errores ni dependencias.", "Si faltan stack, logs, pasos para reproducir o versión, marca [PENDIENTE].", "Incluye plan de depuración, cambios sugeridos y pruebas de verificación."],
      proposal: ["No inventes precios ni alcance.", "Separa necesidad confirmada de oportunidad posible.", "Incluye preguntas antes de cotizar.", "Sugiere estructura de propuesta."],
      general: ["Separa hechos, supuestos y pendientes.", "No inventes datos.", "Incluye preguntas de aclaración.", "Incluye riesgos de usar la salida sin revisión."]
    },
    formatGuidance: {
      facts: "Entrega una lista práctica, no un reporte. Usa solo estas secciones: Hechos confirmados, Supuestos, Pendientes, Riesgos, Preguntas. Máximo 6 bullets por sección. Evita sub-secciones si no son necesarias.",
      summary: "Entrega un resumen ejecutivo breve, seguido de pendientes y riesgos. Máximo 500 palabras.",
      draft: "Solo redacta borrador si la información crítica está completa. Si falta información, primero lista preguntas y luego un borrador provisional marcado como tal.",
      actionPlan: "Entrega un plan práctico, no un reporte de consultoría completo. Incluye acciones, responsable sugerido si está indicado, fecha si existe, pendientes y riesgos. Máximo 700 palabras.",
      email: "Entrega asunto, cuerpo del email, tono recomendado y datos que faltan antes de enviar. Máximo 350 palabras.",
      risks: "Entrega riesgos priorizados, evidencia en el texto y acción de mitigación. Máximo 8 riesgos."
    },
    samples: {
      cx: `Cliente molesto escribió por mensaje:

"Ya es la tercera vez que me dicen que mi pedido llega mañana y nada. Lo compré hace casi dos semanas. Nadie me contesta bien. Si no llega hoy quiero devolución."

Datos internos:

Pedido probablemente #MX-4821, pero no estoy seguro porque el mensaje llegó sin número.

Cliente se llama Mariana López, apellido materno pendiente.

Compra aproximada: 24 o 25 de abril. Producto: silla ergonómica negra. En sistema aparece un retraso por inventario, pero falta confirmar con logística.

El equipo de soporte quiere responder con empatía, explicar situación y pedir datos faltantes sin sonar burocrático.

No prometer entrega hoy si no está confirmado.

Necesitamos respuesta profesional y plan de seguimiento.`,
      consulting: `Contexto de llamada con cliente:

Empresa mediana de servicios B2B en Monterrey. La llamada fue con Carlos Rivas, dueño de la empresa. Tienen equipo comercial de 6 personas. Carlos dice que están perdiendo oportunidades porque los vendedores no dan seguimiento constante.

Usan mensajes, Excel y correo. No tienen CRM formal. Cada vendedor maneja sus leads como quiere.

Problema principal: nadie sabe cuántos prospectos hay, quién dio seguimiento, quién está caliente y quién se perdió.

Carlos quiere "automatizar con IA", pero parece que primero necesitan ordenar proceso.

Mencionó que reciben 80 a 120 leads al mes, pero no está seguro. También dijo que la tasa de cierre anda entre 8% y 12%, pero no hay datos confiables.

Quiere propuesta para diagnóstico de 2 semanas y luego implementación.

Pendiente confirmar presupuesto, herramientas actuales y quién sería responsable interno.`,
      legal: `Licenciado, necesitamos preparar contrato de arrendamiento para un local comercial en Roma Norte, CDMX.

El local mide aprox 120 m2. La renta sería de $38,000 mensuales más IVA. El arrendador podría ser José Luis Hernández, pero falta confirmar si factura como persona física o moral.

La clienta, Ana Sofía Martínez, quiere iniciar el 15 de junio, pero todavía no está 100% confirmado porque están esperando adecuaciones del local.

El arrendatario probablemente será una S.A. de C.V.; mencionaron "Comercializadora Altavista", pero no tengo todavía razón social completa ni RFC.

Quieren depósito de 2 meses. También quieren saber si se puede incluir subarrendamiento con autorización previa por escrito.

José Luis quiere penalización si se salen antes de 12 meses. No sé todavía monto.

Urge tener una primera versión para revisión mañana.`
    },
    sampleSettings: {
      cx: { caseKey: "cx", outputKey: "email", desiredOutcome: "Prepara una respuesta empática y profesional, separando lo confirmado de lo pendiente antes de prometer algo." },
      consulting: { caseKey: "consulting", outputKey: "actionPlan", desiredOutcome: "Organiza esta información de llamada en diagnóstico, prioridades, preguntas pendientes y siguiente paso." },
      legal: { caseKey: "legal", outputKey: "facts", desiredOutcome: "Convierte esta información en hechos, pendientes, riesgos y preguntas para responder mejor." }
    },
    shareText: () => `Amigos, prueben Prompt Claro.

Convierte una idea en bruto en un brief claro para ChatGPT, Claude, Gemini, Codex, Cursor o la IA que uses.

Ordena la tarea -> agrega contexto -> marca pendientes -> copia un mejor prompt

Gratis. Sin login. Sin instalar nada.

Si te sirve, compártelo con alguien que pueda beneficiarse de este método:
${getShareUrl()}`
  },

  en: {
    name: "English",
    htmlLang: "en",
    title: "Clear Prompt Builder | Clear AI briefs from rough thoughts",
    description: "Turn a rough idea into a clear brief for ChatGPT, Gemini, Claude, Codex, Cursor, or any AI tool. Free, no login, no app install.",
    ui: {
      "language.label": "Language",
      "hero.eyebrow": "Free · No login · No app install",
      "hero.title": "Clear Prompt Builder",
      "hero.subtitle": "From rough idea to an AI-ready brief for ChatGPT, Claude, Gemini, Codex, or Cursor.",
      "hero.tryExample": "Try in 20 seconds",
      "hero.privacy": "What you write is not saved in a database.",
      "why.label": "Common prompt mistake",
      "why.copy": "Most people ask: \"Help me make this better. I spoke to a client; sales is messy. Give me a plan.\" AI has to guess the task, context, format, missing info, and risks. Choose below to make it clear first.",
      "steps.one": "Pick the work",
      "steps.two": "Load or paste",
      "steps.three": "Copy to AI",
      "input.title": "1. Pick the work",
      "input.subtitle": "First choose the kind of work. Then write or paste your rough ask as it is.",
      "input.explainerTitle": "No need to polish it first.",
      "input.explainerCopy": "It can be an idea, message, call, or email. The tool turns it into a clear instruction for AI.",
      "form.caseLabel": "What type of work is this?",
      "form.outputLabel": "What do you want to receive?",
      "form.choiceHelp": "Choose the work and the output you want. Then load a matching example or write your own case below.",
      "samples.selected": "Load this example",
      "samples.selectedHelp": "A sample case will load below based on your selection.",
      "samples.cx": "Load message example",
      "samples.consultoria": "Load consulting example",
      "samples.arrendamiento": "Load legal example",
      "notes.title": "2. Write or paste your case",
      "notes.subtitle": "A message, call, email, first ask, or rough text is enough.",
      "notes.label": "Your idea, message, or text, unpolished",
      "notes.help": "Do not make it neat yet. Write it the way it came to you or paste what you already have.",
      "notes.placeholder": "Example: I want to reply to a client, I have these details, the date is not confirmed, I do not want to promise something I do not know...",
      "outcome.label": "Tell the AI what you want back",
      "pending.label": "If information is missing, force the AI to mark it as [PENDING]",
      "actions.generate": "3. Generate prompt",
      "actions.clear": "Clear",
      "output.title": "4. Copy and use",
      "output.subtitle": "This prompt includes rules to organize the information and reduce made-up details.",
      "output.nextTitle": "What to do next",
      "output.nextCopy": "Copy this prompt and paste it into ChatGPT, Gemini, Claude, or any AI you use. You will be giving the AI a much clearer brief.",
      "actions.copy": "Copy for your AI",
      "actions.download": "Download .txt",
      "share.title": "Did this method help?",
      "share.copy": "If it helped, share it with someone who still sends messy asks straight into AI.",
      "actions.share": "Copy invitation to share",
      "verification.title": "Before trusting the AI response",
      "verification.one": "Did the AI separate facts from assumptions?",
      "verification.two": "Did it mark missing information as [PENDING]?",
      "verification.twoOff": "Did it clearly separate missing or uncertain information?",
      "verification.three": "Did it invent anything that was not in your text?",
      "verification.four": "Can the result be traced back to real information?",
      "verification.five": "Is there a human decision pending before using it?",
      "privacy.note": "The tool does not save what you write. To remove it from the screen, press \"Clear\" or close the tab.",
      "footer.creator": "Created by Albert Punj",
      "footer.meta": "v0.1.3 · © 2026 Albert Punj · Released 6 May 2026",
      "footer.license": "MIT License",
      "footer.info": "How it works and terms",
      "info.eyebrow": "NHA Method",
      "info.title": "How it works and terms",
      "info.subtitle": "A plain explanation of what the tool does and what it does not do.",
      "info.whatTitle": "What it does",
      "info.whatOne": "Clear Prompt Builder takes what you want the AI to do and turns it into a clearer brief for ChatGPT, Gemini, Claude, Codex, Cursor, or any AI you use.",
      "info.whatTwo": "It does not answer for the AI. It does not replace your judgment. It only helps you ask better.",
      "info.howTitle": "How to use it",
      "info.howOne": "Choose the type of work you want to do.",
      "info.howTwo": "Write or paste your case as it is.",
      "info.howThree": "Generate the prompt.",
      "info.howFour": "Copy the prompt and paste it into ChatGPT, Gemini, Claude, or any AI you use.",
      "info.howFive": "Review the response before using it.",
      "info.browserTitle": "How it works",
      "info.browserOne": "The page builds the prompt in your browser. You do not need to install an app or create an account.",
      "info.browserTwo": "The tool does not save what you write in a database and does not send it to our server to generate the prompt.",
      "info.browserThree": "To remove what you pasted, press \"Clear\" or close the tab.",
      "info.privacyTitle": "Privacy",
      "info.privacyOne": "Avoid pasting extremely sensitive information if you are not sure you want to work with it on a web page.",
      "info.privacyTwo": "Browsers may temporarily preserve page state for convenience. The tool does not intentionally save what you write.",
      "info.limitsTitle": "Limits",
      "info.limitsOne": "Any AI output can contain mistakes. Always review names, dates, numbers, laws, medical information, financial information, and important decisions.",
      "info.limitsTwo": "This tool does not provide legal, medical, financial, or professional advice. It helps organize instructions.",
      "info.termsTitle": "Terms of use",
      "info.termsOne": "Use the tool at your own responsibility. You decide what information to paste, what prompt to use, and what to do with the AI response.",
      "info.termsTwo": "Do not use this tool to create illegal, deceptive, harmful content or to make important decisions without human review.",
      "info.curiosityTitle": "For curious people",
      "info.curiosityOne": "The project is built as a simple browser page. The idea is to help more people use AI with method, without depending on complicated tools.",
      "footer.back": "Back to Clear Prompt Builder"
    },
    cases: {
      general: "General",
      legal: "Legal India",
      consulting: "Consulting",
      cx: "CX / Customer",
      operations: "Operations",
      coding: "Coding / Product",
      proposal: "Commercial proposal"
    },
    outputs: {
      facts: "Facts and pending items",
      summary: "Executive summary",
      draft: "Document draft",
      actionPlan: "Action plan",
      email: "Professional email",
      risks: "Risk checklist"
    },
    defaults: {
      outcome: "Turn my case into a clear, verifiable output that is ready to review before use.",
      emptyPrompt: "Your prompt will appear here. First write or paste your case and press \"Generate prompt\"."
    },
    downloadFileName: "clear-prompt-builder.txt",
    statuses: {
      missingNotes: "First write or paste your case. It can be messy; that is the point.",
      generated: "Ready. Copy this prompt and paste it into ChatGPT, Gemini, Claude, or any AI you use.",
      sampleReady: "Example ready. Copy the prompt and paste it into ChatGPT, Gemini, Claude, or any AI you use to see the difference.",
      sampleLoaded: "Example loaded. You can edit it before generating the prompt.",
      copyFirst: "Generate a prompt before copying.",
      copied: "Prompt copied to clipboard.",
      selected: "Could not copy automatically. The prompt has been selected.",
      downloadFirst: "Generate a prompt before downloading.",
      downloaded: "File clear-prompt-builder.txt downloaded.",
      shareCopied: "Share message copied.",
      shareFailed: "Could not copy the message. Copy the link manually.",
      languageChanged: "Language changed. Your text and current prompt were kept. Press \"Generate prompt\" to create a version in this language.",
      optionChanged: "Option changed. Press \"Generate prompt\" again to update the prompt."
    },
    prompt: {
      headings: { task: "TASK", context: "CONTEXT", notes: "ORIGINAL TEXT", expectation: "EXPECTATION", rules: "AI GUARDRAILS", output: "OUTPUT FORMAT" },
      caseType: "Work type",
      audienceLabel: "Audience",
      audience: "Indian professional user who needs a useful, clear, verifiable output.",
      rawContext: "The information comes from the user's original text and may be incomplete, mixed, or written in a hurry.",
      responseLanguage: "Respond in clear English unless the original text asks for another language.",
      pendingOn: "Mark any missing, uncertain, or unconfirmed information as [PENDING].",
      pendingOff: "List any missing, uncertain, or unconfirmed information in a Missing information section.",
      expectations: ["Work carefully and do not assume critical details.", "Use clear professional language.", "Separate confirmed information from assumptions.", "If critical information is missing, list questions first and then give a provisional output using confirmed facts only.", "Keep the answer practical and concise; do not write a long report unless the format asks for one."],
      nhaRules: ["Separate confirmed facts from assumptions.", "Mark missing information as [PENDING].", "Do not invent names, dates, numbers, IDs, legal articles, clauses, sources, or legal facts.", "If critical information is missing, list questions before any conclusion.", "Include a risks section.", "Include human verification only when useful; do not add extra sections if the requested format already covers risks and questions.", "Do not add sections outside the requested format unless necessary."],
      formatRequested: "Requested format"
    },
    caseGuidance: {
      legal: ["Do not invent legal articles.", "Do not invent IDs or registration numbers.", "Do not invent company names.", "If jurisdiction is missing, mark [PENDING].", "If party identification is missing, mark [PENDING].", "Recommend lawyer review before using any document."],
      consulting: ["Separate symptoms from probable causes.", "Do not invent metrics.", "Mark business assumptions as [PENDING].", "Include diagnostic questions."],
      cx: ["Keep the tone empathetic and professional.", "Do not promise compensation or dates that are not confirmed.", "Separate internal facts from customer information.", "Include a clear next action."],
      operations: ["Separate urgent problems from structural improvements.", "Do not invent owners.", "Mark missing dependencies and dates as [PENDING].", "Include operational risks."],
      coding: ["Separate observed behavior from hypotheses.", "Do not invent file paths, functions, APIs, errors, or dependencies.", "If stack, logs, reproduction steps, or version are missing, mark [PENDING].", "Include a debugging plan, suggested changes, and verification tests."],
      proposal: ["Do not invent prices or scope.", "Separate confirmed need from possible opportunity.", "Include questions before quoting.", "Suggest a proposal structure."],
      general: ["Separate facts, assumptions, and pending items.", "Do not invent data.", "Include clarification questions.", "Include risks of using the output without review."]
    },
    formatGuidance: {
      facts: "Give a practical list, not a report. Use only these sections: Confirmed facts, Assumptions, Pending items, Risks, Questions. Maximum 6 bullets per section. Avoid sub-sections unless necessary.",
      summary: "Give a brief executive summary, followed by pending items and risks. Maximum 500 words.",
      draft: "Only draft if critical information is complete. If information is missing, list questions first and then give a provisional draft marked as such.",
      actionPlan: "Give a practical plan, not a full consulting report. Include actions, suggested owner if indicated, date if present, pending items, and risks. Maximum 700 words.",
      email: "Give subject, email body, recommended tone, and missing details before sending. Maximum 350 words.",
      risks: "Give prioritized risks, evidence in the text, and mitigation action. Maximum 8 risks."
    },
    samples: {
      cx: `An upset customer sent this message:

"This is the third time your team said my order will be delivered tomorrow. I ordered almost two weeks ago. Nobody is giving a clear answer. If it does not arrive today, I want a refund."

Internal context:

Order is probably #IN-4821, but I am not sure because the message came without an order number.

Customer name is Riya Sharma, phone number pending.

Approximate purchase date: 24 or 25 April. Product: black ergonomic chair. System shows a warehouse delay, but courier status must be confirmed.

Support team wants to respond with empathy, explain the situation, and ask for missing details without sounding bureaucratic.

Do not promise delivery today if it is not confirmed.

We need a professional response and follow-up plan.`,
      consulting: `Call context:

Indian B2B services company in Gurugram. The call was with Amit Mehra, the founder. Sales team of 8 people. Amit says they are losing opportunities because the team does not follow up consistently.

They use WhatsApp, Excel, and Gmail. No formal CRM. Each salesperson handles leads their own way.

Main problem: nobody knows how many prospects exist, who followed up, who is warm, and who was lost.

Amit wants to "automate with AI", but it seems they need to organize the process first.

He mentioned 200 to 300 leads per month, but he is not sure. He also said close rate is around 5% to 7%, but there is no reliable data.

He wants a proposal for a 2-week diagnosis and then implementation.

Pending: confirm budget, current tools, and who would be responsible internally.`,
      legal: `We need to prepare a lease agreement for a commercial shop in Sector 67, Mohali.

The shop is about 900 sq ft. Rent would be Rs 85,000 monthly plus GST if applicable. Landlord may be Harpreet Singh, but we still need to confirm whether he is signing as an individual or through a firm.

The client contact, Neha Kapoor, wants to start on 15 June, but it is not 100% confirmed because interior work is still pending.

Tenant will probably be UrbanFit Retail Private Limited, but I do not yet have full legal name, CIN, GSTIN, or authorized signatory details.

They want a 2-month security deposit. They also want to know if subletting can be included with prior written approval.

Harpreet wants a lock-in penalty if they leave before 12 months. I do not know the amount yet.

Need first version for review tomorrow.`
    },
    sampleSettings: {
      cx: { caseKey: "cx", outputKey: "email", desiredOutcome: "Prepare an empathetic and professional response, separating confirmed information from pending items before promising anything." },
      consulting: { caseKey: "consulting", outputKey: "actionPlan", desiredOutcome: "Organize this call context into diagnosis, priorities, pending questions, and next step." },
      legal: { caseKey: "legal", outputKey: "facts", desiredOutcome: "Turn this information into facts, pending items, risks, and questions to respond better." }
    },
    shareText: () => `Try Clear Prompt Builder.

Write or paste what you want to ask AI and turn it into a clear prompt for ChatGPT, Gemini, Claude, or any AI you use.

Choose the work -> write or paste your idea -> copy a better prompt

Free. No login. No app install.

If it helps, share it with someone who could benefit from this method:
${getShareUrl()}`
  },

  hi: {
    name: "हिंदी",
    htmlLang: "hi",
    title: "Clear Prompt Builder | अपनी बात को बेहतर prompt में बदलें",
    description: "AI से जो करवाना है, जैसे दिमाग में है वैसे लिखें या paste करें. Clear Prompt Builder उसे ChatGPT, Gemini, Claude या किसी भी AI के लिए clear prompt बना देता है. Free, no login, no app install.",
    ui: {
      "language.label": "भाषा",
      "hero.eyebrow": "Free - Login नहीं - App install नहीं",
      "hero.title": "Clear Prompt Builder",
      "hero.subtitle": "Rough idea से ChatGPT, Claude, Gemini, Codex या Cursor के लिए AI-ready brief बनाएं.",
      "hero.tryExample": "20 सेकंड में try करें",
      "hero.privacy": "आप जो लिखते हैं, वह database में save नहीं होता.",
      "why.label": "Common prompting mistake",
      "why.copy": "Most people लिखते हैं: \"isko better bana do. Client से बात हुई; sales messy है. Plan दे दो.\" AI को task, context, format, missing info और risks guess करने पड़ते हैं. नीचे चुनकर पहले brief clear करें.",
      "steps.one": "काम चुनें",
      "steps.two": "Load या paste",
      "steps.three": "AI में copy",
      "input.title": "1. काम चुनें",
      "input.subtitle": "पहले काम का type चुनें. फिर अपनी rough बात जैसे है वैसे डाल दें.",
      "input.explainerTitle": "पहले polish करने की जरूरत नहीं.",
      "input.explainerCopy": "Idea, message, call या email कुछ भी हो सकता है. Tool उसे AI के लिए clear instruction में बदल देता है.",
      "form.caseLabel": "किस तरह का काम है?",
      "form.outputLabel": "AI से क्या output चाहिए?",
      "form.choiceHelp": "काम और output चुनें. फिर matching example load करें या नीचे अपना case लिखें.",
      "samples.selected": "यह example load करें",
      "samples.selectedHelp": "आपकी selection के हिसाब से sample case नीचे load होगा.",
      "samples.cx": "Message example load करें",
      "samples.consultoria": "Consulting example load करें",
      "samples.arrendamiento": "Legal example load करें",
      "notes.title": "2. अपना case लिखें या paste करें",
      "notes.subtitle": "Message, call, email, पहली बात या rough text काफी है.",
      "notes.label": "आपकी बात, message या text, बिना polish किए",
      "notes.help": "Perfect बनाने की जरूरत नहीं. जैसे मन में आया है वैसे लिखें या जो already है वह paste कर दें.",
      "notes.placeholder": "Example: मुझे client को reply करना है, मेरे पास ये details हैं, date confirm नहीं है, मैं ऐसी बात promise नहीं करना चाहता जो मुझे पता नहीं...",
      "outcome.label": "AI से क्या वापस चाहिए?",
      "pending.label": "अगर जानकारी missing है, AI को [PENDING] mark करने को कहें",
      "actions.generate": "3. Prompt generate करें",
      "actions.clear": "Clear",
      "output.title": "4. Copy करें और use करें",
      "output.subtitle": "इस prompt में information को order करने और invented details कम करने के rules हैं.",
      "output.nextTitle": "इसके बाद क्या करें",
      "output.nextCopy": "इस prompt को copy करें और ChatGPT, Gemini, Claude या जिस AI को आप use करते हैं उसमें paste करें. AI को अब much clearer brief मिलेगा.",
      "actions.copy": "अपनी AI के लिए copy करें",
      "actions.download": ".txt download करें",
      "share.title": "क्या यह method helpful लगा?",
      "share.copy": "अगर काम आया, तो इसे ऐसे किसी व्यक्ति को भेजें जो अभी भी rough बात सीधे AI में डाल देता है.",
      "actions.share": "Share invitation copy करें",
      "verification.title": "AI response पर भरोसा करने से पहले",
      "verification.one": "क्या AI ने facts और assumptions अलग किए?",
      "verification.two": "क्या missing information को [PENDING] mark किया?",
      "verification.twoOff": "क्या missing या uncertain information साफ अलग की?",
      "verification.three": "क्या आपके text में न होने वाली कोई बात invent की?",
      "verification.four": "क्या result real information से trace हो सकता है?",
      "verification.five": "Use करने से पहले कोई human decision pending है?",
      "privacy.note": "यह tool आपकी लिखी हुई चीज़ save नहीं करता. Screen से हटाने के लिए \"Clear\" दबाएं या tab बंद करें.",
      "footer.creator": "Created by Albert Punj",
      "footer.meta": "v0.1.3 · © 2026 Albert Punj · Released 6 May 2026",
      "footer.license": "MIT License",
      "footer.info": "कैसे काम करता है और terms",
      "info.eyebrow": "NHA Method",
      "info.title": "कैसे काम करता है और terms",
      "info.subtitle": "Simple explanation: tool क्या करता है, और क्या नहीं करता.",
      "info.whatTitle": "यह क्या करता है",
      "info.whatOne": "Clear Prompt Builder AI से जो काम करवाना है उसे ChatGPT, Gemini, Claude या जिस AI को आप use करते हैं उसके लिए clear prompt में बदलता है.",
      "info.whatTwo": "यह AI की जगह जवाब नहीं देता. यह आपके judgment को replace नहीं करता. यह सिर्फ बेहतर पूछने में मदद करता है.",
      "info.howTitle": "Use कैसे करें",
      "info.howOne": "जिस तरह का काम करना है, उसे चुनें.",
      "info.howTwo": "अपना case जैसे है वैसे लिखें या paste करें.",
      "info.howThree": "Prompt generate करें.",
      "info.howFour": "Prompt copy करें और ChatGPT, Gemini, Claude या जिस AI को आप use करते हैं उसमें paste करें.",
      "info.howFive": "Use करने से पहले response review करें.",
      "info.browserTitle": "यह कैसे काम करता है",
      "info.browserOne": "Page आपके browser में prompt बनाता है. App install या account बनाने की जरूरत नहीं.",
      "info.browserTwo": "Tool आपकी लिखी हुई बात database में save नहीं करता और prompt बनाने के लिए हमारे server पर नहीं भेजता.",
      "info.browserThree": "Paste की हुई चीज हटाने के लिए \"Clear\" दबाएं या tab बंद करें.",
      "info.privacyTitle": "Privacy",
      "info.privacyOne": "अगर आप sure नहीं हैं कि web page पर काम करना है, तो extremely sensitive information paste न करें.",
      "info.privacyTwo": "Browsers सुविधा के लिए page state temporary रख सकते हैं. Tool intentionally आपकी लिखी हुई बात save नहीं करता.",
      "info.limitsTitle": "Limits",
      "info.limitsOne": "किसी भी AI की output में errors हो सकते हैं. Names, dates, numbers, laws, medical info, financial info और important decisions हमेशा review करें.",
      "info.limitsTwo": "यह tool legal, medical, financial या professional advice नहीं देता. यह instructions को order करने में मदद करता है.",
      "info.termsTitle": "Terms of use",
      "info.termsOne": "Tool को अपनी responsibility पर use करें. कौनसी information paste करनी है, कौनसा prompt use करना है, और AI response से क्या करना है, यह आप decide करते हैं.",
      "info.termsTwo": "Illegal, deceptive, harmful content बनाने या human review के बिना important decisions लेने के लिए इस tool का use न करें.",
      "info.curiosityTitle": "Curious लोगों के लिए",
      "info.curiosityOne": "यह project एक simple browser page की तरह बना है. Idea है कि ज्यादा लोग complicated tools पर depend किए बिना method से AI use करना सीखें.",
      "footer.back": "Clear Prompt Builder पर वापस जाएं"
    },
    cases: {
      general: "General",
      legal: "Legal India",
      consulting: "Consulting",
      cx: "CX / Customer",
      operations: "Operations",
      coding: "Coding / Product",
      proposal: "Commercial proposal"
    },
    outputs: {
      facts: "Facts और pending items",
      summary: "Executive summary",
      draft: "Document draft",
      actionPlan: "Action plan",
      email: "Professional email",
      risks: "Risk checklist"
    },
    defaults: {
      outcome: "मेरे case को clear, verifiable output में बदलें जिसे use करने से पहले review किया जा सके.",
      emptyPrompt: "आपका prompt यहां दिखेगा. पहले अपना case लिखें या paste करें, फिर \"Prompt generate करें\" दबाएं."
    },
    downloadFileName: "clear-prompt-builder.txt",
    statuses: {
      missingNotes: "पहले अपना case लिखें या paste करें. Messy हो सकता है; यही तो काम है.",
      generated: "Ready. इस prompt को copy करें और ChatGPT, Gemini, Claude या जिस AI को आप use करते हैं उसमें paste करें.",
      sampleReady: "Example ready. फर्क देखने के लिए prompt copy करके ChatGPT, Gemini, Claude या जिस AI को आप use करते हैं उसमें paste करें.",
      sampleLoaded: "Example loaded. Prompt generate करने से पहले आप इसे edit कर सकते हैं.",
      copyFirst: "Copy करने से पहले prompt generate करें.",
      copied: "Prompt clipboard में copy हो गया.",
      selected: "Automatically copy नहीं हुआ. Prompt selected है.",
      downloadFirst: "Download करने से पहले prompt generate करें.",
      downloaded: "File clear-prompt-builder.txt download हो गई.",
      shareCopied: "Share message copy हो गया.",
      shareFailed: "Message copy नहीं हुआ. Link manually copy करें.",
      languageChanged: "Language बदल गई. आपका text और current prompt वैसे ही रखे गए हैं. इस भाषा में version बनाने के लिए \"Prompt generate करें\" दबाएं.",
      optionChanged: "Option बदल गई. Prompt update करने के लिए \"Prompt generate करें\" फिर दबाएं."
    },
    prompt: {
      headings: { task: "काम", context: "संदर्भ", notes: "मूल टेक्स्ट", expectation: "उम्मीद", rules: "AI GUARDRAILS", output: "OUTPUT FORMAT" },
      caseType: "काम का प्रकार",
      audienceLabel: "Audience",
      audience: "Indian professional user जिसे useful, clear और verifiable output चाहिए.",
      rawContext: "Information user के original text से आई है और incomplete, mixed या hurry में लिखी हो सकती है.",
      responseLanguage: "Hinglish/Hindi style में जवाब दें, जब तक original text कोई दूसरी language न मांगे.",
      pendingOn: "Missing, uncertain या unconfirmed information को [PENDING] mark करें.",
      pendingOff: "Missing, uncertain या unconfirmed information को Missing information section में list करें.",
      expectations: ["Carefully काम करें और critical details assume न करें.", "Clear professional language use करें.", "Confirmed information और assumptions अलग करें.", "अगर critical information missing है, पहले questions list करें और फिर सिर्फ confirmed facts से provisional output दें.", "Answer practical और concise रखें; format न मांगे तो long report न लिखें."],
      nhaRules: ["Confirmed facts और assumptions अलग करें.", "Missing information को [PENDING] mark करें.", "Names, dates, numbers, IDs, legal articles, clauses, sources या legal facts invent न करें.", "Critical information missing हो तो conclusion से पहले questions list करें.", "Risks section include करें.", "Human verification सिर्फ तब include करें जब useful हो; requested format risks और questions cover करता है तो extra sections न जोड़ें.", "Requested format के बाहर sections न जोड़ें जब तक जरूरी न हो."],
      formatRequested: "Requested format"
    },
    caseGuidance: {
      legal: ["Legal articles invent न करें.", "IDs या registration numbers invent न करें.", "Company names invent न करें.", "Jurisdiction missing हो तो [PENDING] mark करें.", "Parties की identification missing हो तो [PENDING] mark करें.", "किसी document को use करने से पहले lawyer review recommend करें."],
      consulting: ["Symptoms और probable causes अलग करें.", "Metrics invent न करें.", "Business assumptions को [PENDING] mark करें.", "Diagnostic questions include करें."],
      cx: ["Tone empathetic और professional रखें.", "Unconfirmed compensation या dates promise न करें.", "Internal facts और customer information अलग करें.", "Clear next action include करें."],
      operations: ["Urgent problems और structural improvements अलग करें.", "Owners invent न करें.", "Missing dependencies और dates को [PENDING] mark करें.", "Operational risks include करें."],
      coding: ["Observed behavior और hypotheses अलग करें.", "File paths, functions, APIs, errors या dependencies invent न करें.", "Stack, logs, reproduction steps या version missing हो तो [PENDING] mark करें.", "Debugging plan, suggested changes और verification tests include करें."],
      proposal: ["Prices या scope invent न करें.", "Confirmed need और possible opportunity अलग करें.", "Quote करने से पहले questions include करें.", "Proposal structure suggest करें."],
      general: ["Facts, assumptions और pending items अलग करें.", "Data invent न करें.", "Clarification questions include करें.", "Review के बिना output use करने के risks include करें."]
    },
    formatGuidance: {
      facts: "Practical list दें, report नहीं. सिर्फ ये sections use करें: Confirmed facts, Assumptions, Pending items, Risks, Questions. हर section में maximum 6 bullets. जरूरत न हो तो sub-sections avoid करें.",
      summary: "Brief executive summary दें, फिर pending items और risks. Maximum 500 words.",
      draft: "Critical information complete हो तो ही draft लिखें. Information missing हो तो पहले questions list करें और फिर provisional draft clearly mark करें.",
      actionPlan: "Practical plan दें, full consulting report नहीं. Actions, suggested owner if indicated, date if present, pending items और risks include करें. Maximum 700 words.",
      email: "Subject, email body, recommended tone, और send करने से पहले missing details दें. Maximum 350 words.",
      risks: "Prioritized risks, text में evidence, और mitigation action दें. Maximum 8 risks."
    },
    samples: {
      cx: `एक नाराज customer ने message भेजा:

"तीसरी बार आपकी team ने कहा order कल deliver होगा, लेकिन अभी तक नहीं आया. मैंने लगभग दो हफ्ते पहले order किया था. कोई clear answer नहीं दे रहा. अगर आज नहीं आया तो refund चाहिए."

Internal context:

Order शायद #IN-4821 है, लेकिन sure नहीं क्योंकि message में order number नहीं था.

Customer का नाम रिया शर्मा है, phone number pending.

Approx purchase date: 24 या 25 April. Product: black ergonomic chair. System में warehouse delay दिख रहा है, लेकिन courier status confirm करना है.

Support team empathy के साथ reply करना चाहती है, situation explain करनी है और missing details मांगनी हैं बिना bureaucratic लगे.

Delivery today promise नहीं करनी अगर confirm नहीं है.

Professional response और follow-up plan चाहिए.`,
      consulting: `Call context:

Gurugram की Indian B2B services company. Call अमित मेहरा, founder, के साथ थी. Sales team 8 लोगों की है. अमित कहता है opportunities miss हो रही हैं क्योंकि team consistent follow-up नहीं करती.

वे WhatsApp, Excel और Gmail use करते हैं. Formal CRM नहीं है. हर salesperson leads अपने तरीके से handle करता है.

Main problem: किसी को पता नहीं कितने prospects हैं, किसने follow up किया, कौन warm है, कौन lost हो गया.

अमित "AI से automate" करना चाहता है, लेकिन लगता है पहले process order करना होगा.

उसने 200 से 300 leads per month कहा, लेकिन sure नहीं. Close rate 5% से 7% बताया, लेकिन reliable data नहीं है.

2-week diagnosis और फिर implementation के लिए proposal चाहिए.

Pending: budget, current tools, और internal responsible person confirm करना.`,
      legal: `Sector 67, Mohali में commercial shop के lease agreement की जरूरत है.

Shop लगभग 900 sq ft है. Rent Rs 85,000 monthly plus GST if applicable होगी. Landlord शायद हरप्रीत सिंह हैं, लेकिन वह individual की तरह sign करेंगे या firm के through, confirm करना बाकी है.

Client contact नेहा कपूर 15 June से start करना चाहती है, लेकिन 100% confirmed नहीं क्योंकि interior work pending है.

Tenant शायद UrbanFit Retail Private Limited होगी, लेकिन full legal name, CIN, GSTIN और authorized signatory details अभी नहीं हैं.

2-month security deposit चाहिए. वे यह भी जानना चाहते हैं कि prior written approval के साथ subletting include कर सकते हैं या नहीं.

हरप्रीत lock-in penalty चाहते हैं अगर वे 12 months से पहले leave करें. Amount पता नहीं.

Tomorrow review के लिए first version चाहिए.`
    },
    sampleSettings: {
      cx: { caseKey: "cx", outputKey: "email", desiredOutcome: "Confirmed और pending information अलग करते हुए empathetic professional response तैयार करें, कुछ भी promise करने से पहले." },
      consulting: { caseKey: "consulting", outputKey: "actionPlan", desiredOutcome: "इस call context को diagnosis, priorities, pending questions और next step में organize करें." },
      legal: { caseKey: "legal", outputKey: "facts", desiredOutcome: "इस information को facts, pending items, risks और questions में बदलें ताकि बेहतर reply दिया जा सके." }
    },
    shareText: () => `Clear Prompt Builder try करें.

आप AI से जो पूछना चाहते हैं उसे लिखें या paste करें और ChatGPT, Gemini, Claude या किसी भी AI के लिए clear prompt बनाएं.

काम चुनें -> अपनी idea लिखें या paste करें -> बेहतर prompt copy करें

Free. No login. No app install.

अगर यह helpful लगे, तो इसे किसी ऐसे व्यक्ति को share करें जिसे इस method से फायदा होगा:
${getShareUrl()}`
  },

  pa: {
    name: "ਪੰਜਾਬੀ",
    htmlLang: "pa",
    title: "Clear Prompt Builder | ਆਪਣੀ ਗੱਲ ਨੂੰ ਵਧੀਆ prompt ਬਣਾਓ",
    description: "AI ਤੋਂ ਜੋ ਕਰਵਾਉਣਾ ਹੈ, ਜਿਵੇਂ ਮਨ ਵਿੱਚ ਹੈ ਉਹ ਲਿਖੋ ਜਾਂ paste ਕਰੋ. Clear Prompt Builder ਇਸਨੂੰ ChatGPT, Gemini, Claude ਜਾਂ ਕਿਸੇ ਵੀ AI ਲਈ clear prompt ਬਣਾ ਦਿੰਦਾ ਹੈ. Free, no login, no app install.",
    ui: {
      "language.label": "ਭਾਸ਼ਾ",
      "hero.eyebrow": "Free - Login ਨਹੀਂ - App install ਨਹੀਂ",
      "hero.title": "Clear Prompt Builder",
      "hero.subtitle": "Rough idea ਤੋਂ ChatGPT, Claude, Gemini, Codex ਜਾਂ Cursor ਲਈ AI-ready brief ਬਣਾਓ.",
      "hero.tryExample": "20 seconds ਵਿੱਚ try ਕਰੋ",
      "hero.privacy": "ਤੁਸੀਂ ਜੋ ਲਿਖਦੇ ਹੋ, ਉਹ database ਵਿੱਚ save ਨਹੀਂ ਹੁੰਦਾ.",
      "why.label": "Common prompting mistake",
      "why.copy": "Most people ਲਿਖਦੇ ਨੇ: \"eh better bana do. Client ਨਾਲ ਗੱਲ ਹੋਈ; sales messy ਹੈ. Plan ਦੇ ਦਿਓ.\" AI ਨੂੰ task, context, format, missing info ਤੇ risks guess ਕਰਨੇ ਪੈਂਦੇ ਨੇ. ਹੇਠਾਂ ਚੁਣਕੇ ਪਹਿਲਾਂ brief clear ਕਰੋ.",
      "steps.one": "ਕੰਮ ਚੁਣੋ",
      "steps.two": "Load ਜਾਂ paste",
      "steps.three": "AI ਵਿੱਚ copy",
      "input.title": "1. ਕੰਮ ਚੁਣੋ",
      "input.subtitle": "ਪਹਿਲਾਂ ਕੰਮ ਦੀ type ਚੁਣੋ. ਫਿਰ ਆਪਣੀ rough ਗੱਲ ਜਿਵੇਂ ਹੈ ਤਿਵੇਂ ਪਾ ਦਿਓ.",
      "input.explainerTitle": "ਪਹਿਲਾਂ polish ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ.",
      "input.explainerCopy": "Idea, message, call ਜਾਂ email ਕੁਝ ਵੀ ਹੋ ਸਕਦਾ ਹੈ. Tool ਇਸਨੂੰ AI ਲਈ clear instruction ਬਣਾ ਦਿੰਦਾ ਹੈ.",
      "form.caseLabel": "ਕਿਸ type ਦਾ ਕੰਮ ਹੈ?",
      "form.outputLabel": "AI ਤੋਂ ਕੀ output ਚਾਹੀਦਾ ਹੈ?",
      "form.choiceHelp": "ਕੰਮ ਅਤੇ output ਚੁਣੋ. ਫਿਰ matching example load ਕਰੋ ਜਾਂ ਹੇਠਾਂ ਆਪਣਾ case ਲਿਖੋ.",
      "samples.selected": "ਇਹ example load ਕਰੋ",
      "samples.selectedHelp": "ਤੁਹਾਡੀ selection ਦੇ ਹਿਸਾਬ ਨਾਲ sample case ਹੇਠਾਂ load ਹੋਵੇਗਾ.",
      "samples.cx": "Message example load ਕਰੋ",
      "samples.consultoria": "Consulting example load ਕਰੋ",
      "samples.arrendamiento": "Legal example load ਕਰੋ",
      "notes.title": "2. ਆਪਣਾ case ਲਿਖੋ ਜਾਂ paste ਕਰੋ",
      "notes.subtitle": "Message, call, email, ਪਹਿਲੀ ਗੱਲ ਜਾਂ rough text ਕਾਫੀ ਹੈ.",
      "notes.label": "ਤੁਹਾਡੀ ਗੱਲ, message ਜਾਂ text, ਬਿਨਾਂ polish ਕੀਤੇ",
      "notes.help": "Perfect ਬਣਾਉਣ ਦੀ ਲੋੜ ਨਹੀਂ. ਜਿਵੇਂ ਮਨ ਵਿੱਚ ਆਇਆ ਹੈ ਤਿਵੇਂ ਲਿਖੋ ਜਾਂ ਜੋ already ਹੈ ਉਹ paste ਕਰ ਦਿਓ.",
      "notes.placeholder": "Example: ਮੈਨੂੰ client ਨੂੰ reply ਕਰਨਾ ਹੈ, ਮੇਰੇ ਕੋਲ ਇਹ details ਹਨ, date confirm ਨਹੀਂ, ਮੈਂ ਅਜਿਹੀ ਗੱਲ promise ਨਹੀਂ ਕਰਨੀ ਜੋ ਮੈਨੂੰ ਪਤਾ ਨਹੀਂ...",
      "outcome.label": "AI ਤੋਂ ਵਾਪਸ ਕੀ ਚਾਹੀਦਾ ਹੈ?",
      "pending.label": "ਜੇ information missing ਹੈ, AI ਨੂੰ [PENDING] mark ਕਰਨ ਲਈ ਕਹੋ",
      "actions.generate": "3. Prompt generate ਕਰੋ",
      "actions.clear": "Clear",
      "output.title": "4. Copy ਕਰੋ ਤੇ use ਕਰੋ",
      "output.subtitle": "ਇਸ prompt ਵਿੱਚ information ਨੂੰ order ਕਰਨ ਅਤੇ invented details ਘਟਾਉਣ ਦੇ rules ਹਨ.",
      "output.nextTitle": "ਇਸ ਤੋਂ ਬਾਅਦ ਕੀ ਕਰਨਾ ਹੈ",
      "output.nextCopy": "ਇਹ prompt copy ਕਰੋ ਤੇ ChatGPT, Gemini, Claude ਜਾਂ ਜਿਸ AI ਨੂੰ ਤੁਸੀਂ use ਕਰਦੇ ਹੋ ਉਸ ਵਿੱਚ paste ਕਰੋ. AI ਨੂੰ ਹੁਣ much clearer brief ਮਿਲੇਗਾ.",
      "actions.copy": "ਆਪਣੀ AI ਲਈ copy ਕਰੋ",
      "actions.download": ".txt download ਕਰੋ",
      "share.title": "ਕੀ ਇਹ method helpful ਲੱਗਾ?",
      "share.copy": "ਜੇ ਕੰਮ ਆਇਆ, ਤਾਂ ਇਹ ਕਿਸੇ ਐਸੇ person ਨੂੰ ਭੇਜੋ ਜੋ ਅਜੇ ਵੀ rough ਗੱਲ ਸਿੱਧੀ AI ਵਿੱਚ ਪਾ ਦਿੰਦਾ ਹੈ.",
      "actions.share": "Share invitation copy ਕਰੋ",
      "verification.title": "AI response ਤੇ trust ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ",
      "verification.one": "ਕੀ AI ਨੇ facts ਤੇ assumptions ਵੱਖ ਕੀਤੇ?",
      "verification.two": "ਕੀ missing information ਨੂੰ [PENDING] mark ਕੀਤਾ?",
      "verification.twoOff": "ਕੀ missing ਜਾਂ uncertain information ਸਾਫ਼ ਵੱਖ ਕੀਤੀ?",
      "verification.three": "ਕੀ ਤੁਹਾਡੇ text ਵਿੱਚ ਨਾ ਹੋਣ ਵਾਲੀ ਕੋਈ ਗੱਲ invent ਕੀਤੀ?",
      "verification.four": "ਕੀ result real information ਨਾਲ trace ਹੋ ਸਕਦਾ ਹੈ?",
      "verification.five": "Use ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕੋਈ human decision pending ਹੈ?",
      "privacy.note": "ਇਹ tool ਤੁਹਾਡੀ ਲਿਖੀ ਚੀਜ਼ save ਨਹੀਂ ਕਰਦਾ. Screen ਤੋਂ ਹਟਾਉਣ ਲਈ \"Clear\" ਦਬਾਓ ਜਾਂ tab close ਕਰੋ.",
      "footer.creator": "Created by Albert Punj",
      "footer.meta": "v0.1.3 · © 2026 Albert Punj · Released 6 May 2026",
      "footer.license": "MIT License",
      "footer.info": "ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ terms",
      "info.eyebrow": "NHA Method",
      "info.title": "ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ terms",
      "info.subtitle": "Simple explanation: tool ਕੀ ਕਰਦਾ ਹੈ, ਤੇ ਕੀ ਨਹੀਂ ਕਰਦਾ.",
      "info.whatTitle": "ਇਹ ਕੀ ਕਰਦਾ ਹੈ",
      "info.whatOne": "Clear Prompt Builder AI ਤੋਂ ਜੋ ਕੰਮ ਕਰਵਾਉਣਾ ਹੈ ਉਸਨੂੰ ChatGPT, Gemini, Claude ਜਾਂ ਜਿਸ AI ਨੂੰ ਤੁਸੀਂ use ਕਰਦੇ ਹੋ ਉਸ ਲਈ clear prompt ਵਿੱਚ ਬਦਲਦਾ ਹੈ.",
      "info.whatTwo": "ਇਹ AI ਦੀ ਥਾਂ answer ਨਹੀਂ ਦਿੰਦਾ. ਇਹ ਤੁਹਾਡੇ judgment ਨੂੰ replace ਨਹੀਂ ਕਰਦਾ. ਇਹ ਸਿਰਫ better ask ਕਰਨ ਵਿੱਚ help ਕਰਦਾ ਹੈ.",
      "info.howTitle": "Use ਕਿਵੇਂ ਕਰਨਾ ਹੈ",
      "info.howOne": "ਜਿਸ type ਦਾ ਕੰਮ ਕਰਨਾ ਹੈ, ਉਹ ਚੁਣੋ.",
      "info.howTwo": "ਆਪਣਾ case ਜਿਵੇਂ ਹੈ ਤਿਵੇਂ ਲਿਖੋ ਜਾਂ paste ਕਰੋ.",
      "info.howThree": "Prompt generate ਕਰੋ.",
      "info.howFour": "Prompt copy ਕਰੋ ਤੇ ChatGPT, Gemini, Claude ਜਾਂ ਜਿਸ AI ਨੂੰ ਤੁਸੀਂ use ਕਰਦੇ ਹੋ ਉਸ ਵਿੱਚ paste ਕਰੋ.",
      "info.howFive": "Use ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ response review ਕਰੋ.",
      "info.browserTitle": "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
      "info.browserOne": "Page ਤੁਹਾਡੇ browser ਵਿੱਚ prompt ਬਣਾਉਂਦਾ ਹੈ. App install ਜਾਂ account ਬਣਾਉਣ ਦੀ ਲੋੜ ਨਹੀਂ.",
      "info.browserTwo": "Tool ਤੁਹਾਡੀ ਲਿਖੀ ਗੱਲ database ਵਿੱਚ save ਨਹੀਂ ਕਰਦਾ ਤੇ prompt ਬਣਾਉਣ ਲਈ ਸਾਡੇ server ਤੇ ਨਹੀਂ ਭੇਜਦਾ.",
      "info.browserThree": "Paste ਕੀਤੀ ਚੀਜ਼ ਹਟਾਉਣ ਲਈ \"Clear\" ਦਬਾਓ ਜਾਂ tab close ਕਰੋ.",
      "info.privacyTitle": "Privacy",
      "info.privacyOne": "ਜੇ ਤੁਸੀਂ sure ਨਹੀਂ ਕਿ web page ਤੇ ਕੰਮ ਕਰਨਾ ਹੈ, ਤਾਂ extremely sensitive information paste ਨਾ ਕਰੋ.",
      "info.privacyTwo": "Browsers convenience ਲਈ page state temporary ਰੱਖ ਸਕਦੇ ਹਨ. Tool intentionally ਤੁਹਾਡੀ ਲਿਖੀ ਗੱਲ save ਨਹੀਂ ਕਰਦਾ.",
      "info.limitsTitle": "Limits",
      "info.limitsOne": "ਕਿਸੇ ਵੀ AI output ਵਿੱਚ errors ਹੋ ਸਕਦੇ ਹਨ. Names, dates, numbers, laws, medical info, financial info ਅਤੇ important decisions ਹਮੇਸ਼ਾਂ review ਕਰੋ.",
      "info.limitsTwo": "ਇਹ tool legal, medical, financial ਜਾਂ professional advice ਨਹੀਂ ਦਿੰਦਾ. ਇਹ instructions ਨੂੰ order ਕਰਨ ਵਿੱਚ help ਕਰਦਾ ਹੈ.",
      "info.termsTitle": "Terms of use",
      "info.termsOne": "Tool ਆਪਣੀ responsibility ਤੇ use ਕਰੋ. ਕਿਹੜੀ information paste ਕਰਨੀ, ਕਿਹੜਾ prompt use ਕਰਨਾ, ਅਤੇ AI response ਨਾਲ ਕੀ ਕਰਨਾ ਹੈ, ਇਹ ਤੁਸੀਂ decide ਕਰਦੇ ਹੋ.",
      "info.termsTwo": "Illegal, deceptive, harmful content ਬਣਾਉਣ ਜਾਂ human review ਤੋਂ ਬਿਨਾਂ important decisions ਲੈਣ ਲਈ ਇਸ tool ਦਾ use ਨਾ ਕਰੋ.",
      "info.curiosityTitle": "Curious ਲੋਕਾਂ ਲਈ",
      "info.curiosityOne": "ਇਹ project simple browser page ਵਾਂਗ ਬਣਿਆ ਹੈ. Idea ਹੈ ਕਿ ਹੋਰ ਲੋਕ complicated tools ਤੇ depend ਕੀਤੇ ਬਿਨਾਂ method ਨਾਲ AI use ਕਰਨਾ ਸਿੱਖਣ.",
      "footer.back": "Clear Prompt Builder ਤੇ ਵਾਪਸ ਜਾਓ"
    },
    cases: {
      general: "General",
      legal: "Legal India",
      consulting: "Consulting",
      cx: "CX / Customer",
      operations: "Operations",
      coding: "Coding / Product",
      proposal: "Commercial proposal"
    },
    outputs: {
      facts: "Facts ਅਤੇ pending items",
      summary: "Executive summary",
      draft: "Document draft",
      actionPlan: "Action plan",
      email: "Professional email",
      risks: "Risk checklist"
    },
    defaults: {
      outcome: "ਮੇਰੇ case ਨੂੰ clear, verifiable output ਵਿੱਚ ਬਦਲੋ ਜੋ use ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ review ਹੋ ਸਕੇ.",
      emptyPrompt: "ਤੁਹਾਡਾ prompt ਇੱਥੇ ਆਵੇਗਾ. ਪਹਿਲਾਂ ਆਪਣਾ case ਲਿਖੋ ਜਾਂ paste ਕਰੋ, ਫਿਰ \"Prompt generate ਕਰੋ\" ਦਬਾਓ."
    },
    downloadFileName: "clear-prompt-builder.txt",
    statuses: {
      missingNotes: "ਪਹਿਲਾਂ ਆਪਣਾ case ਲਿਖੋ ਜਾਂ paste ਕਰੋ. Messy ਹੋ ਸਕਦਾ ਹੈ; ਇਹੀ ਤਾਂ ਕੰਮ ਹੈ.",
      generated: "Ready. ਇਹ prompt copy ਕਰੋ ਤੇ ChatGPT, Gemini, Claude ਜਾਂ ਜਿਸ AI ਨੂੰ ਤੁਸੀਂ use ਕਰਦੇ ਹੋ ਉਸ ਵਿੱਚ paste ਕਰੋ.",
      sampleReady: "Example ready. Difference ਵੇਖਣ ਲਈ prompt copy ਕਰਕੇ ChatGPT, Gemini, Claude ਜਾਂ ਜਿਸ AI ਨੂੰ ਤੁਸੀਂ use ਕਰਦੇ ਹੋ ਉਸ ਵਿੱਚ paste ਕਰੋ.",
      sampleLoaded: "Example loaded. Prompt generate ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਤੁਸੀਂ edit ਕਰ ਸਕਦੇ ਹੋ.",
      copyFirst: "Copy ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ prompt generate ਕਰੋ.",
      copied: "Prompt clipboard ਵਿੱਚ copy ਹੋ ਗਿਆ.",
      selected: "Automatically copy ਨਹੀਂ ਹੋਇਆ. Prompt selected ਹੈ.",
      downloadFirst: "Download ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ prompt generate ਕਰੋ.",
      downloaded: "File clear-prompt-builder.txt download ਹੋ ਗਈ.",
      shareCopied: "Share message copy ਹੋ ਗਿਆ.",
      shareFailed: "Message copy ਨਹੀਂ ਹੋਇਆ. Link manually copy ਕਰੋ.",
      languageChanged: "Language ਬਦਲ ਗਈ. ਤੁਹਾਡਾ text ਅਤੇ current prompt ਉਹੀ ਰੱਖੇ ਗਏ ਹਨ. ਇਸ language ਵਿੱਚ version ਬਣਾਉਣ ਲਈ \"Prompt generate ਕਰੋ\" ਦਬਾਓ.",
      optionChanged: "Option ਬਦਲ ਗਈ. Prompt update ਕਰਨ ਲਈ \"Prompt generate ਕਰੋ\" ਫਿਰ ਦਬਾਓ."
    },
    prompt: {
      headings: { task: "ਕੰਮ", context: "ਸੰਦਰਭ", notes: "ਮੂਲ text", expectation: "ਉਮੀਦ", rules: "AI GUARDRAILS", output: "OUTPUT FORMAT" },
      caseType: "ਕੰਮ ਦੀ type",
      audienceLabel: "Audience",
      audience: "Indian professional user ਜਿਸਨੂੰ useful, clear ਅਤੇ verifiable output ਚਾਹੀਦਾ ਹੈ.",
      rawContext: "Information user ਦੇ original text ਤੋਂ ਆਈ ਹੈ ਅਤੇ incomplete, mixed ਜਾਂ hurry ਵਿੱਚ ਲਿਖੀ ਹੋ ਸਕਦੀ ਹੈ.",
      responseLanguage: "Punjabi-English natural style ਵਿੱਚ ਜਵਾਬ ਦਿਓ, ਜਦ ਤੱਕ original text ਕੋਈ ਹੋਰ language ਨਾ ਮੰਗੇ.",
      pendingOn: "Missing, uncertain ਜਾਂ unconfirmed information ਨੂੰ [PENDING] mark ਕਰੋ.",
      pendingOff: "Missing, uncertain ਜਾਂ unconfirmed information ਨੂੰ Missing information section ਵਿੱਚ list ਕਰੋ.",
      expectations: ["Carefully ਕੰਮ ਕਰੋ ਅਤੇ critical details assume ਨਾ ਕਰੋ.", "Clear professional language use ਕਰੋ.", "Confirmed information ਅਤੇ assumptions ਵੱਖ ਕਰੋ.", "ਜੇ critical information missing ਹੈ, ਪਹਿਲਾਂ questions list ਕਰੋ ਅਤੇ ਫਿਰ ਸਿਰਫ confirmed facts ਨਾਲ provisional output ਦਿਓ.", "Answer practical ਅਤੇ concise ਰੱਖੋ; format ਨਾ ਮੰਗੇ ਤਾਂ long report ਨਾ ਲਿਖੋ."],
      nhaRules: ["Confirmed facts ਅਤੇ assumptions ਵੱਖ ਕਰੋ.", "Missing information ਨੂੰ [PENDING] mark ਕਰੋ.", "Names, dates, numbers, IDs, legal articles, clauses, sources ਜਾਂ legal facts invent ਨਾ ਕਰੋ.", "Critical information missing ਹੋਵੇ ਤਾਂ conclusion ਤੋਂ ਪਹਿਲਾਂ questions list ਕਰੋ.", "Risks section include ਕਰੋ.", "Human verification ਸਿਰਫ ਤਦ include ਕਰੋ ਜਦ useful ਹੋਵੇ; requested format risks ਅਤੇ questions cover ਕਰਦਾ ਹੈ ਤਾਂ extra sections ਨਾ ਜੋੜੋ.", "Requested format ਤੋਂ ਬਾਹਰ sections ਨਾ ਜੋੜੋ ਜਦ ਤੱਕ ਜ਼ਰੂਰੀ ਨਾ ਹੋਵੇ."],
      formatRequested: "Requested format"
    },
    caseGuidance: {
      legal: ["Legal articles invent ਨਾ ਕਰੋ.", "IDs ਜਾਂ registration numbers invent ਨਾ ਕਰੋ.", "Company names invent ਨਾ ਕਰੋ.", "Jurisdiction missing ਹੋਵੇ ਤਾਂ [PENDING] mark ਕਰੋ.", "Parties ਦੀ identification missing ਹੋਵੇ ਤਾਂ [PENDING] mark ਕਰੋ.", "ਕਿਸੇ document ਨੂੰ use ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ lawyer review recommend ਕਰੋ."],
      consulting: ["Symptoms ਅਤੇ probable causes ਵੱਖ ਕਰੋ.", "Metrics invent ਨਾ ਕਰੋ.", "Business assumptions ਨੂੰ [PENDING] mark ਕਰੋ.", "Diagnostic questions include ਕਰੋ."],
      cx: ["Tone empathetic ਅਤੇ professional ਰੱਖੋ.", "Unconfirmed compensation ਜਾਂ dates promise ਨਾ ਕਰੋ.", "Internal facts ਅਤੇ customer information ਵੱਖ ਕਰੋ.", "Clear next action include ਕਰੋ."],
      operations: ["Urgent problems ਅਤੇ structural improvements ਵੱਖ ਕਰੋ.", "Owners invent ਨਾ ਕਰੋ.", "Missing dependencies ਅਤੇ dates ਨੂੰ [PENDING] mark ਕਰੋ.", "Operational risks include ਕਰੋ."],
      coding: ["Observed behavior ਅਤੇ hypotheses ਵੱਖ ਕਰੋ.", "File paths, functions, APIs, errors ਜਾਂ dependencies invent ਨਾ ਕਰੋ.", "Stack, logs, reproduction steps ਜਾਂ version missing ਹੋਵੇ ਤਾਂ [PENDING] mark ਕਰੋ.", "Debugging plan, suggested changes ਅਤੇ verification tests include ਕਰੋ."],
      proposal: ["Prices ਜਾਂ scope invent ਨਾ ਕਰੋ.", "Confirmed need ਅਤੇ possible opportunity ਵੱਖ ਕਰੋ.", "Quote ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ questions include ਕਰੋ.", "Proposal structure suggest ਕਰੋ."],
      general: ["Facts, assumptions ਅਤੇ pending items ਵੱਖ ਕਰੋ.", "Data invent ਨਾ ਕਰੋ.", "Clarification questions include ਕਰੋ.", "Review ਤੋਂ ਬਿਨਾਂ output use ਕਰਨ ਦੇ risks include ਕਰੋ."]
    },
    formatGuidance: {
      facts: "Practical list ਦਿਓ, report ਨਹੀਂ. ਸਿਰਫ ਇਹ sections use ਕਰੋ: Confirmed facts, Assumptions, Pending items, Risks, Questions. ਹਰ section ਵਿੱਚ maximum 6 bullets. ਲੋੜ ਨਾ ਹੋਵੇ ਤਾਂ sub-sections avoid ਕਰੋ.",
      summary: "Brief executive summary ਦਿਓ, ਫਿਰ pending items ਅਤੇ risks. Maximum 500 words.",
      draft: "Critical information complete ਹੋਵੇ ਤਾਂ ਹੀ draft ਲਿਖੋ. Information missing ਹੋਵੇ ਤਾਂ ਪਹਿਲਾਂ questions list ਕਰੋ ਅਤੇ ਫਿਰ provisional draft clearly mark ਕਰੋ.",
      actionPlan: "Practical plan ਦਿਓ, full consulting report ਨਹੀਂ. Actions, suggested owner if indicated, date if present, pending items ਅਤੇ risks include ਕਰੋ. Maximum 700 words.",
      email: "Subject, email body, recommended tone, ਅਤੇ send ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ missing details ਦਿਓ. Maximum 350 words.",
      risks: "Prioritized risks, text ਵਿੱਚ evidence, ਅਤੇ mitigation action ਦਿਓ. Maximum 8 risks."
    },
    samples: {
      cx: `ਇੱਕ angry customer ਨੇ message ਭੇਜਿਆ:

"ਤੀਜੀ ਵਾਰੀ ਤੁਹਾਡੀ team ਨੇ ਕਿਹਾ order ਕੱਲ੍ਹ deliver ਹੋਵੇਗਾ, ਪਰ ਅਜੇ ਤੱਕ ਨਹੀਂ ਆਇਆ. ਮੈਂ ਲਗਭਗ ਦੋ ਹਫ਼ਤੇ ਪਹਿਲਾਂ order ਕੀਤਾ ਸੀ. ਕੋਈ clear answer ਨਹੀਂ ਦੇ ਰਿਹਾ. ਜੇ ਅੱਜ ਨਹੀਂ ਆਇਆ ਤਾਂ refund ਚਾਹੀਦਾ."

Internal context:

Order ਸ਼ਾਇਦ #IN-4821 ਹੈ, ਪਰ sure ਨਹੀਂ ਕਿਉਂਕਿ message ਵਿੱਚ order number ਨਹੀਂ ਸੀ.

Customer ਦਾ ਨਾਮ ਸਿਮਰਨ ਕੌਰ ਹੈ, phone number pending.

Approx purchase date: 24 ਜਾਂ 25 April. Product: black ergonomic chair. System ਵਿੱਚ warehouse delay ਦਿਖ ਰਿਹਾ ਹੈ, ਪਰ courier status confirm ਕਰਨਾ ਹੈ.

Support team empathy ਨਾਲ reply ਕਰਨਾ ਚਾਹੁੰਦੀ ਹੈ, situation explain ਕਰਨੀ ਹੈ ਅਤੇ missing details ਮੰਗਣੀਆਂ ਹਨ ਬਿਨਾਂ bureaucratic ਲੱਗੇ.

Delivery today promise ਨਹੀਂ ਕਰਨੀ ਜੇ confirm ਨਹੀਂ ਹੈ.

Professional response ਅਤੇ follow-up plan ਚਾਹੀਦਾ ਹੈ.`,
      consulting: `Call context:

Mohali ਦੀ Indian B2B services company. Call ਜਸਪ੍ਰੀਤ ਸਿੰਘ, founder, ਨਾਲ ਸੀ. Sales team 8 ਲੋਕਾਂ ਦੀ ਹੈ. ਜਸਪ੍ਰੀਤ ਕਹਿੰਦਾ ਹੈ opportunities miss ਹੋ ਰਹੀਆਂ ਹਨ ਕਿਉਂਕਿ team consistent follow-up ਨਹੀਂ ਕਰਦੀ.

ਉਹ WhatsApp, Excel ਅਤੇ Gmail use ਕਰਦੇ ਹਨ. Formal CRM ਨਹੀਂ. ਹਰ salesperson leads ਆਪਣੇ ਤਰੀਕੇ ਨਾਲ handle ਕਰਦਾ ਹੈ.

Main problem: ਕਿਸੇ ਨੂੰ ਨਹੀਂ ਪਤਾ ਕਿੰਨੇ prospects ਹਨ, ਕਿਸਨੇ follow up ਕੀਤਾ, ਕੌਣ warm ਹੈ, ਕੌਣ lost ਹੋ ਗਿਆ.

ਜਸਪ੍ਰੀਤ "AI ਨਾਲ automate" ਕਰਨਾ ਚਾਹੁੰਦਾ ਹੈ, ਪਰ ਲੱਗਦਾ ਹੈ ਪਹਿਲਾਂ process order ਕਰਨਾ ਪਵੇਗਾ.

ਉਸਨੇ 200 ਤੋਂ 300 leads per month ਕਿਹਾ, ਪਰ sure ਨਹੀਂ. Close rate 5% ਤੋਂ 7% ਦੱਸਿਆ, ਪਰ reliable data ਨਹੀਂ.

2-week diagnosis ਅਤੇ ਫਿਰ implementation ਲਈ proposal ਚਾਹੀਦਾ ਹੈ.

Pending: budget, current tools, ਅਤੇ internal responsible person confirm ਕਰਨਾ.`,
      legal: `Sector 67, Mohali ਵਿੱਚ commercial shop ਦੇ lease agreement ਦੀ ਲੋੜ ਹੈ.

Shop ਲਗਭਗ 900 sq ft ਹੈ. Rent Rs 85,000 monthly plus GST if applicable ਹੋਵੇਗੀ. Landlord ਸ਼ਾਇਦ ਹਰਪ੍ਰੀਤ ਸਿੰਘ ਹਨ, ਪਰ ਉਹ individual ਵਜੋਂ sign ਕਰਨਗੇ ਜਾਂ firm ਰਾਹੀਂ, confirm ਕਰਨਾ ਬਾਕੀ ਹੈ.

Client contact ਨੇਹਾ ਕਪੂਰ 15 June ਤੋਂ start ਕਰਨਾ ਚਾਹੁੰਦੀ ਹੈ, ਪਰ 100% confirmed ਨਹੀਂ ਕਿਉਂਕਿ interior work pending ਹੈ.

Tenant ਸ਼ਾਇਦ UrbanFit Retail Private Limited ਹੋਵੇਗੀ, ਪਰ full legal name, CIN, GSTIN ਅਤੇ authorized signatory details ਅਜੇ ਨਹੀਂ.

2-month security deposit ਚਾਹੀਦਾ ਹੈ. ਉਹ ਇਹ ਵੀ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹਨ ਕਿ prior written approval ਨਾਲ subletting include ਕਰ ਸਕਦੇ ਹਨ ਜਾਂ ਨਹੀਂ.

ਹਰਪ੍ਰੀਤ lock-in penalty ਚਾਹੁੰਦਾ ਹੈ ਜੇ ਉਹ 12 months ਤੋਂ ਪਹਿਲਾਂ leave ਕਰਨ. Amount ਪਤਾ ਨਹੀਂ.

Tomorrow review ਲਈ first version ਚਾਹੀਦਾ ਹੈ.`
    },
    sampleSettings: {
      cx: { caseKey: "cx", outputKey: "email", desiredOutcome: "Confirmed ਅਤੇ pending information ਵੱਖ ਕਰਦੇ ਹੋਏ empathetic professional response ਤਿਆਰ ਕਰੋ, ਕੁਝ ਵੀ promise ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ." },
      consulting: { caseKey: "consulting", outputKey: "actionPlan", desiredOutcome: "ਇਸ call context ਨੂੰ diagnosis, priorities, pending questions ਅਤੇ next step ਵਿੱਚ organize ਕਰੋ." },
      legal: { caseKey: "legal", outputKey: "facts", desiredOutcome: "ਇਸ information ਨੂੰ facts, pending items, risks ਅਤੇ questions ਵਿੱਚ ਬਦਲੋ ਤਾਂ ਕਿ better reply ਦਿੱਤਾ ਜਾ ਸਕੇ." }
    },
    shareText: () => `Clear Prompt Builder try ਕਰੋ.

ਤੁਸੀਂ AI ਤੋਂ ਜੋ ਪੁੱਛਣਾ ਚਾਹੁੰਦੇ ਹੋ ਉਹ ਲਿਖੋ ਜਾਂ paste ਕਰੋ ਅਤੇ ChatGPT, Gemini, Claude ਜਾਂ ਕਿਸੇ ਵੀ AI ਲਈ clear prompt ਬਣਾਓ.

ਕੰਮ ਚੁਣੋ -> ਆਪਣੀ idea ਲਿਖੋ ਜਾਂ paste ਕਰੋ -> better prompt copy ਕਰੋ

Free. No login. No app install.

ਜੇ helpful ਲੱਗੇ, ਇਸਨੂੰ ਕਿਸੇ ਨਾਲ share ਕਰੋ ਜਿਸਨੂੰ ਇਸ method ਤੋਂ benefit ਹੋਵੇ:
${getShareUrl()}`
  }
};

const contextualSamples = {
  es: {
    general: `Idea inicial:

Quiero organizar una idea que tengo para mejorar mi trabajo con IA. Tengo varias ideas sueltas, algunas dudas y no sé por dónde empezar.

Quiero entender qué partes ya están claras, qué falta definir, qué riesgos hay y cuál sería el siguiente paso lógico.

Hay cosas que todavía no sé: tiempo disponible, herramientas exactas, costo y prioridad.`,
    operations: `Contexto operativo:

El equipo está recibiendo solicitudes por varios canales. Algunas llegan por mensaje, otras por correo y otras por llamada.

No hay una lista única de pendientes. A veces dos personas trabajan lo mismo y otras tareas se quedan sin dueño.

Hay que ordenar prioridades, responsables, fechas y riesgos. Falta confirmar quién aprueba cambios y qué tareas son urgentes.

Necesitamos una forma clara de convertir esto en acciones.`,
    coding: `Contexto técnico:

Tengo una mini app hecha con React. Después de iniciar sesión, a veces el usuario se queda en una pantalla en blanco.

El error no pasa siempre. En consola vi una vez "token expired", pero no sé si es la causa real. También puede estar relacionado con refresh de la página.

No tengo todavía pasos exactos para reproducirlo. Falta confirmar navegador, versión, ruta afectada, logs del backend y si pasa en producción o solo local.

Quiero convertir esto en un plan claro de depuración sin inventar archivos ni funciones que no he mostrado.`,
    proposal: `Contexto para propuesta:

Un cliente quiere ayuda para ordenar su proceso de seguimiento. Dice que usa mensajes, Excel y correo, pero no tiene un flujo claro.

Quiere "usar IA", pero todavía no está claro el alcance, presupuesto, fechas ni quién será responsable internamente.

Necesitamos convertir esta información en una propuesta clara, sin inventar precios ni prometer cosas que no están confirmadas.`
  },
  en: {
    general: `Initial idea:

I want to organize an idea for improving how my team uses AI at work. I have several loose thoughts, some doubts, and I do not know where to start.

I want to understand what is already clear, what is missing, what risks exist, and what the next logical step should be.

Some things are still unknown: available time, exact tools, budget, owner, and priority.`,
    operations: `Operations context:

The team is receiving customer enquiries through WhatsApp, Gmail, and phone calls.

There is no single pending list. Sometimes two people work on the same thing and other tasks have no owner.

We need to organize priorities, owners, dates, and risks. It is still unclear who approves changes, which tasks are urgent, and what should be escalated to the business owner.

We need a clear way to turn this into actions.`,
    coding: `Technical context:

I am building a React dashboard for an Indian services business. After login, some users sometimes land on a blank page.

The issue is inconsistent. I once saw "token expired" in the browser console, but I am not sure if that is the root cause. It may also happen after page refresh.

Missing details: exact browser, route, package versions, backend logs, reproduction steps, and whether this happens in production or only locally.

I need a practical debugging plan without inventing file paths, functions, or dependencies that I have not provided.`,
    proposal: `Proposal context:

An Indian client wants help organizing their sales follow-up process. They use WhatsApp, Excel, and Gmail, but do not have a clear flow.

They want to "use AI", but scope, budget in INR, dates, and internal owner are still unclear.

We need to turn this information into a clear proposal without inventing prices or promising anything unconfirmed.`
  },
  hi: {
    general: `Initial idea:

मैं अपनी team के AI use को improve करने की idea organize करना चाहता हूं. मेरे पास loose thoughts हैं, कुछ doubts हैं, और पता नहीं कहां से शुरू करूं.

मुझे समझना है कि क्या clear है, क्या missing है, कौनसे risks हैं, और next logical step क्या होगा.

कुछ चीज़ें अभी unknown हैं: time available, exact tools, budget, owner और priority.`,
    operations: `Operations context:

Team को customer enquiries WhatsApp, Gmail और phone calls से मिल रही हैं.

Single pending list नहीं है. कभी दो लोग एक ही काम कर लेते हैं और कुछ tasks बिना owner के रह जाते हैं.

Priorities, owners, dates और risks organize करने हैं. कौन changes approve करेगा, कौनसे tasks urgent हैं, और क्या business owner को escalate करना है, यह अभी clear नहीं.

हमें इसे actions में बदलने का clear तरीका चाहिए.`,
    coding: `Technical context:

मैं एक React dashboard बना रहा हूं. Login के बाद कुछ users कभी-कभी blank page पर अटक जाते हैं.

Issue consistent नहीं है. Console में एक बार "token expired" दिखा, लेकिन sure नहीं कि वही root cause है. Page refresh के बाद भी हो सकता है.

Missing details: exact browser, route, package versions, backend logs, reproduction steps, और यह production में होता है या सिर्फ local में.

मुझे practical debugging plan चाहिए, बिना file paths, functions या dependencies invent किए.`,
    proposal: `Proposal context:

एक Indian client अपने sales follow-up process को organize करने में help चाहता है. वह WhatsApp, Excel और Gmail use करता है, लेकिन clear flow नहीं है.

वह "AI use" करना चाहता है, लेकिन scope, INR budget, dates और internal owner अभी clear नहीं.

हमें इस information को clear proposal में बदलना है, बिना prices invent किए या unconfirmed चीज़ promise किए.`
  },
  pa: {
    general: `Initial idea:

ਮੈਂ ਆਪਣੀ team ਦੇ AI use ਨੂੰ improve ਕਰਨ ਦੀ idea organize ਕਰਨੀ ਚਾਹੁੰਦਾ ਹਾਂ. ਮੇਰੇ ਕੋਲ loose thoughts ਹਨ, ਕੁਝ doubts ਹਨ, ਅਤੇ ਪਤਾ ਨਹੀਂ ਕਿੱਥੋਂ ਸ਼ੁਰੂ ਕਰਾਂ.

ਮੈਨੂੰ ਸਮਝਣਾ ਹੈ ਕਿ ਕੀ clear ਹੈ, ਕੀ missing ਹੈ, ਕਿਹੜੇ risks ਹਨ, ਅਤੇ next logical step ਕੀ ਹੋਵੇਗਾ.

ਕੁਝ ਚੀਜ਼ਾਂ ਅਜੇ unknown ਹਨ: time available, exact tools, budget, owner ਅਤੇ priority.`,
    operations: `Operations context:

Team ਨੂੰ customer enquiries WhatsApp, Gmail ਅਤੇ phone calls ਤੋਂ ਆ ਰਹੀਆਂ ਹਨ.

Single pending list ਨਹੀਂ ਹੈ. ਕਦੇ ਦੋ ਲੋਕ ਇੱਕੋ ਕੰਮ ਕਰ ਲੈਂਦੇ ਹਨ ਅਤੇ ਕੁਝ tasks ਬਿਨਾਂ owner ਦੇ ਰਹਿ ਜਾਂਦੇ ਹਨ.

Priorities, owners, dates ਅਤੇ risks organize ਕਰਨੇ ਹਨ. ਕੌਣ changes approve ਕਰੇਗਾ, ਕਿਹੜੇ tasks urgent ਹਨ, ਅਤੇ ਕੀ business owner ਨੂੰ escalate ਕਰਨਾ ਹੈ, ਇਹ ਅਜੇ clear ਨਹੀਂ.

ਸਾਨੂੰ ਇਸ ਨੂੰ actions ਵਿੱਚ ਬਦਲਣ ਦਾ clear ਤਰੀਕਾ ਚਾਹੀਦਾ ਹੈ.`,
    coding: `Technical context:

ਮੈਂ ਇੱਕ React dashboard ਬਣਾ ਰਿਹਾ ਹਾਂ. Login ਤੋਂ ਬਾਅਦ ਕੁਝ users ਕਦੇ-ਕਦੇ blank page ਤੇ stuck ਹੋ ਜਾਂਦੇ ਹਨ.

Issue consistent ਨਹੀਂ ਹੈ. Console ਵਿੱਚ ਇੱਕ ਵਾਰੀ "token expired" ਦਿਖਿਆ ਸੀ, ਪਰ sure ਨਹੀਂ ਕਿ root cause ਉਹੀ ਹੈ. Page refresh ਤੋਂ ਬਾਅਦ ਵੀ ਹੋ ਸਕਦਾ ਹੈ.

Missing details: exact browser, route, package versions, backend logs, reproduction steps, ਅਤੇ ਇਹ production ਵਿੱਚ ਹੁੰਦਾ ਹੈ ਜਾਂ ਸਿਰਫ local ਵਿੱਚ.

ਮੈਨੂੰ practical debugging plan ਚਾਹੀਦਾ ਹੈ, ਬਿਨਾਂ file paths, functions ਜਾਂ dependencies invent ਕੀਤੇ.`,
    proposal: `Proposal context:

ਇੱਕ Indian client ਆਪਣੇ sales follow-up process ਨੂੰ organize ਕਰਨ ਵਿੱਚ help ਚਾਹੁੰਦਾ ਹੈ. ਉਹ WhatsApp, Excel ਅਤੇ Gmail use ਕਰਦਾ ਹੈ, ਪਰ clear flow ਨਹੀਂ ਹੈ.

ਉਹ "AI use" ਕਰਨਾ ਚਾਹੁੰਦਾ ਹੈ, ਪਰ scope, INR budget, dates ਅਤੇ internal owner ਅਜੇ clear ਨਹੀਂ.

ਸਾਨੂੰ ਇਸ information ਨੂੰ clear proposal ਵਿੱਚ ਬਦਲਣਾ ਹੈ, ਬਿਨਾਂ prices invent ਕੀਤੇ ਜਾਂ unconfirmed ਚੀਜ਼ promise ਕੀਤੇ.`
  }
};

let currentLanguage = "es";
let lastDefaultOutcome = translations.es.defaults.outcome;

const rawNotes = document.querySelector("#rawNotes");
const caseType = document.querySelector("#caseType");
const outputFormat = document.querySelector("#outputFormat");
const desiredOutcome = document.querySelector("#desiredOutcome");
const pendingRule = document.querySelector("#pendingRule");
const promptOutput = document.querySelector("#promptOutput");
const statusMessage = document.querySelector("#statusMessage");
const selectedExamplePreview = document.querySelector("#selectedExamplePreview");
const exampleStatus = document.querySelector("#exampleStatus");
const languageSelects = document.querySelectorAll("[data-language-select]");

const localizedPageNames = {
  es: "",
  en: "en.html",
  hi: "hi.html",
  pa: "pa.html"
};

function getLocalizedPath(language) {
  const pageName = localizedPageNames[language] || "";
  const basePath = window.location.pathname
    .replace(/(?:index|en|hi|pa)\.html$/i, "")
    .replace(/\/?$/, "/");
  return `${basePath}${pageName}`;
}

function getShareUrl() {
  if (window.location.protocol === "file:") return "[LINK]";
  const url = new URL(window.location.href);
  url.pathname = getLocalizedPath(currentLanguage);
  url.search = "";
  url.hash = "";
  return url.toString();
}

function t(key) {
  return translations[currentLanguage].ui[key] || translations.es.ui[key] || key;
}

function setLanguage(language, showChangeNotice = false) {
  const existingPrompt = promptOutput ? promptOutput.textContent.trim() : "";
  const hasGeneratedPrompt = existingPrompt && !isEmptyPrompt(existingPrompt);
  const hasUserText = rawNotes ? rawNotes.value.trim().length > 0 : false;
  const nextLanguage = translations[language] ? language : "es";
  const previousDefault = lastDefaultOutcome;
  currentLanguage = nextLanguage;
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

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const requestedLanguage = params.get("lang");
  if (translations[requestedLanguage]) return requestedLanguage;

  const pageName = window.location.pathname.split("/").pop().toLowerCase();
  const pageLanguage = Object.entries(localizedPageNames).find(([, name]) => name === pageName);
  if (pageLanguage && translations[pageLanguage[0]]) return pageLanguage[0];

  const htmlLanguage = document.documentElement.lang;
  return translations[htmlLanguage] ? htmlLanguage : "es";
}

function populateOptions() {
  if (!caseType || !outputFormat) return;

  const previousCase = caseType.value || "general";
  const previousOutput = outputFormat.value || "facts";
  const languageData = translations[currentLanguage];

  caseType.innerHTML = "";
  caseKeys.forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = languageData.cases[key];
    caseType.appendChild(option);
  });
  caseType.value = caseKeys.includes(previousCase) ? previousCase : "general";

  outputFormat.innerHTML = "";
  outputKeys.forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = languageData.outputs[key];
    outputFormat.appendChild(option);
  });
  outputFormat.value = outputKeys.includes(previousOutput) ? previousOutput : "facts";
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

function hasPendingMarker(rule) {
  return /\[(PENDIENTE|PENDING)\]/i.test(rule);
}

function getPendingAwareRules(rules) {
  return pendingRule.checked ? rules : rules.filter((rule) => !hasPendingMarker(rule));
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderPromptOutput(text) {
  if (!promptOutput) return;
  const safeText = escapeHtml(text);
  promptOutput.innerHTML = safeText.replace(
    /\[(PENDIENTE|PENDING)\]/gi,
    '<span class="pending-marker">[$1]</span>'
  );
}

function buildPrompt() {
  const languageData = translations[currentLanguage];
  const notes = rawNotes.value.trim();
  const selectedCase = caseType.value;
  const selectedFormat = outputFormat.value;
  const outcome = desiredOutcome.value.trim() || languageData.defaults.outcome;
  const pendingInstruction = pendingRule.checked
    ? languageData.prompt.pendingOn
    : languageData.prompt.pendingOff;

  if (!notes) {
    setStatus(languageData.statuses.missingNotes, true);
    return "";
  }

  const extraRules = getPendingAwareRules(languageData.caseGuidance[selectedCase] || languageData.caseGuidance.general).map((rule) => `- ${rule}`).join("\n");
  const expectationRules = languageData.prompt.expectations.map((rule) => `- ${rule}`).join("\n");
  const nhaRules = getPendingAwareRules(languageData.prompt.nhaRules).map((rule) => `- ${rule}`).join("\n");

  return `[${languageData.prompt.headings.task}]
${outcome}

[${languageData.prompt.headings.context}]
${languageData.prompt.caseType}: ${languageData.cases[selectedCase]}
${languageData.prompt.audienceLabel}: ${languageData.prompt.audience}
${languageData.prompt.rawContext}

[${languageData.prompt.headings.notes}]
${notes}

[${languageData.prompt.headings.expectation}]
${expectationRules}
- ${languageData.prompt.responseLanguage}
- ${pendingInstruction}

[${languageData.prompt.headings.rules}]
${nhaRules}
${extraRules}

[${languageData.prompt.headings.output}]
${languageData.prompt.formatRequested}: ${languageData.outputs[selectedFormat]}
${languageData.formatGuidance[selectedFormat]}`;
}

function setStatus(message, warning = false) {
  if (!statusMessage) return;
  statusMessage.textContent = message;
  statusMessage.classList.toggle("warning", warning);
}

function loadSample(sampleName, generateImmediately = false) {
  const languageData = translations[currentLanguage];
  const settings = languageData.sampleSettings[sampleName];

  rawNotes.value = languageData.samples[sampleName];
  caseType.value = settings.caseKey;
  outputFormat.value = settings.outputKey;
  desiredOutcome.value = settings.desiredOutcome;

  if (generateImmediately) {
    const prompt = buildPrompt();
    renderPromptOutput(prompt);
    setStatus(languageData.statuses.sampleReady);
    document.querySelector(".workspace").scrollIntoView({ behavior: "smooth", block: "start" });
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
  const message = getSelectedExampleLoadedText(selectedCase, selectedOutput);
  if (exampleStatus) exampleStatus.textContent = message;
  setStatus(message);
  document.querySelector(".step-divider").scrollIntoView({ behavior: "smooth", block: "start" });
}

function setupToolPage() {
  if (!rawNotes || !caseType || !outputFormat || !desiredOutcome || !pendingRule || !promptOutput) return;

  document.querySelector("#generatePrompt").addEventListener("click", () => {
    const prompt = buildPrompt();
    if (!prompt) return;
    renderPromptOutput(prompt);
    setStatus(translations[currentLanguage].statuses.generated);
  });

  document.querySelector("#tryExample").addEventListener("click", () => {
    loadSample("cx", true);
  });

  document.querySelector("#loadSelectedExample").addEventListener("click", () => {
    loadSelectedExample();
  });

  caseType.addEventListener("change", updateSelectedExamplePreview);
  outputFormat.addEventListener("change", updateSelectedExamplePreview);
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
      setStatus(languageData.statuses.copied);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(promptOutput);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
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
      await navigator.clipboard.writeText(languageData.shareText());
      setStatus(languageData.statuses.shareCopied);
    } catch {
      setStatus(languageData.statuses.shareFailed, true);
    }
  });

  document.querySelector("#clearForm").addEventListener("click", () => {
    const languageData = translations[currentLanguage];
    rawNotes.value = "";
    caseType.value = "general";
    outputFormat.value = "facts";
    desiredOutcome.value = languageData.defaults.outcome;
    renderPromptOutput(languageData.defaults.emptyPrompt);
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
