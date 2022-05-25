import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useJoin } from "../../contexts/JoinContext";
import InfoBar from "../../components/InfoBar";
import { useChat } from "../../contexts/ChatContext";
import InputField from "../../components/InputField";
import Messages from "../../components/Messages";

let socket;

const Chat = () => {
  const { name, setName, room, setRoom } = useJoin();
  const {message, setMessage, messages, setMessages} = useChat();
  const ENDPOINT = "localhost:5000";
  useEffect(() => {
    socket = io(ENDPOINT, {
      transports: ["websocket", "polling", "flashsocket"],
    });
    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  function sendMessage(event){
    event.preventDefault();
    if(message){
      socket.emit("sendMessage",  message, () => setMessage(""))
    }
  }

  console.log(message, messages)

  return (
    <>
      <div className="outerContainer">
        <div className="container">
          <InfoBar room={room}/>
          <Messages/>
          <InputField send={sendMessage}/>
        
        </div>
      </div>
    </>
  );
};

export default Chat;
