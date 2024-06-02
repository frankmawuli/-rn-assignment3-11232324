import { View, Text , Image, StyleSheet} from 'react-native'
import React from 'react'

export default function Bar() {
  return (
    <View style = {styles.container}>
      <View>
        <Text style = {styles.bigText}>Hello Devs</Text>
        <Text style = {styles.smallText}>12task today </Text>
      </View>
      <View style = {styles.Image}>
      <Image source={require("../Images/person.png")}>
      </Image>

      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignContent: "center",
    padding: 10,
  },
  bigText:{
    fontSize: 32,
    fontWeight: "bold",

  },
  smallText:{
    fontSize: 12,
    
  },
  Image:{
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 50,

  }

})