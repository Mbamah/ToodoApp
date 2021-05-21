import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Task from './components/Task'

export default function App() {
  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    // setTaskItems([...taskItems, task])
    setTaskItems([...taskItems, task]);

    setTask('')
  }

  const removeItem = (index) =>{
    // let newItems = taskItems.filter((task) => task.index !== index);
    // setTaskItems(newItems);

    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  // }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.textWrapper}>
        <Text style={styles.sectionTitle}>Today's Too Do!</Text>

        <Text style={styles.taskText}>{taskItems.length}  Task(s)</Text>
        <View style={styles.items}>

          {taskItems.map((item, index) =>{
            console.log(index)
            return (
              <TouchableOpacity key={index} onPress={() => removeItem(index, console.log(index)) }>
                <Task text={item}  />
              </TouchableOpacity>
            );
            
          })}
          
         
        </View>
      </View>

      {/* type a task */}
      <KeyboardAvoidingView
        // behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputTaskWrapper}
      >
        <TextInput  placeholder={"eg. Visiting mom today"} value={task} onChangeText={(text) => setTask(text)} style={styles.input} />
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWrapper}>
            <AntDesign name="plus" style={styles.addTask} size={28} color="black" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },
  textWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  inputTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#fff",
    // width:250,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#c0c0c0",
    flex: 0.9,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },
  taskText: {
    color: "#444",
    fontWeight:'bold',
    fontSize:16,
    textAlign:'center',
    marginTop:10,
  },
  addTask: {},
})
