import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";
import { images } from "../data/images";

const ProductItem = ({ product, navigation }) => {
  const imageSource =
    images[product.images.split("/").pop().split(".").shift()];

  return (
    <Card style={styles.additionalStylesCard}>
      <View>
        <Image resizeMode="cover" style={styles.image} source={imageSource} />
      </View>
      <Pressable
        style={styles.pressable}
        onPress={() =>
          navigation.navigate("ItemDetail", { productoId: product.id })
        }
      >
        <View style={styles.viewText}>
          <Text style={styles.textCategory}>{product.title}</Text>
          <Text style={styles.textPrice}>$ {product.precio}</Text>
        </View>
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: 100,
    borderRadius: 8,
  },
  additionalStylesCard: {
    padding: 5,
    flexDirection: "row",
    height: 120,
    width: 300,
    justifyContent: "space-between",
    margin: 5,
  },
  viewText: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  textCategory: {
    flexShrink: 1,
    color: colors.clrLight,
    fontFamily: "Indie Flower",
    fontSize: 16,
    paddingBottom: 5,
  },
  textPrice: {
    color: colors.clrPastel1,
    fontFamily: "Indie Flower",
    fontSize: 16,
  },
});
