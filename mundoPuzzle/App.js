import { StyleSheet, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './src/screens/Home';
import Header from './src/components/Header'
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font'
import ItemListCategory from "./src/screens/ItemListCategory"
import ItemDetail from "./src/screens/ItemDetail"

const Stack = createNativeStackNavigator()

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'IndieFlower': require('./assets/fonts/Indie_Flower/IndieFlower-Regular.ttf'),
    'Itim': require('./assets/fonts/Itim/Itim-Regular.ttf')
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={({ route }) => ({ header: () => { return (<Header title={route.name === 'Home' ? "Categories" : route.name === "ItemListCategory" ? route.params.category : "Detail"} />) } })}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
          <Stack.Screen name="ItemDetail" component={ItemDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clrLight,
    marginTop: 30,
    paddingTop: 10
  },
});