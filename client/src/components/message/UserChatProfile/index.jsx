import { useState } from "react";

const sendMessage = (username, message) => {
  return {
    username,
    message,
  };
};

const UserChatProfile = ({ username }) => {
  const [message, setMessage] = useState("");

  return (
    <li
      style={{
        padding: "15px",
        margin: 0,
        border: "3px solid black",
      }}
    >
      <div
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          backgroundColor: "black",
          display: "inline-block",
          color: "white",
          textAlign: "center",
        }}
      >
        {username[0].toUpperCase()}
      </div>
      <span
        style={{
          display: "inline-block",
          marginLeft: "25px",
        }}
      >
        {username}
      </span>
      <div
        style={{
          display: "flex",
          marginTop: "15px",
        }}
      >
        <textarea
          placeholder={`write message for ${username}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => console.log(sendMessage(username, message))}>
          Send
        </button>
      </div>
    </li>
  );
};
export default UserChatProfile;
