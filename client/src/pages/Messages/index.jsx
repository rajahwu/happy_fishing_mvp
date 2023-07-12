import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useState } from "react";

const Boards = () => <h1>Boards</h1>;

const Chat = () => <h1>Chat</h1>;

const UserChatProfile = ({ username }) => (
  <>
    <h1>Message to {username}</h1>
    <textarea />
    <button>Send</button>
  </>
);

const ShowActiveConvo = ({isActive, username}) => {
   if(isActive === "boards") return <Boards />
   if(isActive === "chat") return <Chat />
   if(isActive === username) return <UserChatProfile  username={username}/>

}

export default function MessagesPage() {
  const [isActive, setIsActive] = useState("boards");
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetch("/api/test").then((res) => res.json()),
  });

  if (isLoading) return "Loading ...";
  if (error) return "An error has occurred: " + error.message;

  const users = data;
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
            {users.map((user, i) => (
              <li
                style={{
                  padding: "15px",
                  margin: 0,
                  border: "3px solid black",
                }}
                key={i}
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
                  {user.username[0].toUpperCase()}
                </div>
                <span
                  style={{
                    display: "inline-block",
                    marginLeft: "25px",
                  }}
                >
                  {user.username}
                </span>
              </li>
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
              {isActive === "boards" ? <Boards /> : <Chat />}
              Convs
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
