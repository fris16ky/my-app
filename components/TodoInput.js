import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Alert,
  Image,
} from "react-native";
import Header from "./Header";

//Styling/creation of the input screen - keeping track of what the user inputs and sending it back to App.js to display
//Also checking if the input is valid

const TodoInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const TodoInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask("");
  };

  const checkInput = (enteredTask) => {
    if (enteredTask.length > 0) addTaskHandler();
    else {
      Alert.alert("Error", "Please enter a Reminder", [{ text: "OK" }], {
        cancelable: false,
      });
    }
  };
  //Only shows on Android/iOS, but if the user does not enter in a reminder, the user will be prompted to
  //Enter a task, since you can't submit an empty reminder

  return (
    <Modal visible={props.visible} animationType="slide">
      <Header title="To-Do App"></Header>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Reminder Here"
          style={styles.input}
          onChangeText={TodoInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="red"
              onPress={props.onCancel}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Add Reminder"
              color="green"
              onPress={() => checkInput(enteredTask)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "75%",
    borderColor: "blue",
    borderWidth: 3,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    width: "35%",
  },
});

export default TodoInput;
