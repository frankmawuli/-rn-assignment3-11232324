import { View, Text , ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import catalogData from './CatalogData'
import Card from './Card'

export default function Catalog() {
const newData =  catalogData.map((element) =>(<Card  key = {element.id} {...element}/>))


  return (
    <>
    <Text style = {{fontSize: 20 , fontWeight: "bold" , margin: 20}}>Categories</Text>
    <ScrollView horizontal = {true}>
      <View style = {styles.content}>
        {newData}
      </View>
    </ScrollView>
    </>
    
  )
}

const styles = StyleSheet.create({
  content:{
    flexDirection: "row"
  }

})