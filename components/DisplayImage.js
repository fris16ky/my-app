import React from "react";
import { Image, StyleSheet } from "react-native";

const DisplayImage = (props) => {
  if (props.taskStatus.length < 1) {
    return (
      <Image style={styles.image} source={require("../assets/tick.png")} />
    );
  } else {
    return null;
  }
};

//This screen displays a checkmark (or tick) that congratulates the user on completing (deleting) all of
//their reminders. This assumes that the user does not keep reminders checked, but upon completion, deletes them.

const styles = StyleSheet.create({
  image: {
    width: 700,
    height: 500,
    margin: 80,
    marginTop: 20,
    marginLeft: 531,
  },
});

export default DisplayImage;
