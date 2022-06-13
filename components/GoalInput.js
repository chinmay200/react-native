import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
useState;

import image from "../assets/favicon.png";

const GoalInput = ({ addHandler, isModalVisible, removeHandler }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (text) => {
    setEnteredGoal(text);
  };
  return (
    <Modal animationType="fade" visible={isModalVisible}>
      <View style={styles.inputContainer}>
        <Image source={image} style={styles.image}></Image>
        <TextInput
          style={styles.input}
          placeholder="Add your goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <Button
            title="Cancel"
            onPress={removeHandler}
            color="#f31282"
          ></Button>
          <Button
            title="Add goal"
            onPress={() => {
              addHandler(enteredGoal);
              setEnteredGoal("");
            }}
            color="#b180f0"
          ></Button>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "lightgrey",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    color:"#120438",
    backgroundColor:"white",
    width: "80%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 5,
    paddingLeft: 10,
  },

  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    width: 200,
    justifyContent: "space-between",
  },

  image: {
    margin: 20,
  },
});
