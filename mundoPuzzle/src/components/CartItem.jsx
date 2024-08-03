import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const CartItem = ({ cartItem }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {cartItem.title} {cartItem.quantity}
        </Text>
        <Text>{cartItem.piezas}</Text>
        <Text>{cartItem.price}</Text>
      </View>
      <FontAwesome5 name="trash-alt" size={24} color="red" />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
