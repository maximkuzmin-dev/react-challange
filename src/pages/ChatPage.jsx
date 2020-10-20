import React, { useState } from 'react';
import useHookWithLocalSocket from '../hooks/useHookWithLocalSocket';
import ChatForm from '../components/ChatForm';
import ChatNav from '../components/ChatNav';

function ChatPage({ nickname, channel }) {
  const { messages, sendMessage } = useHookWithLocalSocket(
    useState,
    false,
    channel
  );

  const handleSubmit = (message) => sendMessage(nickname, message);

  return (
    <React.Fragment>
      <div className="relative flex flex-col justify-end max-h-screen h-full mx-2 my-1 rounded bg-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full px-5 py-3 font-bold bg-gray-300 capitalize">
          {nickname} in {channel}
        </div>
        <ul className="max-h-full px-5 py-3 overflow-y-auto">
          {messages.map(({ nickname, message }, index) => (
            <li key={index}>
              <span className="font-bold">{nickname}: </span>
              <span>{message}</span>
            </li>
          ))}
        </ul>
        <ChatForm {...{ handleSubmit }} />
      </div>
      <ChatNav {...{ nickname }} />
    </React.Fragment>
  );
}

export default ChatPage;
