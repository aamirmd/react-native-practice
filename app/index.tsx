import Box from "@/components/Box";
import { StyleSheet, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
            {/* Available space is distributed based on flex basis property instead of height property (or width depending on main axis) */}
            <Box
                style={{ backgroundColor: "#2a9d8f", flexBasis: 140, flex: 1 }}
            >
                Box 2
            </Box>
            <Box style={{ backgroundColor: "#e9c46a", height: 140, flex: 1 }}>
                Box 3
            </Box>
            <Box style={{ backgroundColor: "#f4a261" }}>Box 4</Box>
            <Box style={{ backgroundColor: "#e76f51" }}>Box 5</Box>
            <Box style={{ backgroundColor: "#457b9d" }}>Box 6</Box>
            <Box style={{ backgroundColor: "#a8dadc" }}>Box 7</Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        borderWidth: 6,
        borderColor: "red",
    },
});
