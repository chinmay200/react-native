import { StyleSheet } from "react-native";
import { View, Text, Pressable } from "react-native";

const GoalItem = ({ id, text, deleteHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dee2ff" }} //ripple effect for andriod
        style={({ pressed }) => {
          pressed && styles.pressedItem;
        }} //add effect for iOS
        onPress={deleteHandler.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#22577a",
    borderRadius: 5,
    marginBottom: 15,
  },

  pressedItem: {
    color: "red",
  },

  goalText: {
    color: "#dee2ff",
    padding: 10,
  },
});
