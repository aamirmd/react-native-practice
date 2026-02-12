import { useState } from "react";
import { Button, Image, Modal, Text, View } from "react-native";
const logoImg = require("@/assets/images/icon.png");

export default function Index() {
    const [message, setMessage] = useState("Message");
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Modal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                animationType="fade"
                presentationStyle="formSheet"
            >
                <View style={{ padding: 30 }}>
                    <Image
                        source={logoImg}
                        style={{ width: 300, height: 300 }}
                    />
                    <Button
                        title="Go back"
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </View>
            </Modal>
            <Text style={{ margin: 30 }}>{message}</Text>
            <Button
                title="Click Me"
                color="#f704ae"
                onPress={() => setModalVisible(!modalVisible)}
                disabled={false}
            />
        </View>
    );
}
