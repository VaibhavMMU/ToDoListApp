import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    const goalInputHandler = (enterdText) => {
        setEnteredGoalText(enterdText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');

    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContaier}>
                <Image style={styles.image} source={require("../assets/images/goal.png")}/>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Your Goal.."
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color={"#5e0acc"}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color={"#f31282"} />
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContaier: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b",
    },
    image:{
        // backgroundColor:"black",
        height: 100,
        width: 100,
        margin: 20,
    },
    textInput: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#e4d0ff",
        borderRadius: 6,
        backgroundColor: "#e4d0ff",
        padding: 16,
        color: '#120438'
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
});