import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ResultsDetails from "./ResultsDetails";

const ResultList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultsDetails result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
export default ResultList;
