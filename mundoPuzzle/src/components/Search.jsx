import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import { colors } from "../global/colors";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyWord, setKeyWord] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar..."
          value={keyWord}
          onChangeText={setKeyWord}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <Pressable onPress={() => onSearch(keyWord)}>
        <FontAwesome5 name="search" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => setKeyWord("")}>
        <Entypo name="erase" size={24} color="black" />
      </Pressable>
      <Pressable onPress={goBack}>
        <AntDesign name="back" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.clrPastel4,
    color: colors.clrPastel5,
    borderRadius: 10,
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 4,
    width: "65%",
  },
  errorText: {
    color: colors.clrDark,
    fontSize: 16,
    fontFamily: "Itim",
  },
});
