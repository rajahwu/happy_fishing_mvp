import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { UserChatProfile, MessageViewController } from "../../components";

export default function MessagesPage() {
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
          <div className="contacts" style={{ border: "3px solid blue" }}>
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
          <MessageViewController users={users} boards={boards} />
        </div>
      </div>
    </>
  );
}
