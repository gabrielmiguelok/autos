/*****************************************************************************************
 * TypingText.js
 * Recibe una prop 'text' y lo "tipea" caracter por caracter con un retardo configurable.
 *****************************************************************************************/
import React, { useEffect, useState } from 'react';

export default function TypingText({ text, typingSpeed = 20, onDone }) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(timer);
        if (onDone) onDone();
      }
    }, typingSpeed);
    return () => clearInterval(timer);
  }, [text, typingSpeed, onDone]);

  return <>{displayedText}</>;
}
