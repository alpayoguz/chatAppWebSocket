import { createContext, useContext, useState } from "react";

const ChatContext = createContext();
export function useChat(){
    return useContext(ChatContext)
}

import React from "react";

const ChatProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const value = {
      message,
      setMessage,
      messages,
      setMessages
  }

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export default ChatProvider;
