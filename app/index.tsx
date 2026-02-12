import { useState } from "react";
import { Button, Image, Pressable, Text, View } from "react-native";
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
      <Pressable 
        onPress={() => console.log("Image pressed")}
        onPressIn={() => console.log("On press in")}
        onPressOut={() => console.log("On press out")}
        onLongPress={() => console.log("On Long press")}
      >
      <Image source={logoImg} style={{width: 300, height: 300}}/>
      </Pressable>
      <Text style={{margin: 30}}>{message}</Text>
      <Button title="Click Me" color="#f704ae" onPress={() => console.log("Hello")} disabled={false}/>
    </View>
  );
}
