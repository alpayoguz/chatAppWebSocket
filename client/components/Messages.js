import React from "react";
import ScrolBottom from "react-scroll-to-bottom";
import { useChat } from "../contexts/ChatContext";
import Message from "./Message";

const Messages = () => {
  const { messages } = useChat();
  return (
    <>
      <ScrolBottom className="messages">
        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </ScrolBottom>
    </>
  );
};

export default Messages;
