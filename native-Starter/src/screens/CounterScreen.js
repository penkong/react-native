import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increase":
      return { ...state, counter: state.counter + action.payload };
    case "Decrease":
      return { ...state, counter: state.counter + action.payload };
    default:
      return;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = React.useReducer(reducer, { counter: 0 });
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "Increase", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "Decrease", payload: -1 });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
