import {
    Text,
    StyleSheet,
    Platform,
    Image,
    View,
    ImageSourcePropType,
} from "react-native";

type PokemonCardProps = {
    name: string;
    image: ImageSourcePropType;
    type: string;
    hp: number;
    moves: string[];
    weaknesses: string[];
};

const getTypeDetails = (type: PokemonCardProps["type"]) => {
    switch (type.toLowerCase()) {
        case "electric":
            return { borderColor: "#FFD700", emoji: "⚡️" };
        case "water":
            return { borderColor: "#6493EA", emoji: "💧" };
        case "fire":
            return { borderColor: "#FF5733", emoji: "🔥" };
        case "grass":
            return { borderColor: "#66CC66", emoji: "🌿" };
        default:
            return { borderColor: "#A0A0A0", emoji: "❓" };
    }
};

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses,
}: PokemonCardProps) {
    const { borderColor, emoji } = getTypeDetails(type);
    return (
        <View style={styles.card}>
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

            <View style={styles.typeContainer}>
                <View style={[styles.badge, { borderColor }]}>
                    <Text style={styles.typeText}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>

            <View style={styles.moves}>
                <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
            </View>
            <View style={styles.weaknesses}>
                <Text style={styles.weaknessesText}>
                    Weaknesses: {weaknesses.join(", ")}
                </Text>
            </View>
        </View>
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
        borderRadius: 20,
        marginBottom: 16,
    },
    typeContainer: {
        flexDirection: "row",
        marginBottom: 40,
        justifyContent: "center",
    },
    badge: {
        borderWidth: 4,
        flexDirection: "row",
        paddingVertical: 4,
        paddingHorizontal: 20,
        borderRadius: 16,
        justifyContent: "space-evenly",
    },
    typeText: {
        fontSize: 20,
    },
    moves: {
        marginBottom: 16,
    },
    movesText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    weaknesses: {
        marginBottom: 16,
    },
    weaknessesText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
