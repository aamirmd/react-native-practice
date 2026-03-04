import { StyleSheet, Text, View } from "react-native";
// const logoImg = require("@/assets/images/icon.png");

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, styles.blue]}>
                <Text style={styles.text}>Light blue</Text>
            </View>
            <View style={[styles.box, styles.red]}>
                <Text style={styles.text}>Light Green</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 50,
        backgroundColor: "pink",
    },

    text: {
        color: "green",
    },
    box: {
        width: "45%",
        height: 100,
        padding: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "yellow",
        marginVertical: 10,
    },
    blue: {
        backgroundColor: "blue",
    },
    red: {
        backgroundColor: "red",
    },
});
