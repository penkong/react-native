import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const firends = [
    { name: 'friend #1',age:20},
    { name: 'friend #2',age:21},
    { name: 'friend #3',age:22},
    { name: 'friend #4',age:23},
    { name: 'friend #5',age:24},
    { name: 'friend #6',age:25},
    { name: 'friend #7',age:26},
    { name: 'friend #8',age:27},
    { name: 'friend #9',age:28},
  ] 
  return (    
    // flat list take arrray of record and help render it to screen
    // element === {item : {name: firedn1}, index: 0};
    // horizontal
    // showsHorizontalScrollIndicator={false}
    <View> 
      <FlatList 
        keyExtractor={(friend) => friend.name}
        data={firends} renderItem={({item, index}) => {
          return <Text style={styles.textStyles}>{item.name}  -  age: {item.age}</Text>
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyles : {
    marginVertical: 30
  }
});


export default ListScreen;
