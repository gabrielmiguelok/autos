/***************************************************************
 * File: /components/chatbot/ChatFlowManager.js
 * Descripción:
 *  - Manejador de estados del chatbot.
 *  - Decide qué paso sigue según el estado actual y mensaje.
 * Principios aplicados:
 *  - SRP: Separa la máquina de estados de la UI.
 *  - OCP: Nuevos estados / transiciones se añaden sin romper lo existente.
 ***************************************************************/

import { ChatSteps } from './ChatSteps';
import { translations } from './ChatFaqUtils';

export function ChatFlowManager(currentState, userMessage) {
  const lowerMsg = userMessage.toLowerCase().trim();
  let newState = currentState;
  let stepData = ChatSteps.DEFAULT;

  const setStep = (key) => {
    newState = key;
    stepData = ChatSteps[key];
  };

  // Función para volver al menú principal
  const goToMenu = () => {
    if (currentState === 'MAIN') {
      setStep('MAIN');
    } else {
      setStep('MAIN_REVISITED');
    }
  };

  let handled = true;

  switch (currentState) {
    // -- MENÚ PRINCIPAL --
    case 'MAIN':
    case 'MAIN_REVISITED':
      if (/explorar|ver autos|autos/.test(lowerMsg)) {
        setStep('EXPLORAR_AUTOS');
      } else if (/financiamiento|planes|precios/.test(lowerMsg)) {
        setStep('PLANES');
      } else if (/faq|preguntas/.test(lowerMsg)) {
        setStep('FAQ_MENU');
      } else if (/asesor|cita|test drive/.test(lowerMsg)) {
        setStep('CONTACTO');
      } else {
        handled = false;
      }
      break;

    // -- EXPLORAR AUTOS --
    case 'EXPLORAR_AUTOS':
      if (/sedan/.test(lowerMsg)) {
        setStep('VIDEO_SEDAN');
      } else if (/suv/.test(lowerMsg)) {
        setStep('VIDEO_SUV');
      } else if (/deportivo|sport/.test(lowerMsg)) {
        setStep('VIDEO_SPORT');
      } else if (/salir/.test(lowerMsg)) {
        goToMenu();
      } else {
        handled = false;
      }
      break;

    // -- VIDEO SEDAN / SUV / SPORT
    case 'VIDEO_SEDAN':
    case 'VIDEO_SUV':
    case 'VIDEO_SPORT':
      if (/agendar|asesor|test drive/.test(lowerMsg)) {
        setStep('FORM_0_INTRO');
      } else if (/salir/.test(lowerMsg)) {
        goToMenu();
      } else {
        handled = false;
      }
      break;

    // -- PLANES FINANCIAMIENTO
    case 'PLANES':
      if (/plan basico|básico|basico/.test(lowerMsg)) {
        setStep('PLAN_BASICO');
      } else if (/plan corporativo|corporativo/.test(lowerMsg)) {
        setStep('PLAN_CORPORATIVO');
      } else if (/plan flotas|flotas/.test(lowerMsg)) {
        setStep('PLAN_FLOTAS');
      } else if (/salir/.test(lowerMsg)) {
        goToMenu();
      } else if (/asesor|agendar|test drive/.test(lowerMsg)) {
        setStep('CONTACTO');
      } else {
        handled = false;
      }
      break;

    // -- DETALLES DE PLANES
    case 'PLAN_BASICO':
    case 'PLAN_CORPORATIVO':
    case 'PLAN_FLOTAS':
      if (/salir/.test(lowerMsg)) {
        goToMenu();
      } else {
        handled = false;
      }
      break;

    // -- MENU FAQ
    case 'FAQ_MENU': {
      const allFaqs = translations.es.faqSection.faqs;
      // Intentamos encontrar la pregunta FAQ
      const matchedIndex = allFaqs.findIndex((faq) =>
        lowerMsg.includes(faq.question.toLowerCase().slice(0, 5))
      );
      if (matchedIndex !== -1) {
        setStep(`FAQ_Q${matchedIndex}`);
      } else if (/salir/.test(lowerMsg)) {
        goToMenu();
      } else {
        handled = false;
      }
      break;
    }

    default:
      // Si es un estado FAQ_QX
      if (currentState.startsWith('FAQ_Q')) {
        if (/listado faq/.test(lowerMsg)) {
          setStep('FAQ_MENU');
        } else if (/salir/.test(lowerMsg)) {
          goToMenu();
        } else {
          handled = false;
        }
        break;
      }

      // -- CONTACTO / ASESOR / AGENDAR
      if (currentState === 'CONTACTO') {
        if (/agendar|asesor|test drive/.test(lowerMsg)) {
          setStep('FORM_0_INTRO');
        } else if (/salir/.test(lowerMsg)) {
          goToMenu();
        } else {
          handled = false;
        }
        break;
      }

      // -- FORMULARIO (similar a original)
      if (currentState === 'FORM_0_INTRO') {
        setStep('FORM_1_EMAIL');
        break;
      }
      if (currentState === 'FORM_1_EMAIL') {
        setStep('FORM_2_PHONE');
        break;
      }
      if (currentState === 'FORM_2_PHONE') {
        setStep('FORM_END');
        break;
      }
      if (currentState === 'FORM_END') {
        if (/salir/.test(lowerMsg)) {
          goToMenu();
        } else if (/finalizar|terminar/.test(lowerMsg)) {
          setStep('FINAL');
        } else {
          handled = false;
        }
        break;
      }

      // -- FINAL
      if (currentState === 'FINAL') {
        if (/empezar de nuevo|reiniciar/.test(lowerMsg)) {
          setStep('MAIN');
        } else {
          handled = false;
        }
        break;
      }

      // -- DEFAULT
      handled = false;
  }

  if (handled && newState !== 'DEFAULT') {
    return {
      newState,
      assistantMessages: stepData.assistantMessages,
      newOptions: stepData.options,
    };
  }

  // Regresar estado DEFAULT si no manejamos
  return {
    newState: 'DEFAULT',
    assistantMessages: ChatSteps.DEFAULT.assistantMessages,
    newOptions: ChatSteps.DEFAULT.options,
  };
}
