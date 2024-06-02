import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function List() {
  const data = [
    { key: '1', text: 'Mobile App Development' },
    { key: '2', text: 'Web Development' },
    { key: '3', text: 'Push Ups' },
    { key: '4', text: 'Reading Books' },
    { key: '5', text: 'Learning Guitar' },
    { key: '6', text: 'Cooking' },
    { key: '7', text: 'Hiking' },
    { key: '8', text: 'Painting' },
    { key: '9', text: 'Yoga' },
    { key: '10', text: 'Running' },
    { key: '11', text: 'Eating' },
    { key: '12', text: 'Writing' },
    { key: '13', text: 'Playing Piano' },
    { key: '14', text: 'Gardening' },
    { key: '15', text: 'Mediation' },

    
    // Add more items here
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderTopColor:"#ccc",
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: 354,
    height:128
  },
  itemText: {
    fontSize: 18,
    marginTop: 50,
    
  },
});
