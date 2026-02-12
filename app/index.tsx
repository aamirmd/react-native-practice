import { Image, ImageBackground, Text, View } from "react-native";
const logoImg = require('@/assets/images/icon.png')

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{color: "cyan"}}>Hello World!</Text>
      <Text>Hello World!</Text>
      <Image source={logoImg} style={{ width: 200, height: 200 }}/>
      <ImageBackground source={{uri: "https://www.followingislam.org/_next/image?url=%2Fimages%2Ffuneral-home.jpeg&w=1920&q=75"}} style={{ width: 200, height: 200, margin: 20 }}>
        <Text>IMAGE TEXT</Text>
      </ImageBackground>
    </View>
  );
}
