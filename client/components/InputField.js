import React from "react";
import { useChat } from "../contexts/ChatContext";
import useJoin from "../contexts/JoinContext";

const InputField = ({ send }) => {
  const { message, setMessage } = useChat();

  return (
    <>
      <form>
        <input
          className="input"
          placeholder="type message..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyPress={(e) => (e.key === "Enter" ? send(e) : null)}
        />
        <button
          className="sendButton"
          onClick={(e) => {
            send(e);
          }}
        >
          Send
        </button>
      </form>
    </>
  );
};

export default InputField;
