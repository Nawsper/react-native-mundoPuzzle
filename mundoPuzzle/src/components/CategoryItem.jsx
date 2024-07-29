import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";

const CategoryItem = ({ category, selectCategory = () => {} }) => {
  return (
    <Card style={styles.cardContainer}>
      <Pressable onPress={() => selectCategory(category)}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 20,
    color: colors.clrLight,
  },
});
