import Box from "@/components/Box";
import { StyleSheet, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
            <Box style={{ backgroundColor: "#2a9d8f" }}>Box 2</Box>
            <Box style={{ backgroundColor: "#e9c46a" }}>Box 3</Box>
            <Box style={{ backgroundColor: "#f4a261" }}>Box 4</Box>
            <Box style={{ backgroundColor: "#e76f51" }}>Box 5</Box>
            <Box style={{ backgroundColor: "#457b9d" }}>Box 6</Box>
            <Box style={{ backgroundColor: "#a8dadc" }}>Box 7</Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        height: 300,
        alignContent: "flex-end", // Used to align items in the cross axis
        marginTop: 64,
        borderWidth: 6,
        borderColor: "red",
    },
});
