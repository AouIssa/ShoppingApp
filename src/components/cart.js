import React from "react";
import { View, FlatList, Text, Button, StyleSheet } from "react-native";

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
      <Button title="Remove" onPress={() => onRemoveFromCart(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
