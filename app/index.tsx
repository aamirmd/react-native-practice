import { useState } from "react";
import { ActivityIndicator, Button, StatusBar, View } from "react-native";
// const logoImg = require("@/assets/images/icon.png");

export default function Index() {
    const [loading, setLoading] = useState(false);
    return (
        <View
            style={{
                flex: 1,
                padding: 60,
                backgroundColor: "plum",
            }}
        >
            <StatusBar />
            <ActivityIndicator />
            <ActivityIndicator size="large" />
            <ActivityIndicator size="large" color="green" />
            <Button
                title={loading ? "Loading" : "Not loading"}
                onPress={() => {
                    setLoading(!loading);
                }}
            />
            <ActivityIndicator
                size="large"
                color="yellow"
                animating={loading}
            />
        </View>
    );
}
