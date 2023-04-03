import React, { useState, useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CartContext from "../contexts/CartContext";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";

const Checkout = ({ navigation }) => {
  const { cartItems } = useContext(CartContext);
  const [pdfUri, setPdfUri] = useState(null);

  const handleCheckout = () => {
    console.log("Checkout complete");
    navigation.navigate("ProductsList");
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const createReceipt = async () => {
    const receiptItems = cartItems
      .map(
        (item) => `
      <tr>
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
      </tr>
    `
      )
      .join("");

    const html = `
      <h1>Receipt</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          ${receiptItems}
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>$${getTotalAmount().toFixed(2)}</strong></td>
          </tr>
        </tbody>
      </table>
    `;

    const { uri } = await Print.printToFileAsync({ html });
    setPdfUri(uri);
    console.log("Receipt saved as PDF:", uri);
    alert("Receipt saved as PDF");
  };

  const shareReceipt = async () => {
    if (pdfUri) {
      const isAvailable = await Sharing.isAvailableAsync();
      if (isAvailable) {
        await Sharing.shareAsync(pdfUri);
      } else {
        alert("Sharing is not available on this device");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.totalAmount}>
        Total: ${getTotalAmount().toFixed(2)}
      </Text>
      <Button title="Complete Checkout" onPress={handleCheckout} />
      <Button title="Download Receipt" onPress={createReceipt} />
      {pdfUri && <Button title="Share Receipt" onPress={shareReceipt} />}
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
  totalAmount: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
});

export default Checkout;
