import { FlatList, StyleSheet, View } from "react-native";

import categories from "../data/categories.json";
import CategoryItem from "./CategoryItem";

const Categories = ({ setCategorySelected }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        keyExtractor={(category) => category}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem category={item} selectCategory={setCategorySelected} />
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
