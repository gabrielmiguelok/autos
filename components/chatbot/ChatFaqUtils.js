/***************************************************************
 * File: /components/chatbot/ChatFaqUtils.js
 * Descripción:
 *  - FAQ y lógica para generar estados FAQ (FAQ_Q0, FAQ_Q1...).
 * Principios aplicados:
 *  - SRP: Solo define FAQs y exporta un generador de estados.
 *  - DIP: Contenido textual aislado de la lógica del chatbot.
 ***************************************************************/

export const translations = {
  es: {
    faqSection: {
      mainTitle: 'Preguntas Frecuentes',
      mainSubtitle:
        'Aquí tienes algunas dudas comunes sobre nuestros autos, planes de financiamiento y servicio postventa.',
      faqs: [
        {
          question: '¿Ofrecen financiamiento o leasing para empresas?',
          answer:
            'Sí, contamos con planes corporativos de leasing y financiamiento a medida. Contáctanos para diseñar la mejor solución para tu empresa.',
        },
        {
          question: '¿Cuáles son las garantías disponibles?',
          answer:
            'Dependiendo de la marca y modelo, ofrecemos garantía de 3 a 5 años. También tenemos extensiones de garantía opcionales.',
        },
        {
          question: '¿Hacen servicio postventa y mantenimientos?',
          answer:
            'Sí, tenemos talleres especializados y planes de servicio para que tu vehículo esté siempre en óptimas condiciones.',
        },
        {
          question: '¿Puedo agendar un test drive online?',
          answer:
            '¡Por supuesto! Solo contáctanos o completa nuestro formulario para coordinar fecha y hora de tu test drive.',
        },
        {
          question: '¿Qué modelos de autos ofrecen?',
          answer:
            'Trabajamos con sedanes, SUVs, camionetas y autos deportivos de diversas marcas reconocidas. En nuestro catálogo online podrás ver el stock actual.',
        },
      ],
    },
  },
};

/**
 * Genera los estados FAQ_Q0, FAQ_Q1, ... según los items en translations.
 */
export function generateFAQStates() {
  const { faqs } = translations.es.faqSection;
  const states = {};

  faqs.forEach((faq, i) => {
    const stateKey = `FAQ_Q${i}`;
    states[stateKey] = {
      assistantMessages: [
        `**${faq.question}**\n\n${faq.answer}`,
      ],
      options: [
        'Volver al listado FAQ',
        'Salir',
      ],
    };
  });

  return states;
}
