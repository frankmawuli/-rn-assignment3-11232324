import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bar from './Components/Bar';
import Catalog from './Components/Catalog';
import Search from './Components/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <Bar/>
      <Search/>
      <Catalog/>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
    
  },
});
