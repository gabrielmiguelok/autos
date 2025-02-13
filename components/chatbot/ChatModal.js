/***************************************************************
 * File: /components/chatbot/ChatModal.js
 * Descripción:
 *  - Estructura principal del chat (header, lista de mensajes y opciones).
 *  - Usa ChatFlowManager para cambiar de estado.
 *  - No hay "typing" ni "isLoading": las respuestas aparecen inmediatas.
 * Principios aplicados:
 *  - SRP: Maneja la interfaz del chat.
 *  - DRY: Reutiliza ChatMessage y ChatOptions para mostrar.
 ***************************************************************/

import React, { useState, useEffect, useRef } from 'react';
import {
  IconButton,
  TextField,
  Box,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Image from 'next/image';

import { ChatSteps } from './ChatSteps';
import { ChatFlowManager } from './ChatFlowManager';
import ChatMessage from './ChatMessage';
import ChatOptions from './ChatOptions';

export default function ChatModal({ onClose }) {
  const [conversation, setConversation] = useState([]);
  const [currentState, setCurrentState] = useState('MAIN');
  const [options, setOptions] = useState([]);
  const [userInput, setUserInput] = useState('');

  const messagesEndRef = useRef(null);

  // Al montar => cargamos MAIN
  useEffect(() => {
    const mainStep = ChatSteps.MAIN;
    const initial = mainStep.assistantMessages.map((m) => ({
      role: 'assistant',
      content: m,
    }));
    setConversation(initial);
    setOptions(mainStep.options);
  }, []);

  // Auto-scroll al final
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [conversation, options]);

  const handleSendMessage = () => {
    const trimmed = userInput.trim();
    if (!trimmed) return;

    // Agregamos mensaje user
    setConversation((prev) => [...prev, { role: 'user', content: trimmed }]);
    setUserInput('');

    // ChatFlow
    const { newState, assistantMessages, newOptions } = ChatFlowManager(currentState, trimmed);

    setCurrentState(newState);
    setOptions(newOptions || []);

    // Agregamos los mensajes assistant
    const newAssistantMsgs = assistantMessages.map((m) => ({
      role: 'assistant',
      content: m,
    }));
    setConversation((prev) => [...prev, ...newAssistantMsgs]);
  };

  const handleOptionSelect = (option) => {
    // No imprimimos "user" en el chat (para no saturar)
    const { newState, assistantMessages, newOptions } = ChatFlowManager(currentState, option);

    setCurrentState(newState);
    setOptions(newOptions || []);

    const newAssistantMsgs = assistantMessages.map((m) => ({
      role: 'assistant',
      content: m,
    }));
    setConversation((prev) => [...prev, ...newAssistantMsgs]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const shouldShowTextField = () => {
    const stepData = ChatSteps[currentState];
    if (!stepData || !stepData.options) return true;
    if (stepData.options.length > 0) return false;
    return true;
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        width: { xs: '100%', sm: 360 },
        height: { xs: '90vh', sm: '70vh' },
        maxHeight: '90vh',
        backgroundColor: 'var(--color-bg-light)',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <AppBar
        position="static"
        sx={{
          borderTopLeftRadius: '12px',
          borderTopRightRadius: '12px',
          backgroundColor: 'var(--color-primary)',
        }}
      >
        <Toolbar variant="dense" sx={{ minHeight: '42px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
            <Box sx={{ width: 28, height: 28, borderRadius: '50%', overflow: 'hidden' }}>
              <Image src="/logo.png" alt="AutoCorp Logo" width={28} height={28} />
            </Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
              AutoCorp Chat
            </Typography>
          </Box>
          <IconButton onClick={onClose} sx={{ color: '#fff' }}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          p: 1,
        }}
      >
        {conversation.map((msg, idx) => (
          <ChatMessage key={idx} role={msg.role} content={msg.content} />
        ))}

        {options.length > 0 && (
          <ChatOptions
            options={options}
            onSelect={handleOptionSelect}
          />
        )}

        <div ref={messagesEndRef} style={{ float: 'left', clear: 'both' }} />
      </Box>

      {currentState !== 'FINAL' && shouldShowTextField() && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderTop: '1px solid #444',
            p: 1,
            backgroundColor: 'var(--color-bg-light)',
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Escribe tu mensaje..."
            size="small"
            fullWidth
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            sx={{
              fontSize: '0.85rem',
              input: {
                color: 'var(--color-text-primary)',
                backgroundColor: '#2a2a2a',
              },
              label: { color: 'var(--color-text-secondary)' },
            }}
          />
          <IconButton
            onClick={handleSendMessage}
            sx={{
              ml: 1,
              backgroundColor: 'var(--color-primary)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'var(--color-primary-dark)',
              },
            }}
          >
            <SendRoundedIcon />
          </IconButton>
        </Box>
      )}

      {currentState === 'FINAL' && (
        <Box sx={{ textAlign: 'center', p: 1 }}>
          <IconButton
            onClick={() => handleOptionSelect('Empezar de nuevo')}
            sx={{
              backgroundColor: 'var(--color-primary)',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'var(--color-primary-dark)',
              },
            }}
          >
            <SendRoundedIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
