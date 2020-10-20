import { useState, useEffect, useCallback } from 'react';
import LocalSocket from '../services/LocalSocket';

const socket = new LocalSocket();

export default function useHookWithLocalSocket(useHook, state, channel) {
  const hookState = useHook(state);
  const [messages, setMessages] = useState([]);

  channel = `local/${channel}`;

  useEffect(() => {
    socket.initialize(channel);
    socket.addListener(channel, (messages) => setMessages(messages));
    // return () => socket.destroy(channel);
  }, [channel]);

  const sendMessage = useCallback(
    (nickname, message) => socket.sendMessage(channel, nickname, message),
    [channel]
  );

  return {
    hookState,
    messages,
    sendMessage,
  };
}
