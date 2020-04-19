import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewOneStyle}>
      <Text style={styles.textStyle}>box screeen</Text>
      <Text style={styles.textStyle}>box screeen</Text>
      <Text style={styles.textStyle}>box screeen</Text>
      <Text style={styles.textStyle}>box screeen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewOneStyle: {
    alignItems: "center",
    borderWidth: 3,
    borderColor: "black",
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
  },
});
export default BoxScreen;
