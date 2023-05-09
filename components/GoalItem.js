import { StyleSheet, View, Text, Pressable } from "react-native";

function goalItem(props) {

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style ={({pressed}) => pressed && styles.pressed }
            >
                <Text style={styles.goalText}>{props.text}</Text>
                {/* <Text style={styles.goalText}>{props.id}</Text> */}
            </Pressable>
        </View>

    );

    /* <ScrollView alwaysBounceVertical={false}>
{courseGoals.map((goal) => (
  <View style={styles.goalItem} key={goal}>
    <Text style={styles.goalText}>{goal}</Text>
  </View>
))}
</ScrollView> */
}


export default goalItem;

const styles = StyleSheet.create({
    goalText: {
        color: "white",
        padding: 8,
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressed: {
        opacity: 0.5,
    }
})