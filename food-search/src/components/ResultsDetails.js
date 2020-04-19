import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ResultsDetails = ({ result }) => {
  // console.log(result);
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Start, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
  imageStyle: {
    width: 250,
    height: 160,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
export default ResultsDetails;
