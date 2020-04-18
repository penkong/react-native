import React from "react";
import { Text, StyleSheet, View ,Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  // console.log(props.navigation)
  // <TouchableOpacity
  //   onPress={() => props.navigation.navigate('List')}
  // >
  //   <Text>
  //     go to list demo
  //   </Text>
  // </TouchableOpacity>
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button title="Go TO Component"
      onPress={() => props.navigation.navigate('Components')}
    />
    <Button title="go to list demo" onPress={() => props.navigation.navigate('List')}/>
    <Button title="go to Image Screen" onPress={() => props.navigation.navigate('Image')}/>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
