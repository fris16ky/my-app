import React from "react";
import { StyleSheet, View, Text } from "react-native";

//Styling of the header

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>To Do List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    paddingTop: 40,
    backgroundColor: "navy",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "gold",
    fontWeight: "bold",
    fontSize: 30,
  },
});

//Exporting the const for each js file so that the App.js receives what this file produces
export default Header;
