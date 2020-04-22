// import { createAppContainer, createSwitchNavigator } from "reac";
// import { createStackNavigator } from "react-navigation-stack";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import { StyleSheet } from "react-native";
import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import AuthScreen from "./src/screens/AuthScreen";
import ReviewScreen from "./src/screens/ReviewScreen";
import DeckScreen from "./src/screens/DeckScreen";
import MapScreen from "./src/screens/MapScreen";

// const switchNavigator = createSwitchNavigator({
//   mainFlow: createBottomTabNavigator({
//     Welcome: WelcomeScreen,
//     Auth: AuthScreen,
//     Main: createBottomTabNavigator({
//       Review: ReviewScreen,
//       Map: MapScreen,
//       Deck: DeckScreen,
//     }),
//   }),
//   // stack have back
//   // ResolveAuth: ResolveAuthScreen,
//   // loginFlow: createStackNavigator({
//   //   Signup: SignupScreen,
//   //   Signin: SigninScreen,
//   // }),
//   // // if token we can switch to this
//   // mainFlow: createBottomTabNavigator({
//   //   // stack have back
//   //   trackListFlow: createStackNavigator({
//   //     TrackList: TrackListScreen,
//   //     TrackDetail: TrackDetailScreen,
//   //   }),
//   //   TrackCreate: TrackCreateScreen,
//   //   Account: AccountScreen,
//   // }),
// });
// const App = createAppContainer(switchNavigator);
// const styles = StyleSheet.create({
//   container: {},
// });
// export default () => {
//   return <App style={styles.container} />;
// };
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Auth" component={AuthScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
