import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/login";
import Register from "../components/register";
import ProductsList from "../components/productsList";
import Cart from "../components/cart";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Register" }}
        />
        <Stack.Screen
          name="ProductsList"
          component={ProductsList}
          options={{ title: "Products List" }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: "Cart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;