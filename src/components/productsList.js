import React, { useState, useContext } from "react";
import CartContext from "../contexts/CartContext";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const createProducts = () => {
  return Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: (index + 1) * 10,
    imageUrl: `https://picsum.photos/seed/${index + 1}/200`,
  }));
};

const ProductsList = ({ navigation }) => {
  const [products, setProducts] = useState(createProducts());

  const { addToCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        addToCart(item);
        navigation.navigate("Cart");
      }}
    >
      <View style={styles.itemContent}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 16,
    color: "#333",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ProductsList;
