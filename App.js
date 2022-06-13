import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addGoalInputModal = () => {
    setIsModalVisible(true);
  };

  const removeGoalModal = () =>{
    setIsModalVisible(false)
  }

  const addGoalHandler = (enteredGoal) => {
    setGoals((previousGoals) => [
      ...previousGoals,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setIsModalVisible(false)
  };

  const deleteGoalHandler = (id) => {
    setGoals((previousGoals) => {
      return previousGoals.filter((goal) => id !== goal.id);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Goals tracker </Text>

      <Button title="Add new goal"onPress={addGoalInputModal}></Button>

      <GoalInput addHandler={addGoalHandler} removeHandler = {removeGoalModal} isModalVisible = {isModalVisible}/>
      <View style={styles.list}>
        <Text
          style={{
            color:"#f8edeb",
            marginTop: 10,
            paddingBottom: 5,
            marginBottom: 10,
            borderBottomWidth: 1,
            borderColor: "grey",
          }}
        >
          List of goals
        </Text>
        {/* <ScrollView>
          {goals.map((goal) => (
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={goals}
          renderItem={(itemObj) => {
            return (
              <GoalItem
                text={itemObj.item.text}
                id={itemObj.item.id}
                deleteHandler={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor:"#8d99ae"
  },

  text: {
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "red",
    borderStyle: "solid",
    padding: 10,
  },
  list: {
    borderBottomWidth: 1,
    borderColor: "grey",
    flex: 6,
  },
});
