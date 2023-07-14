const Chat = ({ users }) => (
    <>
      <h1>Chat</h1>
      {users.map((user, i) => (
        <div key={i}>{user.username}</div>
      ))}
    </>
  );

export default Chat