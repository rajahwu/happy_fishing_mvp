import { useState } from "react";
import { HomePage, Login } from "../../pages";

export default function Bouncer() {
  const [currentUser, setCurrentUser] = useState(false);
  return currentUser ? (
    <HomePage />
  ) : (
    <Login handleClick={() => setCurrentUser(true)} />
  );
}
