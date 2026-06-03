import { View, StyleSheet } from "react-native";
import PokemonCard from "@/components/PokemonCard";

export default function Index() {
    return (
        <View style={styles.container}>
            <PokemonCard />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
});
