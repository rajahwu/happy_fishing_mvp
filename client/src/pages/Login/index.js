export default function Login({handleClick}) {
  return (
    <form>
      <label htmlFor="usermane">Username</label>
      <input type="text" name="username" placeholder="username" />
      <label htmlFor="passwor">Password</label>
      <input type="password" name="password" placeholder="password" />
      <button onClick={handleClick}>Login</button>
    </form>
  );
}
