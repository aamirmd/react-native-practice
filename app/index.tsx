import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.text}>Welcome!</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "plum",
    },
    container: {
        flex: 1,
        backgroundColor: "plum",
        borderColor: "red",
        borderWidth: 4,
    },
    box: {
        padding: 0,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
});
