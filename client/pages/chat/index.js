import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useJoin } from "../../contexts/JoinContext";

let socket;

const Chat = () => {
  const { name, setName, room, setRoom } = useJoin();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
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
          <input
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyPress={(e) => (e.key == "Enter" ? sendMessage(e) : null)}
          />
        </div>
      </div>
    </>
  );
};

export default Chat;
