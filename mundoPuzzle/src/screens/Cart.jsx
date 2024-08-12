import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import CartItem from "../components/CartItem.jsx";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopServices";

const Cart = () => {
  const { items: CartData, total } = useSelector((state) => state.cart.value);

  const [triggerPostOrder, result] = usePostOrderMutation();

  const onConfirmOrder = () => {
    triggerPostOrder({ items: CartData, user: "Nawsper", total });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
        keyExtractor={(producto) => producto.id}
      />

      <View style={styles.totalContainer}>
        <Pressable onPress={onConfirmOrder}>
          <Text>Confirm Order</Text>
        </Pressable>
        <Text>Total: $ {total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 100,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
