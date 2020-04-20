import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultsDetails from "./ResultsDetails";
import { withNavigation } from "react-navigation";

const ResultList = ({ title, results, navigation }) => {
  if (!results.length) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <ResultsDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default withNavigation(ResultList);
