import { StyleSheet, View } from "react-native";
import React from "react";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <View style={{ width: "100%" }}>
      <Categories />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
