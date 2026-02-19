import { StyleSheet, Text, View } from "react-native";
// const logoImg = require("@/assets/images/icon.png");

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Some Text</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 60,
        backgroundColor: "cyan",
    },

    text: {
        color: "green",
    },
});
