import { StyleSheet, View } from "react-native";
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font'
import Navigator from './src/navigation/Navigator'
import { Provider } from "react-redux";
import store from "./src/store";

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
      <Provider store={store}>
        <Navigator />
      </Provider>

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