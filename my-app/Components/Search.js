import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function Search() {
  return (
    <View style={{  margin: 30}}>
      <View style={{ flexDirection: 'row',
       alignItems: 'center',
        backgroundColor: '#fff' ,
         gap:20}
         
         }>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          placeholderTextColor="#999"
        />
        <Image
          source={require("../Images/Filter.png")}
          style={{ width: 50, height: 48, }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 textInput:{ 
  height: 40,
  fontSize: 16,
  borderRadius:30, 
  width:270 ,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.65,
  elevation: 1,

}
})