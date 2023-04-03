import React, { useState } from "react";
import MainNavigator from "./src/navigation/MainNavigator";
import AuthContext from "./src/contexts/AuthContext";
import { CartProvider } from "./src/contexts/CartContext";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Roro",
      password: "pass",
      email: "user1@example.com",
    },
  ]);

  const registerUser = (username, password, email) => {
    const newUser = {
      id: users.length + 1,
      username,
      password,
      email,
    };
    setUsers([...users, newUser]);
  };

  const loginUser = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      console.log("User logged in:", user);
      return true;
    } else {
      console.log("Invalid username or password");
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ onLogin: loginUser, onRegister: registerUser }}
    >
      <CartProvider>
        <MainNavigator />
      </CartProvider>
    </AuthContext.Provider>
  );
};

export default App;
