import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Header from './src/components/Header'
import { colors } from './src/global/colors';


export default function App() {

  return (
    <View style={styles.container}>
      <Header title='Categorias'></Header>
      <Home></Home>
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
