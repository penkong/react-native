import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = React.useState([]);
  return (
    <View>
      <Button
        title="add color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          // item === rgb()
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});
export default ColorScreen;
