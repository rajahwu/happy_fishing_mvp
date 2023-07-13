import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useState } from "react";

const Boards = ({ boards }) => (
  <>
    <h1>Boards</h1>
    {boards.map((board, i) => (
      <div key={i}>
        <h1>{board.title}</h1>
      </div>
    ))}
  </>
);

const Chat = ({ users }) => (
  <>
    <h1>Chat</h1>
    {users.map((user, i) => (
      <div key={i}>{user.username}</div>
    ))}
  </>
);

const UserChatProfile = ({ username }) => (
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
      <textarea placeholder={`write message for ${username}`} />
      <button>Send</button>
    </div>
  </li>
);

const ShowActiveConvo = ({ isActive, users, boards }) => {
  if (isActive === "boards") return <Boards boards={boards} />;
  if (isActive === "chat") return <Chat users={users} />;
  //  if(isActive === users) return <UserChatProfile  username={username}/>S
};

export default function MessagesPage() {
  const [isActive, setIsActive] = useState("boards");
  const { isLoading, error, data } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetch("/api/users").then((res) => res.json()),
    refetchOnWindowFocus: false,
    staleTime: 300000,
  });

  if (isLoading) return "Loading ...";
  if (error) return "An error has occurred: " + error.message;

  const users = data;
  const boards = [
    { title: "general" },
    { title: "building" },
    { title: "fishermen" },
  ];
  console.log(users);
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Messages</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "25vw",
            height: "75vh",
            backgroundColor: "pink",
          }}
          className="left"
        >
          <div className="contacts"></div>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            {users &&
              users.map((user, i) => (
                <UserChatProfile key={i} username={user.username} />
              ))}
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            width: "33vw",
            height: "75vh",
          }}
          className="right"
        >
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
              <ShowActiveConvo
                isActive={isActive}
                users={users}
                boards={boards}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
