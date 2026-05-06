const caseKeys = ["general", "legal", "consulting", "cx", "operations", "proposal"];
const outputKeys = ["facts", "summary", "draft", "actionPlan", "email", "risks"];

const translations = {
  es: {
    name: "Español",
    htmlLang: "es",
    title: "NHA Mini Desk | Convierte tu idea en un mejor prompt",
    description: "Escribe o pega lo que quieres pedirle a la IA y conviértelo en un prompt claro para ChatGPT, Gemini, Claude o la IA que uses. Gratis, sin login y sin descargar apps.",
    ui: {
      "language.label": "Idioma",
      "hero.eyebrow": "Gratis - Sin login - Sin descargar app",
      "hero.subtitle": "Escribe o pega lo que quieres pedirle a la IA. La herramienta lo convierte en un prompt claro para ChatGPT, Gemini, Claude o la IA que uses.",
      "hero.tryExample": "Probar en 20 segundos",
      "hero.privacy": "Tus notas no se guardan en una base de datos.",
      "why.label": "Para qué sirve",
      "why.copy": "Cuando pegas notas confusas en la IA, la respuesta puede salir bonita pero incompleta. Esta herramienta ordena tu pedido antes de enviarlo.",
      "steps.one": "Elige el trabajo",
      "steps.two": "Escribe o pega tu idea",
      "steps.three": "Copia el prompt a tu IA",
      "input.title": "1. Elige el trabajo",
      "input.subtitle": "Primero selecciona qué quieres hacer. Después pega tus notas tal como están.",
      "input.explainerTitle": "No tienes que ordenar nada antes.",
      "input.explainerCopy": "La herramienta te ayuda a convertir una idea inicial, mensaje o notas de llamada en una instrucción clara para la IA.",
      "form.caseLabel": "¿Qué tipo de trabajo es?",
      "form.outputLabel": "¿Qué quieres recibir?",
      "form.choiceHelp": "Primero elige el trabajo y lo que quieres recibir. Luego puedes cargar un ejemplo para esa selección o pegar tus propias notas abajo.",
      "samples.selected": "Cargar ejemplo para esta selección",
      "samples.selectedHelp": "El ejemplo aparecerá abajo en el cuadro de notas.",
      "samples.cx": "Cargar ejemplo de mensaje",
      "samples.consultoria": "Cargar ejemplo de consultoría",
      "samples.arrendamiento": "Cargar ejemplo legal",
      "notes.title": "2. Escribe o pega tu idea",
      "notes.subtitle": "Mensaje, llamada, correo, pedido inicial o texto desordenado.",
      "notes.label": "Tu idea, mensaje o pedido inicial",
      "notes.help": "No tiene que estar perfecto. Puedes escribir como piensas, pegar un mensaje, una llamada, un correo o una idea suelta.",
      "notes.placeholder": "Ejemplo: quiero responder a un cliente, tengo estos datos, falta confirmar la fecha, no quiero prometer algo que no sé...",
      "outcome.label": "Dile a la IA qué resultado quieres",
      "pending.label": "Si falta información, obligar a la IA a marcar [PENDIENTE]",
      "actions.generate": "3. Generar prompt",
      "actions.clear": "Limpiar",
      "output.title": "4. Copia y usa",
      "output.subtitle": "Este texto incluye reglas para ordenar la información y reducir inventos.",
      "output.nextTitle": "Qué haces después",
      "output.nextCopy": "Copia este prompt y pégalo en ChatGPT, Gemini, Claude o la IA que uses. La IA recibirá una mejor instrucción.",
      "actions.copy": "Copiar para tu IA",
      "actions.download": "Descargar .txt",
      "share.title": "¿Te ayudó este método?",
      "share.copy": "Si te resultó útil, compártelo con alguien que pueda beneficiarse de esta forma de pedirle mejor a la IA.",
      "actions.share": "Copiar invitación para compartir",
      "verification.title": "Antes de confiar en la respuesta de la IA",
      "verification.one": "¿La IA separó hechos de supuestos?",
      "verification.two": "¿Marcó lo faltante como [PENDIENTE]?",
      "verification.twoOff": "¿Separó claramente lo faltante o incierto?",
      "verification.three": "¿Inventó algún dato que no estaba en las notas?",
      "verification.four": "¿El resultado se puede rastrear a información real?",
      "verification.five": "¿Hay una decisión humana pendiente antes de usarlo?",
      "privacy.note": "La herramienta no guarda lo que escribes. Si quieres borrarlo de la pantalla, presiona \"Limpiar\" o cierra la pestaña.",
      "footer.creator": "Creado por Ashish Punj",
      "footer.meta": "v0.1.0 · © 2026 Ashish Punj · Lanzado 6 May 2026",
      "footer.license": "MIT License",
      "footer.info": "Cómo funciona y términos",
      "info.eyebrow": "NHA Mini Desk",
      "info.title": "Cómo funciona y términos",
      "info.subtitle": "Una explicación simple para usar la herramienta con confianza.",
      "info.whatTitle": "Qué hace",
      "info.whatOne": "NHA Mini Desk convierte lo que quieres pedirle a la IA en un prompt más claro para usar en ChatGPT, Gemini, Claude o la IA que uses.",
      "info.whatTwo": "No responde por la IA. No reemplaza tu criterio. Solo te ayuda a pedir mejor.",
      "info.howTitle": "Cómo se usa",
      "info.howOne": "Elige qué tipo de trabajo quieres hacer.",
      "info.howTwo": "Pega tus notas tal como están.",
      "info.howThree": "Genera el prompt.",
      "info.howFour": "Copia el prompt y pégalo en ChatGPT, Gemini, Claude o la IA que uses.",
      "info.howFive": "Revisa la respuesta antes de usarla.",
      "info.browserTitle": "Cómo funciona",
      "info.browserOne": "La página arma el prompt en tu navegador. No necesitas descargar una app ni crear cuenta.",
      "info.browserTwo": "La herramienta no guarda tus notas en una base de datos y no las envía a nuestro servidor para generar el prompt.",
      "info.browserThree": "Si quieres borrar lo que pegaste, presiona \"Limpiar\" o cierra la pestaña.",
      "info.privacyTitle": "Privacidad",
      "info.privacyOne": "Evita pegar información extremadamente sensible si no estás seguro de querer trabajar con ella en una página web.",
      "info.privacyTwo": "Los navegadores pueden conservar temporalmente el estado de una página por comodidad. La herramienta no guarda tus notas de forma intencional.",
      "info.limitsTitle": "Límites",
      "info.limitsOne": "La salida de cualquier IA puede tener errores. Revisa siempre nombres, fechas, cifras, leyes, datos médicos, datos financieros y cualquier decisión importante.",
      "info.limitsTwo": "Esta herramienta no da asesoría legal, médica, financiera ni profesional. Es una ayuda para ordenar instrucciones.",
      "info.termsTitle": "Términos de uso",
      "info.termsOne": "Usa la herramienta bajo tu responsabilidad. Tú decides qué información pegar, qué prompt usar y qué hacer con la respuesta de la IA.",
      "info.termsTwo": "No uses esta herramienta para crear contenido ilegal, engañoso, dañino o para tomar decisiones importantes sin revisión humana.",
      "info.curiosityTitle": "Para personas curiosas",
      "info.curiosityOne": "El proyecto está hecho como una página simple de navegador. La idea es que más personas aprendan a usar IA con método, sin depender de herramientas complicadas.",
      "footer.back": "Volver a NHA Mini Desk"
    },
    cases: {
      general: "General",
      legal: "Legal México",
      consulting: "Consultoría",
      cx: "CX / Cliente",
      operations: "Operaciones",
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
      outcome: "Convierte mis notas en una salida clara, verificable y lista para revisar antes de usar.",
      emptyPrompt: "Tu prompt aparecerá aquí. Primero pega tus notas y presiona \"Generar prompt\"."
    },
    statuses: {
      missingNotes: "Primero pega tus notas. Pueden estar desordenadas; esa es la idea.",
      generated: "Listo. Copia este prompt y pégalo en ChatGPT, Gemini, Claude o la IA que uses.",
      sampleReady: "Ejemplo listo. Copia el prompt y pégalo en ChatGPT, Gemini, Claude o la IA que uses para ver la diferencia.",
      sampleLoaded: "Ejemplo cargado. Puedes editarlo antes de generar el prompt.",
      copyFirst: "Genera un prompt antes de copiar.",
      copied: "Prompt copiado al portapapeles.",
      selected: "No se pudo copiar automáticamente. El prompt quedó seleccionado.",
      downloadFirst: "Genera un prompt antes de descargar.",
      downloaded: "Archivo nha-prompt.txt descargado.",
      shareCopied: "Mensaje para compartir copiado.",
      shareFailed: "No se pudo copiar el mensaje. Copia el link manualmente."
      ,
      languageChanged: "Idioma cambiado. Tu texto y prompt actual se conservan. Presiona \"Generar prompt\" para crear una versión en este idioma.",
      optionChanged: "Opción cambiada. Presiona \"Generar prompt\" otra vez para actualizar el prompt."
    },
    prompt: {
      headings: {
        task: "TAREA",
        context: "CONTEXTO",
        notes: "NOTAS CRUDAS",
        expectation: "EXPECTATIVA",
        rules: "REGLAS NHA",
        output: "FORMATO DE SALIDA"
      },
      caseType: "Tipo de trabajo",
      audienceLabel: "Audiencia",
      audience: "Profesional mexicano que necesita una salida útil, clara y verificable.",
      rawContext: "La información viene de notas crudas y puede estar incompleta, mezclada o escrita con urgencia.",
      pendingOn: "Marca cualquier dato faltante, incierto o no confirmado como [PENDIENTE].",
      pendingOff: "Lista cualquier dato faltante, incierto o no confirmado en una sección de Faltantes.",
      expectations: [
        "Trabaja con cuidado y no asumas datos críticos.",
        "Usa lenguaje profesional y claro.",
        "Separa lo confirmado de lo supuesto.",
        "Si falta información crítica, lista preguntas antes de redactar una versión final."
      ],
      nhaRules: [
        "Separa hechos confirmados de supuestos.",
        "Marca datos faltantes como [PENDIENTE].",
        "No inventes nombres, fechas, cifras, RFCs, artículos, cláusulas, fuentes ni datos legales.",
        "Si falta información crítica, detente y lista preguntas.",
        "Incluye una sección de riesgos.",
        "Incluye una sección de verificación humana."
      ],
      formatRequested: "Formato solicitado"
    },
    caseGuidance: {
      legal: ["No inventes artículos de ley.", "No inventes RFC.", "No inventes nombres de sociedades.", "Si falta jurisdicción, marca [PENDIENTE].", "Si falta identificación de partes, marca [PENDIENTE].", "Recomienda revisión por abogado antes de usar cualquier documento."],
      consulting: ["Separa síntomas de causas probables.", "No inventes métricas.", "Marca supuestos de negocio como [PENDIENTE].", "Incluye preguntas para diagnóstico."],
      cx: ["Mantén tono empático y profesional.", "No prometas compensaciones o fechas no confirmadas.", "Separa hechos internos de información del cliente.", "Incluye siguiente acción clara."],
      operations: ["Distingue problemas urgentes de mejoras estructurales.", "No inventes responsables.", "Marca dependencias y fechas faltantes como [PENDIENTE].", "Incluye riesgos operativos."],
      proposal: ["No inventes precios ni alcance.", "Separa necesidad confirmada de oportunidad posible.", "Incluye preguntas antes de cotizar.", "Sugiere estructura de propuesta."],
      general: ["Separa hechos, supuestos y pendientes.", "No inventes datos.", "Incluye preguntas de aclaración.", "Incluye riesgos de usar la salida sin revisión."]
    },
    formatGuidance: {
      facts: "Entrega secciones: Hechos confirmados, Supuestos, Pendientes, Riesgos, Preguntas.",
      summary: "Entrega un resumen ejecutivo breve, seguido de pendientes y riesgos.",
      draft: "Solo redacta borrador si la información crítica está completa. Si falta información, primero lista preguntas.",
      actionPlan: "Entrega acciones, responsable sugerido si está indicado, fecha si existe y pendientes.",
      email: "Entrega asunto, cuerpo del email, tono recomendado y datos que faltan antes de enviar.",
      risks: "Entrega riesgos priorizados, evidencia en notas y acción de mitigación."
    },
    samples: {
      cx: `Cliente molesto escribió por mensaje:

"Ya es la tercera vez que me dicen que mi pedido llega mañana y nada. Lo compré hace casi dos semanas. Nadie me contesta bien. Si no llega hoy quiero devolución."

Datos internos:

Pedido probablemente #MX-4821, pero no estoy seguro porque el mensaje llegó sin número.

Cliente se llama Mariana, apellido pendiente.

Compra aproximada: 24 o 25 de abril. Producto: silla ergonómica negra. En sistema aparece un retraso por inventario, pero falta confirmar con logística.

El equipo de soporte quiere responder con empatía, explicar situación y pedir datos faltantes sin sonar burocrático.

No prometer entrega hoy si no está confirmado.

Necesitamos respuesta profesional y plan de seguimiento.`,
      consulting: `Notas de llamada con cliente:

Empresa mediana de servicios B2B en Monterrey. Tienen equipo comercial de 6 personas. El dueño dice que están perdiendo oportunidades porque los vendedores no dan seguimiento constante.

Usan mensajes, Excel y correo. No tienen CRM formal. Cada vendedor maneja sus leads como quiere.

Problema principal: nadie sabe cuántos prospectos hay, quién dio seguimiento, quién está caliente y quién se perdió.

El dueño quiere "automatizar con IA", pero parece que primero necesitan ordenar proceso.

Mencionó que reciben 80 a 120 leads al mes, pero no está seguro. También dijo que la tasa de cierre anda entre 8% y 12%, pero no hay datos confiables.

Quiere propuesta para diagnóstico de 2 semanas y luego implementación.

Pendiente confirmar presupuesto, herramientas actuales y quién sería responsable interno.`,
      legal: `Licenciado, necesitamos preparar contrato de arrendamiento para un local comercial en Roma Norte, CDMX.

El local mide aprox 120 m2. La renta sería de $38,000 mensuales más IVA, pero falta confirmar si el arrendador factura como persona física o moral.

El cliente quiere iniciar el 15 de junio, pero todavía no está 100% confirmado porque están esperando adecuaciones del local.

El arrendatario probablemente será una S.A. de C.V., pero no tengo todavía razón social completa ni RFC.

Quieren depósito de 2 meses. También quieren saber si se puede incluir subarrendamiento con autorización previa por escrito.

El dueño quiere penalización si se salen antes de 12 meses. No sé todavía monto.

Urge tener una primera versión para revisión mañana.`
    },
    sampleSettings: {
      cx: { caseKey: "cx", outputKey: "email", desiredOutcome: "Prepara una respuesta empática y profesional, separando lo confirmado de lo pendiente antes de prometer algo." },
      consulting: { caseKey: "consulting", outputKey: "actionPlan", desiredOutcome: "Organiza estas notas de llamada en diagnóstico, prioridades, preguntas pendientes y siguiente paso." },
      legal: { caseKey: "legal", outputKey: "facts", desiredOutcome: "Convierte estas notas en hechos, pendientes, riesgos y preguntas para responder mejor." }
    },
    shareText: () => `Amigos, prueben NHA Mini Desk.

Escribe o pega lo que quieres pedirle a la IA y conviértelo en un prompt claro para ChatGPT, Gemini, Claude o la IA que uses.

Elige el trabajo -> escribe o pega tu idea -> copia un mejor prompt

Gratis. Sin login. Sin descargar apps.

Si te sirve, compártelo con alguien que pueda beneficiarse de este método:
${getShareUrl()}`
  },

  en: {
    name: "English",
    htmlLang: "en",
    title: "NHA Mini Desk | Turn your idea into a better prompt",
    description: "Write or paste what you want to ask AI and turn it into a clear prompt for ChatGPT, Gemini, Claude, or any AI you use. Free, no login, no app download.",
    ui: {
      "language.label": "Language",
      "hero.eyebrow": "Free - No login - No app download",
      "hero.subtitle": "Write or paste what you want to ask AI. The tool turns it into a clear prompt for ChatGPT, Gemini, Claude, or any AI you use.",
      "hero.tryExample": "Try in 20 seconds",
      "hero.privacy": "Your notes are not saved in a database.",
      "why.label": "What it does",
      "why.copy": "When you paste confusing notes into AI, the answer may look polished but miss important details. This tool organizes your request before you send it.",
      "steps.one": "Choose the work",
      "steps.two": "Write or paste your idea",
      "steps.three": "Copy the prompt to your AI",
      "input.title": "1. Choose the work",
      "input.subtitle": "First choose what you want to do. Then paste your notes as they are.",
      "input.explainerTitle": "You do not need to clean anything first.",
      "input.explainerCopy": "The tool helps turn an initial idea, message, or call notes into a clear instruction for AI.",
      "form.caseLabel": "What type of work is this?",
      "form.outputLabel": "What do you want to receive?",
      "form.choiceHelp": "First choose the work and what you want to receive. Then load an example for that selection or paste your own notes below.",
      "samples.selected": "Load example for this selection",
      "samples.selectedHelp": "The example will appear below in the notes box.",
      "samples.cx": "Load message example",
      "samples.consultoria": "Load consulting example",
      "samples.arrendamiento": "Load legal example",
      "notes.title": "2. Write or paste your idea",
      "notes.subtitle": "Message, call, email, first request, or messy text.",
      "notes.label": "Your idea, message, or first request",
      "notes.help": "It does not need to be perfect. You can write how you think, paste a message, a call, an email, or a loose idea.",
      "notes.placeholder": "Example: I want to reply to a client, I have these details, the date is not confirmed, I do not want to promise something I do not know...",
      "outcome.label": "Tell the AI what result you want",
      "pending.label": "If information is missing, force the AI to mark it as [PENDING]",
      "actions.generate": "3. Generate prompt",
      "actions.clear": "Clear",
      "output.title": "4. Copy and use",
      "output.subtitle": "This text includes rules to organize the information and reduce made-up details.",
      "output.nextTitle": "What to do next",
      "output.nextCopy": "Copy this prompt and paste it into ChatGPT, Gemini, Claude, or any AI you use. The AI will receive a better instruction.",
      "actions.copy": "Copy for your AI",
      "actions.download": "Download .txt",
      "share.title": "Did this method help?",
      "share.copy": "If it was useful, share it with someone who could benefit from asking AI in a clearer way.",
      "actions.share": "Copy invitation to share",
      "verification.title": "Before trusting the AI response",
      "verification.one": "Did the AI separate facts from assumptions?",
      "verification.two": "Did it mark missing information as [PENDING]?",
      "verification.twoOff": "Did it clearly separate missing or uncertain information?",
      "verification.three": "Did it invent anything that was not in the notes?",
      "verification.four": "Can the result be traced back to real information?",
      "verification.five": "Is there a human decision pending before using it?",
      "privacy.note": "The tool does not save what you write. To remove it from the screen, press \"Clear\" or close the tab.",
      "footer.creator": "Created by Ashish Punj",
      "footer.meta": "v0.1.0 · © 2026 Ashish Punj · Released 6 May 2026",
      "footer.license": "MIT License",
      "footer.info": "How it works and terms",
      "info.eyebrow": "NHA Mini Desk",
      "info.title": "How it works and terms",
      "info.subtitle": "A simple explanation so you can use the tool with confidence.",
      "info.whatTitle": "What it does",
      "info.whatOne": "NHA Mini Desk turns what you want to ask AI into a clearer prompt for ChatGPT, Gemini, Claude, or any AI you use.",
      "info.whatTwo": "It does not answer for the AI. It does not replace your judgment. It only helps you ask better.",
      "info.howTitle": "How to use it",
      "info.howOne": "Choose the type of work you want to do.",
      "info.howTwo": "Paste your notes as they are.",
      "info.howThree": "Generate the prompt.",
      "info.howFour": "Copy the prompt and paste it into ChatGPT, Gemini, Claude, or any AI you use.",
      "info.howFive": "Review the response before using it.",
      "info.browserTitle": "How it works",
      "info.browserOne": "The page builds the prompt in your browser. You do not need to download an app or create an account.",
      "info.browserTwo": "The tool does not save your notes in a database and does not send them to our server to generate the prompt.",
      "info.browserThree": "To remove what you pasted, press \"Clear\" or close the tab.",
      "info.privacyTitle": "Privacy",
      "info.privacyOne": "Avoid pasting extremely sensitive information if you are not sure you want to work with it on a web page.",
      "info.privacyTwo": "Browsers may temporarily preserve page state for convenience. The tool does not intentionally save your notes.",
      "info.limitsTitle": "Limits",
      "info.limitsOne": "Any AI output can contain mistakes. Always review names, dates, numbers, laws, medical information, financial information, and important decisions.",
      "info.limitsTwo": "This tool does not provide legal, medical, financial, or professional advice. It helps organize instructions.",
      "info.termsTitle": "Terms of use",
      "info.termsOne": "Use the tool at your own responsibility. You decide what information to paste, what prompt to use, and what to do with the AI response.",
      "info.termsTwo": "Do not use this tool to create illegal, deceptive, harmful content or to make important decisions without human review.",
      "info.curiosityTitle": "For curious people",
      "info.curiosityOne": "The project is built as a simple browser page. The idea is to help more people use AI with method, without depending on complicated tools.",
      "footer.back": "Back to NHA Mini Desk"
    },
    cases: {
      general: "General",
      legal: "Legal",
      consulting: "Consulting",
      cx: "CX / Customer",
      operations: "Operations",
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
      outcome: "Turn my notes into a clear, verifiable output that is ready to review before use.",
      emptyPrompt: "Your prompt will appear here. First paste your notes and press \"Generate prompt\"."
    },
    statuses: {
      missingNotes: "First paste your notes. They can be messy; that is the point.",
      generated: "Ready. Copy this prompt and paste it into ChatGPT, Gemini, Claude, or any AI you use.",
      sampleReady: "Example ready. Copy the prompt and paste it into ChatGPT, Gemini, Claude, or any AI you use to see the difference.",
      sampleLoaded: "Example loaded. You can edit it before generating the prompt.",
      copyFirst: "Generate a prompt before copying.",
      copied: "Prompt copied to clipboard.",
      selected: "Could not copy automatically. The prompt has been selected.",
      downloadFirst: "Generate a prompt before downloading.",
      downloaded: "File nha-prompt.txt downloaded.",
      shareCopied: "Share message copied.",
      shareFailed: "Could not copy the message. Copy the link manually."
      ,
      languageChanged: "Language changed. Your text and current prompt were kept. Press \"Generate prompt\" to create a version in this language.",
      optionChanged: "Option changed. Press \"Generate prompt\" again to update the prompt."
    },
    prompt: {
      headings: { task: "TASK", context: "CONTEXT", notes: "RAW NOTES", expectation: "EXPECTATION", rules: "NHA RULES", output: "OUTPUT FORMAT" },
      caseType: "Work type",
      audienceLabel: "Audience",
      audience: "Professional user who needs a useful, clear, verifiable output.",
      rawContext: "The information comes from raw notes and may be incomplete, mixed, or written in a hurry.",
      pendingOn: "Mark any missing, uncertain, or unconfirmed information as [PENDING].",
      pendingOff: "List any missing, uncertain, or unconfirmed information in a Missing information section.",
      expectations: ["Work carefully and do not assume critical details.", "Use clear professional language.", "Separate confirmed information from assumptions.", "If critical information is missing, list questions before drafting a final version."],
      nhaRules: ["Separate confirmed facts from assumptions.", "Mark missing information as [PENDING].", "Do not invent names, dates, numbers, IDs, legal articles, clauses, sources, or legal facts.", "If critical information is missing, stop and list questions.", "Include a risks section.", "Include a human verification section."],
      formatRequested: "Requested format"
    },
    caseGuidance: {
      legal: ["Do not invent legal articles.", "Do not invent IDs or registration numbers.", "Do not invent company names.", "If jurisdiction is missing, mark [PENDING].", "If party identification is missing, mark [PENDING].", "Recommend lawyer review before using any document."],
      consulting: ["Separate symptoms from probable causes.", "Do not invent metrics.", "Mark business assumptions as [PENDING].", "Include diagnostic questions."],
      cx: ["Keep the tone empathetic and professional.", "Do not promise compensation or dates that are not confirmed.", "Separate internal facts from customer information.", "Include a clear next action."],
      operations: ["Separate urgent problems from structural improvements.", "Do not invent owners.", "Mark missing dependencies and dates as [PENDING].", "Include operational risks."],
      proposal: ["Do not invent prices or scope.", "Separate confirmed need from possible opportunity.", "Include questions before quoting.", "Suggest a proposal structure."],
      general: ["Separate facts, assumptions, and pending items.", "Do not invent data.", "Include clarification questions.", "Include risks of using the output without review."]
    },
    formatGuidance: {
      facts: "Use sections: Confirmed facts, Assumptions, Pending items, Risks, Questions.",
      summary: "Give a brief executive summary, followed by pending items and risks.",
      draft: "Only draft if critical information is complete. If information is missing, list questions first.",
      actionPlan: "Give actions, suggested owner if indicated, date if present, and pending items.",
      email: "Give subject, email body, recommended tone, and missing details before sending.",
      risks: "Give prioritized risks, evidence in the notes, and mitigation action."
    },
    samples: {
      cx: `An upset customer sent this message:

"This is the third time you tell me my order will arrive tomorrow and nothing happens. I bought it almost two weeks ago. Nobody answers clearly. If it does not arrive today, I want a refund."

Internal notes:

Order is probably #MX-4821, but I am not sure because the message arrived without an order number.

Customer name is Mariana, last name pending.

Approximate purchase date: April 24 or 25. Product: black ergonomic chair. System shows an inventory delay, but logistics must confirm.

Support team wants to respond with empathy, explain the situation, and ask for missing details without sounding bureaucratic.

Do not promise delivery today if it is not confirmed.

We need a professional response and follow-up plan.`,
      consulting: `Client call notes:

Mid-sized B2B services company in Monterrey. Sales team of 6 people. The owner says they are losing opportunities because salespeople do not follow up consistently.

They use messages, Excel, and email. No formal CRM. Each salesperson handles leads their own way.

Main problem: nobody knows how many prospects exist, who followed up, who is warm, and who was lost.

The owner wants to "automate with AI", but it seems they need to organize the process first.

He mentioned 80 to 120 leads per month, but he is not sure. He also said close rate is around 8% to 12%, but there is no reliable data.

He wants a proposal for a 2-week diagnosis and then implementation.

Pending: confirm budget, current tools, and who would be responsible internally.`,
      legal: `We need to prepare a lease agreement for a commercial space in Roma Norte, Mexico City.

The space is about 120 m2. Rent would be $38,000 monthly plus VAT, but we still need to confirm if the landlord invoices as an individual or company.

The client wants to start on June 15, but it is not 100% confirmed because they are waiting for improvements to the space.

Tenant will probably be an S.A. de C.V., but I do not yet have full legal name or tax ID.

They want a 2-month deposit. They also want to know if subleasing can be included with prior written authorization.

The owner wants a penalty if they leave before 12 months. I do not know the amount yet.

Need first version for review tomorrow.`
    },
    sampleSettings: {
      cx: { caseKey: "cx", outputKey: "email", desiredOutcome: "Prepare an empathetic and professional response, separating confirmed information from pending items before promising anything." },
      consulting: { caseKey: "consulting", outputKey: "actionPlan", desiredOutcome: "Organize these call notes into diagnosis, priorities, pending questions, and next step." },
      legal: { caseKey: "legal", outputKey: "facts", desiredOutcome: "Turn these notes into facts, pending items, risks, and questions to respond better." }
    },
    shareText: () => `Try NHA Mini Desk.

Write or paste what you want to ask AI and turn it into a clear prompt for ChatGPT, Gemini, Claude, or any AI you use.

Choose the work -> write or paste your idea -> copy a better prompt

Free. No login. No app download.

If it helps, share it with someone who could benefit from this method:
${getShareUrl()}`
  },

  hi: {
    name: "हिंदी",
    htmlLang: "hi",
    title: "NHA Mini Desk | अपनी idea को बेहतर prompt बनाएं",
    description: "आप AI से जो पूछना चाहते हैं उसे लिखें या paste करें और ChatGPT, Gemini, Claude या किसी भी AI के लिए clear prompt बनाएं। मुफ्त, बिना login, बिना app download.",
    ui: {
      "language.label": "भाषा",
      "hero.eyebrow": "मुफ्त - Login नहीं - App download नहीं",
      "hero.subtitle": "आप AI से जो पूछना चाहते हैं उसे लिखें या paste करें. Tool उसे ChatGPT, Gemini, Claude या जिस AI को आप use करते हैं उसके लिए clear prompt में बदलता है.",
      "hero.tryExample": "20 सेकंड में try करें",
      "hero.privacy": "आपके notes database में save नहीं होते.",
      "why.label": "यह क्या करता है",
      "why.copy": "जब आप confused notes सीधे AI में paste करते हैं, जवाब अच्छा दिख सकता है लेकिन जरूरी बात छूट सकती है. यह tool भेजने से पहले आपके request को order करता है.",
      "steps.one": "काम चुनें",
      "steps.two": "अपनी idea लिखें या paste करें",
      "steps.three": "Prompt अपनी AI में copy करें",
      "input.title": "1. काम चुनें",
      "input.subtitle": "पहले चुनें कि आप क्या करना चाहते हैं. फिर notes जैसे हैं वैसे paste करें.",
      "input.explainerTitle": "पहले कुछ साफ करने की जरूरत नहीं.",
      "input.explainerCopy": "यह tool आपकी initial idea, message या call notes को AI के लिए clear instruction में बदलने में मदद करता है.",
      "form.caseLabel": "यह किस तरह का काम है?",
      "form.outputLabel": "आपको क्या चाहिए?",
      "form.choiceHelp": "पहले काम और result चुनें. फिर इस selection के लिए example load करें या नीचे अपने notes paste करें.",
      "samples.selected": "इस selection के लिए example load करें",
      "samples.selectedHelp": "Example नीचे notes box में आएगा.",
      "samples.cx": "Message example load करें",
      "samples.consultoria": "Consulting example load करें",
      "samples.arrendamiento": "Legal example load करें",
      "notes.title": "2. अपनी idea लिखें या paste करें",
      "notes.subtitle": "Message, call, email, पहला request या messy text.",
      "notes.label": "आपकी idea, message या पहला request",
      "notes.help": "Perfect होना जरूरी नहीं. आप जैसे सोचते हैं वैसे लिख सकते हैं, message, call, email या loose idea paste कर सकते हैं.",
      "notes.placeholder": "Example: मुझे client को reply करना है, मेरे पास ये details हैं, date confirm नहीं है, मैं ऐसी बात promise नहीं करना चाहता जो मुझे पता नहीं...",
      "outcome.label": "AI को बताएं कि आपको कैसा result चाहिए",
      "pending.label": "अगर जानकारी missing है, AI को [PENDING] mark करने को कहें",
      "actions.generate": "3. Prompt generate करें",
      "actions.clear": "Clear",
      "output.title": "4. Copy करें और use करें",
      "output.subtitle": "इस text में information को order करने और invented details कम करने के rules हैं.",
      "output.nextTitle": "इसके बाद क्या करें",
      "output.nextCopy": "इस prompt को copy करें और ChatGPT, Gemini, Claude या जिस AI को आप use करते हैं उसमें paste करें. AI को बेहतर instruction मिलेगा.",
      "actions.copy": "अपनी AI के लिए copy करें",
      "actions.download": ".txt download करें",
      "share.title": "क्या यह method helpful लगा?",
      "share.copy": "अगर यह आपके काम आया, तो इसे किसी ऐसे व्यक्ति के साथ share करें जिसे AI से बेहतर तरीके से पूछने में फायदा होगा.",
      "actions.share": "Share invitation copy करें",
      "verification.title": "AI response पर भरोसा करने से पहले",
      "verification.one": "क्या AI ने facts और assumptions अलग किए?",
      "verification.two": "क्या missing information को [PENDING] mark किया?",
      "verification.twoOff": "क्या missing या uncertain information साफ अलग की?",
      "verification.three": "क्या notes में न होने वाली कोई बात invent की?",
      "verification.four": "क्या result real information से trace हो सकता है?",
      "verification.five": "Use करने से पहले कोई human decision pending है?",
      "privacy.note": "यह tool आपकी लिखी हुई चीज़ save नहीं करता. Screen से हटाने के लिए \"Clear\" दबाएं या tab बंद करें.",
      "footer.creator": "Created by Ashish Punj",
      "footer.meta": "v0.1.0 · © 2026 Ashish Punj · Released 6 May 2026",
      "footer.license": "MIT License",
      "footer.info": "कैसे काम करता है और terms",
      "info.eyebrow": "NHA Mini Desk",
      "info.title": "कैसे काम करता है और terms",
      "info.subtitle": "Tool को confidence के साथ use करने के लिए simple explanation.",
      "info.whatTitle": "यह क्या करता है",
      "info.whatOne": "NHA Mini Desk आप जो AI से पूछना चाहते हैं उसे ChatGPT, Gemini, Claude या जिस AI को आप use करते हैं उसके लिए clear prompt में बदलता है.",
      "info.whatTwo": "यह AI की जगह जवाब नहीं देता. यह आपके judgment को replace नहीं करता. यह सिर्फ बेहतर पूछने में मदद करता है.",
      "info.howTitle": "Use कैसे करें",
      "info.howOne": "जिस तरह का काम करना है, उसे चुनें.",
      "info.howTwo": "अपने notes जैसे हैं वैसे paste करें.",
      "info.howThree": "Prompt generate करें.",
      "info.howFour": "Prompt copy करें और ChatGPT, Gemini, Claude या जिस AI को आप use करते हैं उसमें paste करें.",
      "info.howFive": "Use करने से पहले response review करें.",
      "info.browserTitle": "यह कैसे काम करता है",
      "info.browserOne": "Page आपके browser में prompt बनाता है. आपको app download या account create करने की जरूरत नहीं.",
      "info.browserTwo": "Tool आपके notes database में save नहीं करता और prompt generate करने के लिए हमारे server पर नहीं भेजता.",
      "info.browserThree": "Paste की हुई चीज हटाने के लिए \"Clear\" दबाएं या tab बंद करें.",
      "info.privacyTitle": "Privacy",
      "info.privacyOne": "अगर आप sure नहीं हैं कि web page पर काम करना है, तो extremely sensitive information paste न करें.",
      "info.privacyTwo": "Browsers सुविधा के लिए page state temporary रख सकते हैं. Tool intentionally आपके notes save नहीं करता.",
      "info.limitsTitle": "Limits",
      "info.limitsOne": "किसी भी AI की output में errors हो सकते हैं. Names, dates, numbers, laws, medical info, financial info और important decisions हमेशा review करें.",
      "info.limitsTwo": "यह tool legal, medical, financial या professional advice नहीं देता. यह instructions को order करने में मदद करता है.",
      "info.termsTitle": "Terms of use",
      "info.termsOne": "Tool को अपनी responsibility पर use करें. कौनसी information paste करनी है, कौनसा prompt use करना है, और AI response से क्या करना है, यह आप decide करते हैं.",
      "info.termsTwo": "Illegal, deceptive, harmful content बनाने या human review के बिना important decisions लेने के लिए इस tool का use न करें.",
      "info.curiosityTitle": "Curious लोगों के लिए",
      "info.curiosityOne": "यह project एक simple browser page की तरह बना है. Idea है कि ज्यादा लोग complicated tools पर depend किए बिना method से AI use करना सीखें.",
      "footer.back": "NHA Mini Desk पर वापस जाएं"
    },
    cases: {
      general: "General",
      legal: "Legal",
      consulting: "Consulting",
      cx: "CX / Customer",
      operations: "Operations",
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
      outcome: "मेरे notes को clear, verifiable output में बदलें जिसे use करने से पहले review किया जा सके.",
      emptyPrompt: "आपका prompt यहां दिखेगा. पहले notes paste करें और \"Prompt generate करें\" दबाएं."
    },
    statuses: {
      missingNotes: "पहले अपने notes paste करें. वे messy हो सकते हैं; यही idea है.",
      generated: "Ready. इस prompt को copy करें और ChatGPT, Gemini, Claude या जिस AI को आप use करते हैं उसमें paste करें.",
      sampleReady: "Example ready. फर्क देखने के लिए prompt copy करके ChatGPT, Gemini, Claude या जिस AI को आप use करते हैं उसमें paste करें.",
      sampleLoaded: "Example loaded. Prompt generate करने से पहले आप इसे edit कर सकते हैं.",
      copyFirst: "Copy करने से पहले prompt generate करें.",
      copied: "Prompt clipboard में copy हो गया.",
      selected: "Automatically copy नहीं हुआ. Prompt selected है.",
      downloadFirst: "Download करने से पहले prompt generate करें.",
      downloaded: "File nha-prompt.txt download हो गई.",
      shareCopied: "Share message copy हो गया.",
      shareFailed: "Message copy नहीं हुआ. Link manually copy करें."
      ,
      languageChanged: "Language बदल गई. आपका text और current prompt वैसे ही रखे गए हैं. इस भाषा में version बनाने के लिए \"Prompt generate करें\" दबाएं.",
      optionChanged: "Option बदल गई. Prompt update करने के लिए \"Prompt generate करें\" फिर दबाएं."
    },
    prompt: {
      headings: { task: "काम", context: "संदर्भ", notes: "RAW NOTES", expectation: "उम्मीद", rules: "NHA RULES", output: "OUTPUT FORMAT" },
      caseType: "काम का प्रकार",
      audienceLabel: "Audience",
      audience: "Professional user जिसे useful, clear और verifiable output चाहिए.",
      rawContext: "Information raw notes से आई है और incomplete, mixed या hurry में लिखी हो सकती है.",
      pendingOn: "Missing, uncertain या unconfirmed information को [PENDING] mark करें.",
      pendingOff: "Missing, uncertain या unconfirmed information को Missing information section में list करें.",
      expectations: ["Carefully काम करें और critical details assume न करें.", "Clear professional language use करें.", "Confirmed information और assumptions अलग करें.", "अगर critical information missing है, final version लिखने से पहले questions list करें."],
      nhaRules: ["Confirmed facts और assumptions अलग करें.", "Missing information को [PENDING] mark करें.", "Names, dates, numbers, IDs, legal articles, clauses, sources या legal facts invent न करें.", "अगर critical information missing है, रुकें और questions list करें.", "Risks section include करें.", "Human verification section include करें."],
      formatRequested: "Requested format"
    },
    caseGuidance: {
      legal: ["Legal articles invent न करें.", "IDs या registration numbers invent न करें.", "Company names invent न करें.", "Jurisdiction missing हो तो [PENDING] mark करें.", "Parties की identification missing हो तो [PENDING] mark करें.", "किसी document को use करने से पहले lawyer review recommend करें."],
      consulting: ["Symptoms और probable causes अलग करें.", "Metrics invent न करें.", "Business assumptions को [PENDING] mark करें.", "Diagnostic questions include करें."],
      cx: ["Tone empathetic और professional रखें.", "Unconfirmed compensation या dates promise न करें.", "Internal facts और customer information अलग करें.", "Clear next action include करें."],
      operations: ["Urgent problems और structural improvements अलग करें.", "Owners invent न करें.", "Missing dependencies और dates को [PENDING] mark करें.", "Operational risks include करें."],
      proposal: ["Prices या scope invent न करें.", "Confirmed need और possible opportunity अलग करें.", "Quote करने से पहले questions include करें.", "Proposal structure suggest करें."],
      general: ["Facts, assumptions और pending items अलग करें.", "Data invent न करें.", "Clarification questions include करें.", "Review के बिना output use करने के risks include करें."]
    },
    formatGuidance: {
      facts: "Sections दें: Confirmed facts, Assumptions, Pending items, Risks, Questions.",
      summary: "Brief executive summary दें, फिर pending items और risks.",
      draft: "Critical information complete हो तो ही draft लिखें. Information missing हो तो पहले questions list करें.",
      actionPlan: "Actions, suggested owner if indicated, date if present, और pending items दें.",
      email: "Subject, email body, recommended tone, और send करने से पहले missing details दें.",
      risks: "Prioritized risks, notes में evidence, और mitigation action दें."
    },
    samples: {
      cx: `एक नाराज customer ने message भेजा:

"तीसरी बार आपने कहा order कल आएगा और अभी तक कुछ नहीं हुआ. मैंने लगभग दो हफ्ते पहले खरीदा था. कोई ठीक से जवाब नहीं दे रहा. अगर आज नहीं आया तो refund चाहिए."

Internal notes:

Order शायद #MX-4821 है, लेकिन sure नहीं क्योंकि message में order number नहीं था.

Customer का नाम Mariana है, last name pending.

Approx purchase date: 24 या 25 April. Product: black ergonomic chair. System में inventory delay दिख रहा है, लेकिन logistics से confirm करना है.

Support team empathy के साथ reply करना चाहती है, situation explain करनी है और missing details मांगनी हैं बिना bureaucratic लगे.

Delivery today promise नहीं करनी अगर confirm नहीं है.

Professional response और follow-up plan चाहिए.`,
      consulting: `Client call notes:

Medium B2B services company in Monterrey. Sales team 6 लोगों की है. Owner कहता है opportunities miss हो रही हैं क्योंकि salespeople consistent follow-up नहीं करते.

वे messages, Excel और email use करते हैं. Formal CRM नहीं है. हर salesperson leads अपने तरीके से handle करता है.

Main problem: किसी को पता नहीं कितने prospects हैं, किसने follow up किया, कौन warm है, कौन lost हो गया.

Owner "AI से automate" करना चाहता है, लेकिन लगता है पहले process order करना होगा.

उसने 80 से 120 leads per month कहा, लेकिन sure नहीं. Close rate 8% से 12% बताया, लेकिन reliable data नहीं है.

2-week diagnosis और फिर implementation के लिए proposal चाहिए.

Pending: budget, current tools, और internal responsible person confirm करना.`,
      legal: `Commercial space के lease agreement की जरूरत है, Roma Norte, Mexico City.

Space लगभग 120 m2 है. Rent $38,000 monthly plus VAT होगी, लेकिन landlord individual है या company, confirm करना बाकी है.

Client 15 June से start करना चाहता है, लेकिन 100% confirmed नहीं क्योंकि space improvements pending हैं.

Tenant शायद S.A. de C.V. होगा, लेकिन full legal name और tax ID अभी नहीं है.

2-month deposit चाहिए. वे यह भी जानना चाहते हैं कि prior written authorization के साथ sublease include कर सकते हैं या नहीं.

Owner penalty चाहता है अगर वे 12 months से पहले leave करें. Amount पता नहीं.

Tomorrow review के लिए first version चाहिए.`
    },
    sampleSettings: {
      cx: { caseKey: "cx", outputKey: "email", desiredOutcome: "Confirmed और pending information अलग करते हुए empathetic professional response तैयार करें, कुछ भी promise करने से पहले." },
      consulting: { caseKey: "consulting", outputKey: "actionPlan", desiredOutcome: "इन call notes को diagnosis, priorities, pending questions और next step में organize करें." },
      legal: { caseKey: "legal", outputKey: "facts", desiredOutcome: "इन notes को facts, pending items, risks और questions में बदलें ताकि बेहतर reply दिया जा सके." }
    },
    shareText: () => `NHA Mini Desk try करें.

आप AI से जो पूछना चाहते हैं उसे लिखें या paste करें और ChatGPT, Gemini, Claude या किसी भी AI के लिए clear prompt बनाएं.

काम चुनें -> अपनी idea लिखें या paste करें -> बेहतर prompt copy करें

Free. No login. No app download.

अगर यह helpful लगे, तो इसे किसी ऐसे व्यक्ति को share करें जिसे इस method से फायदा होगा:
${getShareUrl()}`
  },

  pa: {
    name: "ਪੰਜਾਬੀ",
    htmlLang: "pa",
    title: "NHA Mini Desk | ਆਪਣੀ idea ਨੂੰ ਵਧੀਆ prompt ਬਣਾਓ",
    description: "ਤੁਸੀਂ AI ਤੋਂ ਜੋ ਪੁੱਛਣਾ ਚਾਹੁੰਦੇ ਹੋ ਉਹ ਲਿਖੋ ਜਾਂ paste ਕਰੋ ਅਤੇ ChatGPT, Gemini, Claude ਜਾਂ ਕਿਸੇ ਵੀ AI ਲਈ clear prompt ਬਣਾਓ। Free, no login, no app download.",
    ui: {
      "language.label": "ਭਾਸ਼ਾ",
      "hero.eyebrow": "Free - Login ਨਹੀਂ - App download ਨਹੀਂ",
      "hero.subtitle": "ਤੁਸੀਂ AI ਤੋਂ ਜੋ ਪੁੱਛਣਾ ਚਾਹੁੰਦੇ ਹੋ ਉਹ ਲਿਖੋ ਜਾਂ paste ਕਰੋ. Tool ਇਸਨੂੰ ChatGPT, Gemini, Claude ਜਾਂ ਜਿਸ AI ਨੂੰ ਤੁਸੀਂ use ਕਰਦੇ ਹੋ ਉਸ ਲਈ clear prompt ਵਿੱਚ ਬਦਲਦਾ ਹੈ.",
      "hero.tryExample": "20 seconds ਵਿੱਚ try ਕਰੋ",
      "hero.privacy": "ਤੁਹਾਡੇ notes database ਵਿੱਚ save ਨਹੀਂ ਹੁੰਦੇ.",
      "why.label": "ਇਹ ਕੀ ਕਰਦਾ ਹੈ",
      "why.copy": "ਜਦੋਂ ਤੁਸੀਂ confused notes ਸਿੱਧੇ AI ਵਿੱਚ paste ਕਰਦੇ ਹੋ, answer ਵਧੀਆ ਲੱਗ ਸਕਦਾ ਹੈ ਪਰ important details miss ਹੋ ਸਕਦੀਆਂ ਹਨ. ਇਹ tool ਭੇਜਣ ਤੋਂ ਪਹਿਲਾਂ request ਨੂੰ order ਕਰਦਾ ਹੈ.",
      "steps.one": "ਕੰਮ ਚੁਣੋ",
      "steps.two": "ਆਪਣੀ idea ਲਿਖੋ ਜਾਂ paste ਕਰੋ",
      "steps.three": "Prompt ਆਪਣੀ AI ਵਿੱਚ copy ਕਰੋ",
      "input.title": "1. ਕੰਮ ਚੁਣੋ",
      "input.subtitle": "ਪਹਿਲਾਂ ਚੁਣੋ ਤੁਸੀਂ ਕੀ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ. ਫਿਰ notes ਜਿਵੇਂ ਹਨ paste ਕਰੋ.",
      "input.explainerTitle": "ਪਹਿਲਾਂ ਕੁਝ clean ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ.",
      "input.explainerCopy": "ਇਹ tool ਤੁਹਾਡੀ initial idea, message ਜਾਂ call notes ਨੂੰ AI ਲਈ clear instruction ਵਿੱਚ ਬਦਲਣ ਵਿੱਚ help ਕਰਦਾ ਹੈ.",
      "form.caseLabel": "ਇਹ ਕਿਸ type ਦਾ ਕੰਮ ਹੈ?",
      "form.outputLabel": "ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ?",
      "form.choiceHelp": "ਪਹਿਲਾਂ ਕੰਮ ਅਤੇ result ਚੁਣੋ. ਫਿਰ ਇਸ selection ਲਈ example load ਕਰੋ ਜਾਂ ਹੇਠਾਂ ਆਪਣੇ notes paste ਕਰੋ.",
      "samples.selected": "ਇਸ selection ਲਈ example load ਕਰੋ",
      "samples.selectedHelp": "Example ਹੇਠਾਂ notes box ਵਿੱਚ ਆਵੇਗਾ.",
      "samples.cx": "Message example load ਕਰੋ",
      "samples.consultoria": "Consulting example load ਕਰੋ",
      "samples.arrendamiento": "Legal example load ਕਰੋ",
      "notes.title": "2. ਆਪਣੀ idea ਲਿਖੋ ਜਾਂ paste ਕਰੋ",
      "notes.subtitle": "Message, call, email, ਪਹਿਲਾ request ਜਾਂ messy text.",
      "notes.label": "ਤੁਹਾਡੀ idea, message ਜਾਂ ਪਹਿਲਾ request",
      "notes.help": "Perfect ਹੋਣਾ ਜ਼ਰੂਰੀ ਨਹੀਂ. ਤੁਸੀਂ ਜਿਵੇਂ ਸੋਚਦੇ ਹੋ ਲਿਖ ਸਕਦੇ ਹੋ, message, call, email ਜਾਂ loose idea paste ਕਰ ਸਕਦੇ ਹੋ.",
      "notes.placeholder": "Example: ਮੈਨੂੰ client ਨੂੰ reply ਕਰਨਾ ਹੈ, ਮੇਰੇ ਕੋਲ ਇਹ details ਹਨ, date confirm ਨਹੀਂ, ਮੈਂ ਅਜਿਹੀ ਗੱਲ promise ਨਹੀਂ ਕਰਨੀ ਜੋ ਮੈਨੂੰ ਪਤਾ ਨਹੀਂ...",
      "outcome.label": "AI ਨੂੰ ਦੱਸੋ ਤੁਹਾਨੂੰ ਕਿਹੋ ਜਿਹਾ result ਚਾਹੀਦਾ ਹੈ",
      "pending.label": "ਜੇ information missing ਹੈ, AI ਨੂੰ [PENDING] mark ਕਰਨ ਲਈ ਕਹੋ",
      "actions.generate": "3. Prompt generate ਕਰੋ",
      "actions.clear": "Clear",
      "output.title": "4. Copy ਕਰੋ ਤੇ use ਕਰੋ",
      "output.subtitle": "ਇਸ text ਵਿੱਚ information ਨੂੰ order ਕਰਨ ਤੇ invented details ਘਟਾਉਣ ਦੇ rules ਹਨ.",
      "output.nextTitle": "ਇਸ ਤੋਂ ਬਾਅਦ ਕੀ ਕਰਨਾ ਹੈ",
      "output.nextCopy": "ਇਹ prompt copy ਕਰੋ ਤੇ ChatGPT, Gemini, Claude ਜਾਂ ਜਿਸ AI ਨੂੰ ਤੁਸੀਂ use ਕਰਦੇ ਹੋ ਉਸ ਵਿੱਚ paste ਕਰੋ. AI ਨੂੰ better instruction ਮਿਲੇਗੀ.",
      "actions.copy": "ਆਪਣੀ AI ਲਈ copy ਕਰੋ",
      "actions.download": ".txt download ਕਰੋ",
      "share.title": "ਕੀ ਇਹ method helpful ਲੱਗਾ?",
      "share.copy": "ਜੇ ਇਹ ਤੁਹਾਡੇ ਕੰਮ ਆਇਆ, ਤਾਂ ਇਸਨੂੰ ਕਿਸੇ ਨਾਲ share ਕਰੋ ਜਿਸਨੂੰ AI ਤੋਂ better ਤਰੀਕੇ ਨਾਲ ਪੁੱਛਣ ਵਿੱਚ benefit ਹੋਵੇ.",
      "actions.share": "Share invitation copy ਕਰੋ",
      "verification.title": "AI response ਤੇ trust ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ",
      "verification.one": "ਕੀ AI ਨੇ facts ਤੇ assumptions ਵੱਖ ਕੀਤੇ?",
      "verification.two": "ਕੀ missing information ਨੂੰ [PENDING] mark ਕੀਤਾ?",
      "verification.twoOff": "ਕੀ missing ਜਾਂ uncertain information ਸਾਫ਼ ਵੱਖ ਕੀਤੀ?",
      "verification.three": "ਕੀ notes ਵਿੱਚ ਨਾ ਹੋਣ ਵਾਲੀ ਕੋਈ ਗੱਲ invent ਕੀਤੀ?",
      "verification.four": "ਕੀ result real information ਨਾਲ trace ਹੋ ਸਕਦਾ ਹੈ?",
      "verification.five": "Use ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਕੋਈ human decision pending ਹੈ?",
      "privacy.note": "ਇਹ tool ਤੁਹਾਡੀ ਲਿਖੀ ਚੀਜ਼ save ਨਹੀਂ ਕਰਦਾ. Screen ਤੋਂ ਹਟਾਉਣ ਲਈ \"Clear\" ਦਬਾਓ ਜਾਂ tab close ਕਰੋ.",
      "footer.creator": "Created by Ashish Punj",
      "footer.meta": "v0.1.0 · © 2026 Ashish Punj · Released 6 May 2026",
      "footer.license": "MIT License",
      "footer.info": "ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ terms",
      "info.eyebrow": "NHA Mini Desk",
      "info.title": "ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ ਅਤੇ terms",
      "info.subtitle": "Tool ਨੂੰ confidence ਨਾਲ use ਕਰਨ ਲਈ simple explanation.",
      "info.whatTitle": "ਇਹ ਕੀ ਕਰਦਾ ਹੈ",
      "info.whatOne": "NHA Mini Desk ਤੁਸੀਂ AI ਤੋਂ ਜੋ ਪੁੱਛਣਾ ਚਾਹੁੰਦੇ ਹੋ ਉਸਨੂੰ ChatGPT, Gemini, Claude ਜਾਂ ਜਿਸ AI ਨੂੰ ਤੁਸੀਂ use ਕਰਦੇ ਹੋ ਉਸ ਲਈ clear prompt ਵਿੱਚ ਬਦਲਦਾ ਹੈ.",
      "info.whatTwo": "ਇਹ AI ਦੀ ਥਾਂ answer ਨਹੀਂ ਦਿੰਦਾ. ਇਹ ਤੁਹਾਡੇ judgment ਨੂੰ replace ਨਹੀਂ ਕਰਦਾ. ਇਹ ਸਿਰਫ better ask ਕਰਨ ਵਿੱਚ help ਕਰਦਾ ਹੈ.",
      "info.howTitle": "Use ਕਿਵੇਂ ਕਰਨਾ ਹੈ",
      "info.howOne": "ਜਿਸ type ਦਾ ਕੰਮ ਕਰਨਾ ਹੈ, ਉਹ ਚੁਣੋ.",
      "info.howTwo": "ਆਪਣੇ notes ਜਿਵੇਂ ਹਨ paste ਕਰੋ.",
      "info.howThree": "Prompt generate ਕਰੋ.",
      "info.howFour": "Prompt copy ਕਰੋ ਤੇ ChatGPT, Gemini, Claude ਜਾਂ ਜਿਸ AI ਨੂੰ ਤੁਸੀਂ use ਕਰਦੇ ਹੋ ਉਸ ਵਿੱਚ paste ਕਰੋ.",
      "info.howFive": "Use ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ response review ਕਰੋ.",
      "info.browserTitle": "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
      "info.browserOne": "Page ਤੁਹਾਡੇ browser ਵਿੱਚ prompt ਬਣਾਉਂਦਾ ਹੈ. App download ਜਾਂ account create ਕਰਨ ਦੀ ਲੋੜ ਨਹੀਂ.",
      "info.browserTwo": "Tool ਤੁਹਾਡੇ notes database ਵਿੱਚ save ਨਹੀਂ ਕਰਦਾ ਤੇ prompt generate ਕਰਨ ਲਈ ਸਾਡੇ server ਤੇ ਨਹੀਂ ਭੇਜਦਾ.",
      "info.browserThree": "Paste ਕੀਤੀ ਚੀਜ਼ ਹਟਾਉਣ ਲਈ \"Clear\" ਦਬਾਓ ਜਾਂ tab close ਕਰੋ.",
      "info.privacyTitle": "Privacy",
      "info.privacyOne": "ਜੇ ਤੁਸੀਂ sure ਨਹੀਂ ਕਿ web page ਤੇ ਕੰਮ ਕਰਨਾ ਹੈ, ਤਾਂ extremely sensitive information paste ਨਾ ਕਰੋ.",
      "info.privacyTwo": "Browsers convenience ਲਈ page state temporary ਰੱਖ ਸਕਦੇ ਹਨ. Tool intentionally ਤੁਹਾਡੇ notes save ਨਹੀਂ ਕਰਦਾ.",
      "info.limitsTitle": "Limits",
      "info.limitsOne": "ਕਿਸੇ ਵੀ AI output ਵਿੱਚ errors ਹੋ ਸਕਦੇ ਹਨ. Names, dates, numbers, laws, medical info, financial info ਅਤੇ important decisions ਹਮੇਸ਼ਾਂ review ਕਰੋ.",
      "info.limitsTwo": "ਇਹ tool legal, medical, financial ਜਾਂ professional advice ਨਹੀਂ ਦਿੰਦਾ. ਇਹ instructions ਨੂੰ order ਕਰਨ ਵਿੱਚ help ਕਰਦਾ ਹੈ.",
      "info.termsTitle": "Terms of use",
      "info.termsOne": "Tool ਆਪਣੀ responsibility ਤੇ use ਕਰੋ. ਕਿਹੜੀ information paste ਕਰਨੀ, ਕਿਹੜਾ prompt use ਕਰਨਾ, ਅਤੇ AI response ਨਾਲ ਕੀ ਕਰਨਾ ਹੈ, ਇਹ ਤੁਸੀਂ decide ਕਰਦੇ ਹੋ.",
      "info.termsTwo": "Illegal, deceptive, harmful content ਬਣਾਉਣ ਜਾਂ human review ਤੋਂ ਬਿਨਾਂ important decisions ਲੈਣ ਲਈ ਇਸ tool ਦਾ use ਨਾ ਕਰੋ.",
      "info.curiosityTitle": "Curious ਲੋਕਾਂ ਲਈ",
      "info.curiosityOne": "ਇਹ project simple browser page ਵਾਂਗ ਬਣਿਆ ਹੈ. Idea ਹੈ ਕਿ ਹੋਰ ਲੋਕ complicated tools ਤੇ depend ਕੀਤੇ ਬਿਨਾਂ method ਨਾਲ AI use ਕਰਨਾ ਸਿੱਖਣ.",
      "footer.back": "NHA Mini Desk ਤੇ ਵਾਪਸ ਜਾਓ"
    },
    cases: {
      general: "General",
      legal: "Legal",
      consulting: "Consulting",
      cx: "CX / Customer",
      operations: "Operations",
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
      outcome: "ਮੇਰੇ notes ਨੂੰ clear, verifiable output ਵਿੱਚ ਬਦਲੋ ਜੋ use ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ review ਹੋ ਸਕੇ.",
      emptyPrompt: "ਤੁਹਾਡਾ prompt ਇੱਥੇ ਆਵੇਗਾ. ਪਹਿਲਾਂ notes paste ਕਰੋ ਤੇ \"Prompt generate ਕਰੋ\" ਦਬਾਓ."
    },
    statuses: {
      missingNotes: "ਪਹਿਲਾਂ ਆਪਣੇ notes paste ਕਰੋ. ਉਹ messy ਹੋ ਸਕਦੇ ਹਨ; ਇਹੀ idea ਹੈ.",
      generated: "Ready. ਇਹ prompt copy ਕਰੋ ਤੇ ChatGPT, Gemini, Claude ਜਾਂ ਜਿਸ AI ਨੂੰ ਤੁਸੀਂ use ਕਰਦੇ ਹੋ ਉਸ ਵਿੱਚ paste ਕਰੋ.",
      sampleReady: "Example ready. Difference ਵੇਖਣ ਲਈ prompt copy ਕਰਕੇ ChatGPT, Gemini, Claude ਜਾਂ ਜਿਸ AI ਨੂੰ ਤੁਸੀਂ use ਕਰਦੇ ਹੋ ਉਸ ਵਿੱਚ paste ਕਰੋ.",
      sampleLoaded: "Example loaded. Prompt generate ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਤੁਸੀਂ edit ਕਰ ਸਕਦੇ ਹੋ.",
      copyFirst: "Copy ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ prompt generate ਕਰੋ.",
      copied: "Prompt clipboard ਵਿੱਚ copy ਹੋ ਗਿਆ.",
      selected: "Automatically copy ਨਹੀਂ ਹੋਇਆ. Prompt selected ਹੈ.",
      downloadFirst: "Download ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ prompt generate ਕਰੋ.",
      downloaded: "File nha-prompt.txt download ਹੋ ਗਈ.",
      shareCopied: "Share message copy ਹੋ ਗਿਆ.",
      shareFailed: "Message copy ਨਹੀਂ ਹੋਇਆ. Link manually copy ਕਰੋ."
      ,
      languageChanged: "Language ਬਦਲ ਗਈ. ਤੁਹਾਡਾ text ਅਤੇ current prompt ਉਹੀ ਰੱਖੇ ਗਏ ਹਨ. ਇਸ language ਵਿੱਚ version ਬਣਾਉਣ ਲਈ \"Prompt generate ਕਰੋ\" ਦਬਾਓ.",
      optionChanged: "Option ਬਦਲ ਗਈ. Prompt update ਕਰਨ ਲਈ \"Prompt generate ਕਰੋ\" ਫਿਰ ਦਬਾਓ."
    },
    prompt: {
      headings: { task: "ਕੰਮ", context: "ਸੰਦਰਭ", notes: "RAW NOTES", expectation: "ਉਮੀਦ", rules: "NHA RULES", output: "OUTPUT FORMAT" },
      caseType: "ਕੰਮ ਦੀ type",
      audienceLabel: "Audience",
      audience: "Professional user ਜਿਸਨੂੰ useful, clear ਅਤੇ verifiable output ਚਾਹੀਦਾ ਹੈ.",
      rawContext: "Information raw notes ਤੋਂ ਆਈ ਹੈ ਅਤੇ incomplete, mixed ਜਾਂ hurry ਵਿੱਚ ਲਿਖੀ ਹੋ ਸਕਦੀ ਹੈ.",
      pendingOn: "Missing, uncertain ਜਾਂ unconfirmed information ਨੂੰ [PENDING] mark ਕਰੋ.",
      pendingOff: "Missing, uncertain ਜਾਂ unconfirmed information ਨੂੰ Missing information section ਵਿੱਚ list ਕਰੋ.",
      expectations: ["Carefully ਕੰਮ ਕਰੋ ਅਤੇ critical details assume ਨਾ ਕਰੋ.", "Clear professional language use ਕਰੋ.", "Confirmed information ਅਤੇ assumptions ਵੱਖ ਕਰੋ.", "ਜੇ critical information missing ਹੈ, final version ਲਿਖਣ ਤੋਂ ਪਹਿਲਾਂ questions list ਕਰੋ."],
      nhaRules: ["Confirmed facts ਅਤੇ assumptions ਵੱਖ ਕਰੋ.", "Missing information ਨੂੰ [PENDING] mark ਕਰੋ.", "Names, dates, numbers, IDs, legal articles, clauses, sources ਜਾਂ legal facts invent ਨਾ ਕਰੋ.", "ਜੇ critical information missing ਹੈ, ਰੁਕੋ ਅਤੇ questions list ਕਰੋ.", "Risks section include ਕਰੋ.", "Human verification section include ਕਰੋ."],
      formatRequested: "Requested format"
    },
    caseGuidance: {
      legal: ["Legal articles invent ਨਾ ਕਰੋ.", "IDs ਜਾਂ registration numbers invent ਨਾ ਕਰੋ.", "Company names invent ਨਾ ਕਰੋ.", "Jurisdiction missing ਹੋਵੇ ਤਾਂ [PENDING] mark ਕਰੋ.", "Parties ਦੀ identification missing ਹੋਵੇ ਤਾਂ [PENDING] mark ਕਰੋ.", "ਕਿਸੇ document ਨੂੰ use ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ lawyer review recommend ਕਰੋ."],
      consulting: ["Symptoms ਅਤੇ probable causes ਵੱਖ ਕਰੋ.", "Metrics invent ਨਾ ਕਰੋ.", "Business assumptions ਨੂੰ [PENDING] mark ਕਰੋ.", "Diagnostic questions include ਕਰੋ."],
      cx: ["Tone empathetic ਅਤੇ professional ਰੱਖੋ.", "Unconfirmed compensation ਜਾਂ dates promise ਨਾ ਕਰੋ.", "Internal facts ਅਤੇ customer information ਵੱਖ ਕਰੋ.", "Clear next action include ਕਰੋ."],
      operations: ["Urgent problems ਅਤੇ structural improvements ਵੱਖ ਕਰੋ.", "Owners invent ਨਾ ਕਰੋ.", "Missing dependencies ਅਤੇ dates ਨੂੰ [PENDING] mark ਕਰੋ.", "Operational risks include ਕਰੋ."],
      proposal: ["Prices ਜਾਂ scope invent ਨਾ ਕਰੋ.", "Confirmed need ਅਤੇ possible opportunity ਵੱਖ ਕਰੋ.", "Quote ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ questions include ਕਰੋ.", "Proposal structure suggest ਕਰੋ."],
      general: ["Facts, assumptions ਅਤੇ pending items ਵੱਖ ਕਰੋ.", "Data invent ਨਾ ਕਰੋ.", "Clarification questions include ਕਰੋ.", "Review ਤੋਂ ਬਿਨਾਂ output use ਕਰਨ ਦੇ risks include ਕਰੋ."]
    },
    formatGuidance: {
      facts: "Sections ਦਿਓ: Confirmed facts, Assumptions, Pending items, Risks, Questions.",
      summary: "Brief executive summary ਦਿਓ, ਫਿਰ pending items ਅਤੇ risks.",
      draft: "Critical information complete ਹੋਵੇ ਤਾਂ ਹੀ draft ਲਿਖੋ. Information missing ਹੋਵੇ ਤਾਂ ਪਹਿਲਾਂ questions list ਕਰੋ.",
      actionPlan: "Actions, suggested owner if indicated, date if present, ਅਤੇ pending items ਦਿਓ.",
      email: "Subject, email body, recommended tone, ਅਤੇ send ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ missing details ਦਿਓ.",
      risks: "Prioritized risks, notes ਵਿੱਚ evidence, ਅਤੇ mitigation action ਦਿਓ."
    },
    samples: {
      cx: `ਇੱਕ angry customer ਨੇ message ਭੇਜਿਆ:

"ਤੀਜੀ ਵਾਰੀ ਤੁਸੀਂ ਕਿਹਾ order ਕੱਲ੍ਹ ਆਵੇਗਾ ਤੇ ਅਜੇ ਤੱਕ ਕੁਝ ਨਹੀਂ ਹੋਇਆ. ਮੈਂ ਲਗਭਗ ਦੋ ਹਫ਼ਤੇ ਪਹਿਲਾਂ ਖਰੀਦਿਆ ਸੀ. ਕੋਈ ਠੀਕ ਜਵਾਬ ਨਹੀਂ ਦੇ ਰਿਹਾ. ਜੇ ਅੱਜ ਨਹੀਂ ਆਇਆ ਤਾਂ refund ਚਾਹੀਦਾ."

Internal notes:

Order ਸ਼ਾਇਦ #MX-4821 ਹੈ, ਪਰ sure ਨਹੀਂ ਕਿਉਂਕਿ message ਵਿੱਚ order number ਨਹੀਂ ਸੀ.

Customer ਦਾ ਨਾਮ Mariana ਹੈ, last name pending.

Approx purchase date: 24 ਜਾਂ 25 April. Product: black ergonomic chair. System ਵਿੱਚ inventory delay ਦਿਖ ਰਿਹਾ ਹੈ, ਪਰ logistics ਤੋਂ confirm ਕਰਨਾ ਹੈ.

Support team empathy ਨਾਲ reply ਕਰਨਾ ਚਾਹੁੰਦੀ ਹੈ, situation explain ਕਰਨੀ ਹੈ ਅਤੇ missing details ਮੰਗਣੀਆਂ ਹਨ ਬਿਨਾਂ bureaucratic ਲੱਗੇ.

Delivery today promise ਨਹੀਂ ਕਰਨੀ ਜੇ confirm ਨਹੀਂ ਹੈ.

Professional response ਅਤੇ follow-up plan ਚਾਹੀਦਾ ਹੈ.`,
      consulting: `Client call notes:

Medium B2B services company in Monterrey. Sales team 6 ਲੋਕਾਂ ਦੀ ਹੈ. Owner ਕਹਿੰਦਾ ਹੈ opportunities miss ਹੋ ਰਹੀਆਂ ਹਨ ਕਿਉਂਕਿ salespeople consistent follow-up ਨਹੀਂ ਕਰਦੇ.

ਉਹ messages, Excel ਅਤੇ email use ਕਰਦੇ ਹਨ. Formal CRM ਨਹੀਂ. ਹਰ salesperson leads ਆਪਣੇ ਤਰੀਕੇ ਨਾਲ handle ਕਰਦਾ ਹੈ.

Main problem: ਕਿਸੇ ਨੂੰ ਨਹੀਂ ਪਤਾ ਕਿੰਨੇ prospects ਹਨ, ਕਿਸਨੇ follow up ਕੀਤਾ, ਕੌਣ warm ਹੈ, ਕੌਣ lost ਹੋ ਗਿਆ.

Owner "AI ਨਾਲ automate" ਕਰਨਾ ਚਾਹੁੰਦਾ ਹੈ, ਪਰ ਲੱਗਦਾ ਹੈ ਪਹਿਲਾਂ process order ਕਰਨਾ ਪਵੇਗਾ.

ਉਸਨੇ 80 ਤੋਂ 120 leads per month ਕਿਹਾ, ਪਰ sure ਨਹੀਂ. Close rate 8% ਤੋਂ 12% ਦੱਸਿਆ, ਪਰ reliable data ਨਹੀਂ.

2-week diagnosis ਅਤੇ ਫਿਰ implementation ਲਈ proposal ਚਾਹੀਦਾ ਹੈ.

Pending: budget, current tools, ਅਤੇ internal responsible person confirm ਕਰਨਾ.`,
      legal: `Commercial space ਦੇ lease agreement ਦੀ ਲੋੜ ਹੈ, Roma Norte, Mexico City.

Space ਲਗਭਗ 120 m2 ਹੈ. Rent $38,000 monthly plus VAT ਹੋਵੇਗੀ, ਪਰ landlord individual ਹੈ ਜਾਂ company, confirm ਕਰਨਾ ਬਾਕੀ ਹੈ.

Client 15 June ਤੋਂ start ਕਰਨਾ ਚਾਹੁੰਦਾ ਹੈ, ਪਰ 100% confirmed ਨਹੀਂ ਕਿਉਂਕਿ space improvements pending ਹਨ.

Tenant ਸ਼ਾਇਦ S.A. de C.V. ਹੋਵੇਗਾ, ਪਰ full legal name ਅਤੇ tax ID ਅਜੇ ਨਹੀਂ.

2-month deposit ਚਾਹੀਦਾ ਹੈ. ਉਹ ਇਹ ਵੀ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹਨ ਕਿ prior written authorization ਨਾਲ sublease include ਕਰ ਸਕਦੇ ਹਨ ਜਾਂ ਨਹੀਂ.

Owner penalty ਚਾਹੁੰਦਾ ਹੈ ਜੇ ਉਹ 12 months ਤੋਂ ਪਹਿਲਾਂ leave ਕਰਨ. Amount ਪਤਾ ਨਹੀਂ.

Tomorrow review ਲਈ first version ਚਾਹੀਦਾ ਹੈ.`
    },
    sampleSettings: {
      cx: { caseKey: "cx", outputKey: "email", desiredOutcome: "Confirmed ਅਤੇ pending information ਵੱਖ ਕਰਦੇ ਹੋਏ empathetic professional response ਤਿਆਰ ਕਰੋ, ਕੁਝ ਵੀ promise ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ." },
      consulting: { caseKey: "consulting", outputKey: "actionPlan", desiredOutcome: "ਇਹ call notes ਨੂੰ diagnosis, priorities, pending questions ਅਤੇ next step ਵਿੱਚ organize ਕਰੋ." },
      legal: { caseKey: "legal", outputKey: "facts", desiredOutcome: "ਇਹ notes ਨੂੰ facts, pending items, risks ਅਤੇ questions ਵਿੱਚ ਬਦਲੋ ਤਾਂ ਕਿ better reply ਦਿੱਤਾ ਜਾ ਸਕੇ." }
    },
    shareText: () => `NHA Mini Desk try ਕਰੋ.

ਤੁਸੀਂ AI ਤੋਂ ਜੋ ਪੁੱਛਣਾ ਚਾਹੁੰਦੇ ਹੋ ਉਹ ਲਿਖੋ ਜਾਂ paste ਕਰੋ ਅਤੇ ChatGPT, Gemini, Claude ਜਾਂ ਕਿਸੇ ਵੀ AI ਲਈ clear prompt ਬਣਾਓ.

ਕੰਮ ਚੁਣੋ -> ਆਪਣੀ idea ਲਿਖੋ ਜਾਂ paste ਕਰੋ -> better prompt copy ਕਰੋ

Free. No login. No app download.

ਜੇ helpful ਲੱਗੇ, ਇਸਨੂੰ ਕਿਸੇ ਨਾਲ share ਕਰੋ ਜਿਸਨੂੰ ਇਸ method ਤੋਂ benefit ਹੋਵੇ:
${getShareUrl()}`
  }
};

const contextualSamples = {
  es: {
    general: `Idea inicial:

Quiero organizar una idea que tengo para mejorar mi trabajo con IA. Tengo varias notas sueltas, algunas dudas y no sé por dónde empezar.

Quiero entender qué partes ya están claras, qué falta definir, qué riesgos hay y cuál sería el siguiente paso lógico.

Hay cosas que todavía no sé: tiempo disponible, herramientas exactas, costo y prioridad.`,
    operations: `Notas operativas:

El equipo está recibiendo solicitudes por varios canales. Algunas llegan por mensaje, otras por correo y otras por llamada.

No hay una lista única de pendientes. A veces dos personas trabajan lo mismo y otras tareas se quedan sin dueño.

Hay que ordenar prioridades, responsables, fechas y riesgos. Falta confirmar quién aprueba cambios y qué tareas son urgentes.

Necesitamos una forma clara de convertir esto en acciones.`,
    proposal: `Notas para propuesta:

Un cliente quiere ayuda para ordenar su proceso de seguimiento. Dice que usa mensajes, Excel y correo, pero no tiene un flujo claro.

Quiere "usar IA", pero todavía no está claro el alcance, presupuesto, fechas ni quién será responsable internamente.

Necesitamos convertir estas notas en una propuesta clara, sin inventar precios ni prometer cosas que no están confirmadas.`
  },
  en: {
    general: `Initial idea:

I want to organize an idea I have for improving my work with AI. I have several loose notes, some doubts, and I do not know where to start.

I want to understand what is already clear, what is missing, what risks exist, and what the next logical step should be.

Some things are still unknown: available time, exact tools, cost, and priority.`,
    operations: `Operations notes:

The team is receiving requests through several channels. Some arrive by message, some by email, and some by call.

There is no single pending list. Sometimes two people work on the same thing and other tasks have no owner.

We need to organize priorities, owners, dates, and risks. It is still unclear who approves changes and which tasks are urgent.

We need a clear way to turn this into actions.`,
    proposal: `Proposal notes:

A client wants help organizing their follow-up process. They say they use messages, Excel, and email, but do not have a clear flow.

They want to "use AI", but scope, budget, dates, and internal owner are still unclear.

We need to turn these notes into a clear proposal without inventing prices or promising anything unconfirmed.`
  },
  hi: {
    general: `Initial idea:

मैं AI के साथ अपना काम improve करने की एक idea organize करना चाहता हूं. मेरे पास loose notes हैं, कुछ doubts हैं, और पता नहीं कहां से शुरू करूं.

मुझे समझना है कि क्या clear है, क्या missing है, कौनसे risks हैं, और next logical step क्या होगा.

कुछ चीज़ें अभी unknown हैं: time available, exact tools, cost और priority.`,
    operations: `Operations notes:

Team को कई channels से requests मिल रही हैं. कुछ messages से आती हैं, कुछ email से, कुछ call से.

Single pending list नहीं है. कभी दो लोग एक ही काम कर लेते हैं और कुछ tasks बिना owner के रह जाते हैं.

Priorities, owners, dates और risks organize करने हैं. कौन changes approve करेगा और कौनसे tasks urgent हैं, यह अभी clear नहीं.

हमें इसे actions में बदलने का clear तरीका चाहिए.`,
    proposal: `Proposal notes:

एक client अपने follow-up process को organize करने में help चाहता है. वह messages, Excel और email use करता है, लेकिन clear flow नहीं है.

वह "AI use" करना चाहता है, लेकिन scope, budget, dates और internal owner अभी clear नहीं.

हमें इन notes को clear proposal में बदलना है, बिना prices invent किए या unconfirmed चीज़ promise किए.`
  },
  pa: {
    general: `Initial idea:

ਮੈਂ AI ਨਾਲ ਆਪਣਾ ਕੰਮ improve ਕਰਨ ਦੀ ਇੱਕ idea organize ਕਰਨੀ ਚਾਹੁੰਦਾ ਹਾਂ. ਮੇਰੇ ਕੋਲ loose notes ਹਨ, ਕੁਝ doubts ਹਨ, ਅਤੇ ਪਤਾ ਨਹੀਂ ਕਿੱਥੋਂ ਸ਼ੁਰੂ ਕਰਾਂ.

ਮੈਨੂੰ ਸਮਝਣਾ ਹੈ ਕਿ ਕੀ clear ਹੈ, ਕੀ missing ਹੈ, ਕਿਹੜੇ risks ਹਨ, ਅਤੇ next logical step ਕੀ ਹੋਵੇਗਾ.

ਕੁਝ ਚੀਜ਼ਾਂ ਅਜੇ unknown ਹਨ: time available, exact tools, cost ਅਤੇ priority.`,
    operations: `Operations notes:

Team ਨੂੰ ਕਈ channels ਤੋਂ requests ਆ ਰਹੀਆਂ ਹਨ. ਕੁਝ messages ਨਾਲ, ਕੁਝ email ਨਾਲ, ਕੁਝ call ਨਾਲ.

Single pending list ਨਹੀਂ ਹੈ. ਕਦੇ ਦੋ ਲੋਕ ਇੱਕੋ ਕੰਮ ਕਰ ਲੈਂਦੇ ਹਨ ਅਤੇ ਕੁਝ tasks ਬਿਨਾਂ owner ਦੇ ਰਹਿ ਜਾਂਦੇ ਹਨ.

Priorities, owners, dates ਅਤੇ risks organize ਕਰਨੇ ਹਨ. ਕੌਣ changes approve ਕਰੇਗਾ ਅਤੇ ਕਿਹੜੇ tasks urgent ਹਨ, ਇਹ ਅਜੇ clear ਨਹੀਂ.

ਸਾਨੂੰ ਇਸ ਨੂੰ actions ਵਿੱਚ ਬਦਲਣ ਦਾ clear ਤਰੀਕਾ ਚਾਹੀਦਾ ਹੈ.`,
    proposal: `Proposal notes:

ਇੱਕ client ਆਪਣੇ follow-up process ਨੂੰ organize ਕਰਨ ਵਿੱਚ help ਚਾਹੁੰਦਾ ਹੈ. ਉਹ messages, Excel ਅਤੇ email use ਕਰਦਾ ਹੈ, ਪਰ clear flow ਨਹੀਂ ਹੈ.

ਉਹ "AI use" ਕਰਨਾ ਚਾਹੁੰਦਾ ਹੈ, ਪਰ scope, budget, dates ਅਤੇ internal owner ਅਜੇ clear ਨਹੀਂ.

ਸਾਨੂੰ ਇਹ notes clear proposal ਵਿੱਚ ਬਦਲਣੇ ਹਨ, ਬਿਨਾਂ prices invent ਕੀਤੇ ਜਾਂ unconfirmed ਚੀਜ਼ promise ਕੀਤੇ.`
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

function getShareUrl() {
  if (window.location.protocol === "file:") return "[LINK]";
  const url = new URL(window.location.href);
  url.searchParams.set("lang", currentLanguage);
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
    ? `${t("info.title")} | NHA Mini Desk`
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
    promptOutput.textContent = languageData.defaults.emptyPrompt;
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
  return translations[requestedLanguage] ? requestedLanguage : "es";
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
    es: `Ejemplo que se cargará: ${caseLabel} -> ${outputLabel}`,
    en: `Example to load: ${caseLabel} -> ${outputLabel}`,
    hi: `Load होने वाला example: ${caseLabel} -> ${outputLabel}`,
    pa: `Load ਹੋਣ ਵਾਲਾ example: ${caseLabel} -> ${outputLabel}`
  };
  return messages[currentLanguage] || messages.es;
}

function getSelectedOutcomeText(selectedCase, selectedOutput) {
  const languageData = translations[currentLanguage];
  const caseLabel = languageData.cases[selectedCase];
  const outputLabel = languageData.outputs[selectedOutput];
  const messages = {
    es: `Usando estas notas, prepara ${outputLabel} para un trabajo de ${caseLabel}. No inventes datos y marca lo faltante.`,
    en: `Using these notes, prepare ${outputLabel} for ${caseLabel}. Do not invent data and mark what is missing.`,
    hi: `इन notes से ${caseLabel} के लिए ${outputLabel} तैयार करें. Data invent न करें और missing चीज़ mark करें.`,
    pa: `ਇਹ notes ਨਾਲ ${caseLabel} ਲਈ ${outputLabel} ਤਿਆਰ ਕਰੋ. Data invent ਨਾ ਕਰੋ ਅਤੇ missing ਚੀਜ਼ mark ਕਰੋ.`
  };
  return messages[currentLanguage] || messages.es;
}

function getSelectedExampleLoadedText(selectedCase, selectedOutput) {
  const languageData = translations[currentLanguage];
  const caseLabel = languageData.cases[selectedCase];
  const outputLabel = languageData.outputs[selectedOutput];
  const messages = {
    es: `Ejemplo cargado para ${caseLabel} -> ${outputLabel}. Ahora baja y presiona "Generar prompt".`,
    en: `Example loaded for ${caseLabel} -> ${outputLabel}. Now go down and press "Generate prompt".`,
    hi: `${caseLabel} -> ${outputLabel} के लिए example load हो गया. अब नीचे जाकर "Prompt generate करें" दबाएं.`,
    pa: `${caseLabel} -> ${outputLabel} ਲਈ example load ਹੋ ਗਿਆ. ਹੁਣ ਹੇਠਾਂ ਜਾ ਕੇ "Prompt generate ਕਰੋ" ਦਬਾਓ.`
  };
  return messages[currentLanguage] || messages.es;
}

function updateSelectedExamplePreview() {
  if (!selectedExamplePreview || !caseType || !outputFormat) return;
  selectedExamplePreview.textContent = getSelectedExamplePreviewText();
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
    promptOutput.textContent = prompt;
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
  promptOutput.textContent = languageData.defaults.emptyPrompt;
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
    promptOutput.textContent = prompt;
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
    link.download = "nha-prompt.txt";
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
    promptOutput.textContent = languageData.defaults.emptyPrompt;
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
