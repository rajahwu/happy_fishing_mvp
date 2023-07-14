import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { Boards, Chat, UserChatProfile } from "../../components/message";

const ShowActiveConvo = ({ isActive, users, boards }) => {
  if (isActive === "boards") return <Boards boards={boards} />;
  if (isActive === "chat") return <Chat users={users} />;
  //  if(isActive === users) return <UserChatProfile  username={username}/>
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
