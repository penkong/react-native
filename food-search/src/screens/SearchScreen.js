import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
// import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm] = React.useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView style={styles.sView}>
        <ResultList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultList results={filterResultsByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    // minHeight: "100%",
    backgroundColor: "white",
    flex: 1,
    // marginLeft: 10,
  },
  sView: {
    // marginBottom: 90,
  },
});

export default SearchScreen;
