import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pokemonList from "@/data.json";

export default function Index() {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <ScrollView>
                {pokemonList.map((p) => (
                    <View style={styles.card} key={p.id}>
                        <Text style={styles.cardText}>{p.name}</Text>
                        <Text style={styles.cardText}>{p.type}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 20,
    },
    card: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 2,
        marginVertical: 4,
    },
    cardText: {
        fontSize: 20,
    },
});
