import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bar from './Components/Bar';
import Catalog from './Components/Catalog';
import Search from './Components/Search';
import List from './Components/List';

export default function App() {
  return (
    <View style={styles.container}>
      <Bar/>
      <Search/>
      <Catalog/>
      <List/>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
    
  },
});
