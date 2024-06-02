import { View, Text , Image ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import data from './CatalogData'

export default function Card(props) {
  return (
    <TouchableOpacity>
       <View style = {styles.content}>
      <Text>{props.description}</Text>
      <Text>`{props.tasks} Task`</Text>
      <Image source={props.image} style = {styles.image}>

      </Image>
    </View>
    </TouchableOpacity>

   
  )
}


const styles = StyleSheet.create({
  content: {
    width:186,
    height:192,
    padding:10,
    margin: 5,
    
  },
  image:{
    width: "auto",
    height: 150,
  }

})