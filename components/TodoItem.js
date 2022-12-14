import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";

//This file/component adds each new reminder to the home screen (App.js)

const TodoItem = (props) => {
  const [check, setCheck] = useState(false);
  return (
    <View style={styles.screen}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
      <Checkbox
        disabled={false}
        style={styles.check}
        value={check}
        onValueChange={() => setCheck(!check)}
      />
      <TouchableOpacity
        onPress={props.onDelete.bind(this, props.id)}
        style={styles.button}
      >
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "lightblue",
    borderColor: "black",
    borderWidth: 1,
    width: "60%",
  },
  screen: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    display: "flex",
    height: 40,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    color: "white",
    fontWeight: "bold",
  },
  check: {
    marginTop: 10,
  },
});
//Check styling added to center the checkbox when the inputted reminder is only one line

export default TodoItem;
