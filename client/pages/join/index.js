import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useJoin } from "../../contexts/JoinContext";

const Join = () => {
  const { name, setName, room, setRoom } = useJoin();
  const router = useRouter();

  function handleJoin() {
    if (name && room) {
      router.push(`/chat?name=${name}&room=${room}`);
    } else {
      alert("Please fill both areas");
    }
  }

  return (
    <>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <hr></hr>
          <input
            name="name"
            placeholder="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <br></br>
          <input
            name="room"
            placeholder="room"
            value={room}
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <br></br>

          <button onClick={handleJoin} className="join__btn">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Join;

// bg color #19181C
