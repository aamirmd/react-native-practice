import { Greet } from "@/components/Greet";
import { View } from "react-native";
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
            <Greet name="Ahmed" />
            <Greet name="Abdullah" />
        </View>
    );
}
