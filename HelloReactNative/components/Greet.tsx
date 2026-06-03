import { Text, View } from "react-native";

type GreetProps = {
    name: string;
};

export const Greet = ({ name }: GreetProps) => {
    return (
        <View
            style={{
                backgroundColor: "lightblue",
                alignItems: "center",
                margin: 30,
            }}
        >
            <Text>Hello {name}</Text>
        </View>
    );
};
