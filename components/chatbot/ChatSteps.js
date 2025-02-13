/***************************************************************
 * File: /components/chatbot/ChatSteps.js
 * Descripción:
 *  - Define TODOS los textos y opciones de cada estado.
 *  - Integra la lógica de "video sedán", "video SUV", etc.
 *  - Ajustado a la temática concesionaria AutoCorp.
 * Principios aplicados:
 *  - SRP: Solo almacena la configuración de cada "paso" (estado).
 *  - OCP: Podemos extender con más modelos de autos.
 ***************************************************************/

import { generateFAQStates, translations } from './ChatFaqUtils';

const dynamicFaqStates = generateFAQStates();

export const ChatSteps = {
  // ================ MENÚ PRINCIPAL =================
  MAIN: {
    assistantMessages: [
      '### ¡Bienvenido a AutoCorp! 🚗',
      'Somos tu aliado en el mundo automotriz. ¿Qué deseas hacer hoy?',
    ],
    options: [
      'Explorar Autos (videos)',
      'Ver planes de financiamiento',
      'Preguntas Frecuentes (FAQ)',
      'Agendar cita con asesor',
    ],
  },

  MAIN_REVISITED: {
    assistantMessages: [
      '¿En qué más puedo ayudarte? Estoy a tu disposición.',
    ],
    options: [
      'Explorar Autos (videos)',
      'Ver planes de financiamiento',
      'Preguntas Frecuentes (FAQ)',
      'Agendar cita con asesor',
    ],
  },

  // ================ EXPLORAR AUTOS (VIDEOS) =====================
  EXPLORAR_AUTOS: {
    assistantMessages: [
      '¡Genial! Estos son algunos de nuestros tipos de vehículos:\n\n' +
      '- **Sedán**: Comodidad y estilo para el día a día.\n' +
      '- **SUV**: Espacio y versatilidad para la familia.\n' +
      '- **Deportivo**: Potencia y diseño audaz.\n\n' +
      '¿Cuál te gustaría ver en video?',
    ],
    options: [
      'Ver video Sedán',
      'Ver video SUV',
      'Ver video Deportivo',
      'Salir',
    ],
  },

  VIDEO_SEDAN: {
    assistantMessages: [
      '***\n<video src="./public/videos/sedan.mp4" style="width:100%; max-width:320px; height:auto; border-radius:8px;" controls>\n  Tu navegador no soporta video embebido.\n</video>\n***\n\n' +
      'Disfruta de un sedán con estilo y tecnología de punta. ¿Deseas **agendar un test drive** o **salir**?',
    ],
    options: [
      'Agendar test drive',
      'Salir',
    ],
  },
  VIDEO_SUV: {
    assistantMessages: [
      '***\n<video src="./public/videos/suv.mp4" style="width:100%; max-width:320px; height:auto; border-radius:8px;" controls>\n  Tu navegador no soporta video embebido.\n</video>\n***\n\n' +
      'Una SUV perfecta para viajes familiares y aventuras. ¿Deseas **agendar un test drive** o **salir**?',
    ],
    options: [
      'Agendar test drive',
      'Salir',
    ],
  },
  VIDEO_SPORT: {
    assistantMessages: [
      '***\n<video src="./public/videos/sport.mp4" style="width:100%; max-width:320px; height:auto; border-radius:8px;" controls>\n  Tu navegador no soporta video embebido.\n</video>\n***\n\n' +
      'Vibra con la potencia de un deportivo de última generación. ¿Deseas **agendar un test drive** o **salir**?',
    ],
    options: [
      'Agendar test drive',
      'Salir',
    ],
  },

  // ================ PLANES DE FINANCIAMIENTO =====================
  PLANES: {
    assistantMessages: [
      'Contamos con planes para cada necesidad:\n\n' +
      '- **Plan Básico**: Entrada reducida, pagos accesibles.\n' +
      '- **Plan Corporativo**: Ideal para empresas con varios vehículos.\n' +
      '- **Plan Flotas**: Descuentos por volumen y asistencia extendida.\n\n' +
      '¿Cuál te interesa o deseas agendar con un asesor?',
    ],
    options: [
      'Plan Básico',
      'Plan Corporativo',
      'Plan Flotas',
      'Agendar cita con asesor',
      'Salir',
    ],
  },

  PLAN_BASICO: {
    assistantMessages: [
      '***Plan Básico***\n\n' +
      '- Entrada mínima.\n' +
      '- Tasas competitivas.\n' +
      '- Opción de refinanciamiento.\n\n' +
      'Escribe "Salir" para volver al menú principal.',
    ],
    options: [],
  },
  PLAN_CORPORATIVO: {
    assistantMessages: [
      '***Plan Corporativo***\n\n' +
      '- Enfoque en empresas: Arrendamiento con opción a compra.\n' +
      '- Mantenimiento programado incluido.\n' +
      '- Asesoría personalizada.\n\n' +
      'Escribe "Salir" para regresar al menú principal.',
    ],
    options: [],
  },
  PLAN_FLOTAS: {
    assistantMessages: [
      '***Plan Flotas***\n\n' +
      '- Pensado para flotas de 5 vehículos en adelante.\n' +
      '- Descuentos por volumen.\n' +
      '- Servicio postventa extendido.\n\n' +
      'Escribe "Salir" para regresar al menú principal.',
    ],
    options: [],
  },

  // =============== FAQ LISTADO (MENÚ) ================
  FAQ_MENU: {
    assistantMessages: [
      `### ${translations.es.faqSection.mainTitle}`,
      translations.es.faqSection.mainSubtitle,
      'Selecciona la pregunta que desees resolver:',
    ],
    options: [
      ...translations.es.faqSection.faqs.map((faq) => faq.question),
      'Salir',
    ],
  },

  // =============== DINÁMICOS FAQ_Qx ==================
  ...dynamicFaqStates,

  // ================== CONTACTO / ASESOR ==============
  CONTACTO: {
    assistantMessages: [
      '¿Quieres agendar tu test drive o hablar con un asesor?\n\n' +
      'Completa nuestro formulario o escríbenos por [WhatsApp](https://api.whatsapp.com/send?phone=5492216613389) para coordinar la cita.',
    ],
    options: [
      'Agendar test drive',
      'Salir',
    ],
  },

  // =============== FORMULARIO AGENDA (3 PREGUNTAS) ==========
  FORM_0_INTRO: {
    assistantMessages: [
      '¡Excelente decisión! Para agendar tu test drive, por favor dime tu **nombre completo**.',
    ],
    options: [],
  },
  FORM_1_EMAIL: {
    assistantMessages: [
      'Perfecto. Ahora, ¿podrías indicar tu **correo electrónico** principal?',
    ],
    options: [],
  },
  FORM_2_PHONE: {
    assistantMessages: [
      '¿Cuál es tu **número de teléfono** con código de país?',
    ],
    options: [],
  },
  FORM_END: {
    assistantMessages: [
      'Listo. Hemos registrado tus datos. Pronto un asesor se pondrá en contacto para coordinar fecha y hora.\n\n' +
      '¿Deseas algo más?',
    ],
    options: [
      'Salir',
      'Finalizar',
    ],
  },

  // ===================== FINAL =======================
  FINAL: {
    assistantMessages: [
      '### ¡Gracias por elegir AutoCorp! 🙌🏻',
      'Estamos a tu servicio para cualquier otra consulta. ¡Nos vemos!',
    ],
    options: [
      'Empezar de nuevo',
    ],
  },

  // ===================== DEFAULT =====================
  DEFAULT: {
    assistantMessages: [
      'No estoy seguro de haber entendido. ¿Podrías reformular tu solicitud?',
    ],
    options: ['Salir'],
  },
};
