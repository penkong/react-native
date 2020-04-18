import React from 'react';
import { Text , StyleSheet, View } from 'react-native';



const ComponentsScreen = () => {
  const name = 'mkz';
  return (
    <View>
      <Text style={styles.textStyle}>gettting started with react native</Text>
      <Text style={styles.subHeader}>my name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  },
  subHeader: {
    fontSize: 20
  }
})

export default ComponentsScreen; 