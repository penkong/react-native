import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
// icons come from @expo /vector-icons

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.back}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        // onEndEditing={() => onTermSubmit()}
        // onChangeText={(newTerm) => onTermChange(newTerm)}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        value={term}
        onEndEditing={onTermSubmit}
        onChangeText={onTermChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    margin: 10,
    flexDirection: "row",
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
});
export default SearchBar;
