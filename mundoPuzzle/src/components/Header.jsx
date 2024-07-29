import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>Mundo Puzzle</Text>
      <Text>Inicio</Text>
      <Text>Nosotros</Text>
      <Text>Productos</Text>
      <Text>Contacto</Text>
      <Text>Carrito</Text>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.clrPastel1,
    height: 150,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: "IndieFlower",
  },
});
