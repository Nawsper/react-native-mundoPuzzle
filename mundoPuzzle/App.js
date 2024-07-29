import { StyleSheet, View, StatusBar, Platform } from "react-native";
import { colors } from './src/global/colors';
import { useCallback, useState } from 'react'
import Home from './src/screens/Home';
import Header from './src/components/Header'
import { useFonts } from 'expo-font'
import * as SplashScreen from "expo-splash-screen"
import ItemListCategory from "./src/screens/ItemListCategory"
import ItemDetail from "./src/screens/ItemDetail"



export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'IndieFlower': require('./assets/fonts/Indie_Flower/IndieFlower-Regular.ttf'),
    'Itim': require('./assets/fonts/Itim/Itim-Regular.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const [categorySelected, setCategorySelected] = useState('')
  const [itemIdSelected, setItemIdSelected] = useState("");

  return (
    <View style={styles.container}>
      <Header title='Marcas'></Header>
      {!categorySelected ? (
        <Home setCategorySelected={setCategorySelected} />
      ) : !itemIdSelected ? (
        <ItemListCategory setCategorySelected={setCategorySelected} categorySelected={categorySelected} setItemIdSelected={setItemIdSelected} />
      ) : (
        <ItemDetail
          idSelected={itemIdSelected}
          setProductSelected={setItemIdSelected}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.clrLight,
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 10
  },
});
