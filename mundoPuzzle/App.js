import { StyleSheet, View } from "react-native";
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font'
import Navigator from './src/navigation/Navigator'

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
      <Navigator />
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