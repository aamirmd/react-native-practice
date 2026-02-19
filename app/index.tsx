import { StatusBar, View } from "react-native";
const logoImg = require("@/assets/images/icon.png");

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                padding: 60,
                backgroundColor: "plum",
            }}
        >
            <StatusBar
                barStyle="dark-content"
                backgroundColor="lightgreen"
                hidden={false}
            />
        </View>
    );
}
