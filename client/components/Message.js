import React from 'react'
import { useChat } from "../contexts/ChatContext";
import { useJoin } from "../contexts/JoinContext";



const Message = ({message}) => {
    // const {message} = useChat();
    const {name} = useJoin();
    let isSentByCurrentUser = false;

    const trimmedName = name.trim().toLowerCase();
  
    if(message.user === trimmedName) {
      isSentByCurrentUser = true;
    }
    console.log(message)
  
    return (
        <>
         { isSentByCurrentUser
        ? 
          <div className="messageContainer justifyEnd">
            <p className="sentText pr-10">{trimmedName}</p>
            <div className="messageBox backgroundBlue">
              <p className="messageText colorWhite">{message.text}</p>
            </div>
          </div>
          
          : (
            <div className="messageContainer justifyStart">
              <div className="messageBox backgroundLight">
                <p className="messageText colorDark">{message.text}</p>
              </div>
              <p className="sentText pl-10 ">{message.user}</p>
            </div>
          )
          };

        </>
    )
//   return (
//     <div className="textArea">
//             <span>{message.user} :</span>
//             <span>{message.text}</span>
//           </div>
//   )
}

export default Message