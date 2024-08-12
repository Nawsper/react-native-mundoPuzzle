import { FlatList, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { colors } from "../global/colors";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem";
import { useGetProductsByCategoryQuery } from "../services/shopServices";

const ItemListCategory = ({ navigation, route }) => {
  const [keyWord, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  const { category: categorySelected } = route.params;

  const {
    data: productsFetched,
    error: errorFetched,
    isLoading,
  } = useGetProductsByCategoryQuery(categorySelected);

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

    if (!isLoading) {
      const productsFilter = productsFetched.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      );
      setProductsFiltered(productsFilter);
      setError("");
    }
  }, [keyWord, categorySelected, productsFetched, isLoading]);

  return (
    <View style={styles.flatListContainer}>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
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
