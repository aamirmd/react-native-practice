import { Alert, Button, View } from "react-native";
// const logoImg = require("@/assets/images/icon.png");

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                padding: 60,
                backgroundColor: "plum",
            }}
        >
            <Button
                title="Alert 1"
                onPress={() => {
                    Alert.alert("Invalid data", "Incorrect email format");
                }}
            />
            <Button
                title="Alert 2"
                onPress={() => {
                    Alert.alert("Invalid data", "Incorrect email format", [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Pressed cancel"),
                        },
                        {
                            text: "OK",
                            onPress: () => console.log("Pressed ok"),
                        },
                        {
                            text: "Continue",
                            onPress: () => console.log("Continue pressed"),
                        },
                    ]);
                }}
            />
        </View>
    );
}
