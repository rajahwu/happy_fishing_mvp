import { useState } from "react";
import Boards from "../Boards";
import Chat from "../Chat";

const ShowActiveConvo = ({ isActive, users, boards }) => {
  if (isActive === "boards") return <Boards boards={boards} />;
  if (isActive === "chat") return <Chat users={users} />;
};

export default function MessageViewController({ users, boards }) {
  const [isActive, setIsActive] = useState("boards");

  return (
    <div className="chatboards">
      <span>Messages</span>
      <div
        style={{
          backgroundColor: "lightblue",
        }}
        className="buttons"
      >
        <button
          style={{
            margin: "25px",
            padding: "5px",
          }}
          onClick={() => setIsActive("boards")}
        >
          Boards
        </button>
        <button
          style={{
            margin: "25px",
            padding: "5px",
          }}
          onClick={() => setIsActive("chat")}
        >
          Chat
        </button>
      </div>
      <div
        style={{
          height: "60vh",
          backgroundColor: "yellow",
        }}
      >
        <ShowActiveConvo isActive={isActive} users={users} boards={boards} />
      </div>
    </div>
  );
}
