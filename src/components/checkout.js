import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CartContext from "../contexts/CartContext";

const Checkout = ({ navigation }) => {
  const { cartItems } = useContext(CartContext);

  const handleCheckout = () => {
    console.log("Checkout complete");
    navigation.navigate("ProductsList");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Button title="Complete Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
});

export default Checkout;
