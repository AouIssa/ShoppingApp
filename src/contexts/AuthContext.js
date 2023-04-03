import { createContext } from "react";

const AuthContext = createContext({
  onLogin: () => {},
  onRegister: () => {},
});

export default AuthContext;
