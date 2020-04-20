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
    // use fragment
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
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
    backgroundColor: "white",
    flex: 1,
  },
});

export default SearchScreen;
