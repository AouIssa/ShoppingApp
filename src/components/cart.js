import React, { useContext } from "react";
import { View, FlatList, Text, Button, StyleSheet } from "react-native";
import CartContext from "../contexts/CartContext";

const Cart = ({ navigation }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Button title="Remove" onPress={() => removeFromCart(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Button
        title="Checkout"
        onPress={() => navigation.navigate("Checkout")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
});

export default Cart;
