import {
    Text,
    StyleSheet,
    Platform,
    Image,
    View,
    ImageSourcePropType,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PokemonCardProps = {
    name: string;
    image: ImageSourcePropType;
    type: string;
    hp: number;
    moves: string[];
    weaknesses: string[];
};

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses,
}: PokemonCardProps) {
    return (
        <SafeAreaView style={styles.card}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️{hp}</Text>
            </View>

            <Image
                source={image}
                accessibilityLabel={`${name} Pokemon`}
                resizeMode="contain"
                style={styles.image}
            />

            <View>
                <Text>{type}</Text>
            </View>

            <View>
                <Text>Moves: {moves.join(", ")}</Text>
            </View>
            <View>
                <Text>Weaknesses: {weaknesses.join(", ")}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
    },
    hp: {
        fontSize: 22,
    },
    image: {
        width: "100%",
        height: 150,
        borderColor: "blue",
        borderWidth: 3,
        marginBottom: 16,
    },
});
