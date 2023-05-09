import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
const App = () => {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModelIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModelIsVisible(true);
  }

  function endAddGoalHandler() {
    setModelIsVisible(false);
  }

  const addGoalHeandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    // console.log(enteredGoalText);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    // console.log('Delte');
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
        <GoalInput
          visible={modalIsVisible}
          onCancel={() => endAddGoalHandler()}
          onAddGoal={addGoalHeandler}
        />
        <View style={styles.goalContainer}>
          {/* <Text style={styles.heading}>List Of Goals...</Text> */}
          {
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler} />
              }}
              keyExtractor={(item) => {
                return item.id;
              }}
              alwaysBounceVertical={false}
            />
          }
        </View>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalContainer: {
    flex: 5,
  },
  heading: {
    margin: 5,
    fontSize: 30,
  }
});
