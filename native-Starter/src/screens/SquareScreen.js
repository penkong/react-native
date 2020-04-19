import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "green":
      state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "blue":
      state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const colorInc = 10;
  const [state, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: "red", payload: colorInc })}
        onDecrease={() => dispatch({ type: "red", payload: -1 * colorInc })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: "green", payload: colorInc })}
        onDecrease={() => dispatch({ type: "green", payload: -1 * colorInc })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: "blue", payload: colorInc })}
        onDecrease={() => dispatch({ type: "blue", payload: -1 * colorInc })}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;
