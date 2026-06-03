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
            <View>
                <Text>{name}</Text>
                <Text>{hp}</Text>
            </View>

            <Image source={image} accessibilityLabel={`${name} Pokemon`} />

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
});
