import { useState } from "react";
import { Button, Text, View } from "react-native";
const logoImg = require('@/assets/images/icon.png')

export default function Index() {
  const [message, setMessage] = useState("Message");
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{margin: 30}}>{message}</Text>
      <Button title="Click Me" color="#f704ae" onPress={() => console.log("Hello")} disabled={false}/>
    </View>
  );
}
