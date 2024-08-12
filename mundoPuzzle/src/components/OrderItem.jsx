import { StyleSheet, Text, View } from "react-native";
import { colors } from "../global/colors";

const OrderItem = ({ order }) => {
  const total = order.items.reduce(
    (acc, currentItem) => (acc += currentItem.precio * currentItem.quantity),
    0
  );

  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {new Date(order.createdAt).toLocaleString()}
        </Text>
        <Text style={styles.text2}>${total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.clrPastel3,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontFamily: "Itim",
    fontSize: 17,
    color: "black",
  },
  text2: {
    fontFamily: "Itim",
    fontSize: 19,
    color: "gray",
  },
});
