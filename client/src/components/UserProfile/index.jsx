import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const navigate = useNavigate()
  const { isLoading, error, data } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetch("/api/test").then((res) => res.json()),
  });

  if (isLoading) return "Loading ...";
  if (error) return "An error has occurred: " + error.message;

  const user = data[0];
  console.log(user);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50px",
            backgroundColor: "pink",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          U
        </div>
        <p
          style={{
            color: "white",
            fontSize: "1.2rem",
            margin: 0,
          }}
        >
          {user.id}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "1.2rem",
            margin: 0,
          }}
        >
          {user.username}
        </p>
        <p
          style={{
            color: "white",
            fontSize: "1.2rem",
            margin: 0,
          }}
        >
          {user.email}
        </p>
      </div>
      <div
        style={{
          backgroundColor: "green",
          color: "white",
          fontSize: "1.3rem",
          display: "flex",
          flexDirection: "column",
          borderRadius: "6px",
          alignItems: "center",
          marginLeft: "16px"
        }}
      >
        <p>Messages</p>

        <button style={{
          height: 50,
          width: 50,
          fontSize: "1.5rem",
          borderRadius: "50%",
          color: "white",
          backgroundColor: "blue"
        
        }} 
        onClick={() => navigate("/messages")}
        >GO</button>
      </div>
    </div>
  );
}
