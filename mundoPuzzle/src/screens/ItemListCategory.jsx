import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";
import products from "../data/products.json";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";

const ItemListCategory = ({
  categorySelected = "",
  setCategorySelected = () => {},
  setItemIdSelected = () => {},
}) => {
  const [keyWord, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const regexDigits = /\d/;
    const hasDigits = regexDigits.test(keyWord);

    if (hasDigits) {
      setError("Caracteres invalidos");
      return;
    }

    const regexThreeOrMoreCharacters = /[a-zA-Z]{3,}/;
    const hasThreeOrMoreChar = regexThreeOrMoreCharacters.test(keyWord);

    if (!hasThreeOrMoreChar && keyWord.length) {
      setError("Caracteres insuficientes");
      return;
    }

    console.log(error);

    const productsPreFiltered = products.filter(
      (product) => product.category === categorySelected
    );
    const productsFilter = productsPreFiltered.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
    );
    console.log(productsFilter);
    setProductsFiltered(productsFilter);
  }, [keyWord, categorySelected]);

  return (
    <View style={styles.flatListContainer}>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => setCategorySelected("")}
      />
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem product={item} setItemIdSelected={setItemIdSelected} />
        )}
        keyExtractor={(producto) => producto.id}
      />
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.clrLight,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
