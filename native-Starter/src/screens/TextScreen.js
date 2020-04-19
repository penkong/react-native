import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const TextScreen = () => {
  const [name, setName] = React.useState("");
  return (
    <View>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={name}
        onChangeText={(newVal) => setName(newVal)}
      ></TextInput>
      <Text>my name is {name}</Text>
      {name.length < 5 ? <Text>name must be more than 5 chars</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 30,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default TextScreen;
