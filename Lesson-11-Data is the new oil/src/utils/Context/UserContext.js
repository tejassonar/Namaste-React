import { createContext } from "react";

const UserContext = createContext({
  userName: "Default User",
  isLoggedIn: false,
});

export default UserContext;
