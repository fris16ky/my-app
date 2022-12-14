import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList, Image } from "react-native";

import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";
import DisplayImage from "./components/DisplayImage";
import Header from "./components/Header";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [addTasks, setAddTasks] = useState(false);

  const addTaskHandler = (taskTitle) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle },
    ]);
    setAddTasks(false);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== taskId);
    });
  };

  const canceltaskAdditionHandler = () => {
    setAddTasks(false);
  };

  return (
    <View>
      <Header title="To-Do App"></Header>
      <View style={styles.screen}>
        <Button
          title="Add New Reminder"
          onPress={() => setAddTasks(true)}
        ></Button>
        <TodoInput
          visible={addTasks}
          onAddTask={addTaskHandler}
          onCancel={canceltaskAdditionHandler}
        />
      </View>
      <DisplayImage taskStatus={tasks} />

      <View style={styles.screenlist}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={tasks}
          renderItem={(itemData) => (
            <TodoItem
              title={itemData.item.value}
              onDelete={deleteTaskHandler}
              id={itemData.item.id}
            />
          )}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 70,
    paddingHorizontal: 70,
  },
  screenlist: {
    marginLeft: 70,
    marginRight: 70,
  },
});
//Styling for screenlist is for when reminders are added to the 'home screen'. The margins I inputted
//Help align the reminder text box with the Add a Reminder input button (likewise with Delete)
