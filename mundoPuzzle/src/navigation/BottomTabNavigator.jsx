import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import CartStackNavigator from "./CartStackNavigator";
import OrderStackNavigator from "./OrderStackNavigator";
import Header from "../components/Header";
import { colors } from "../global/colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header tittle={route.name} />;
        },
        // tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Galeria"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome6
                  name="puzzle-piece"
                  size={24}
                  color={focused ? colors.clrPastel1 : colors.clrLight}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="shopping-cart"
                  size={24}
                  color={focused ? colors.clrPastel1 : colors.clrLight}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="receipt"
                  size={24}
                  color={focused ? colors.clrPastel1 : colors.clrLight}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.clrDark,
  },
});
