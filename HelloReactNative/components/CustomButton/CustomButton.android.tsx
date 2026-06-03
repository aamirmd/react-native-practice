import React from "react";
import { Pressable, Text } from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: () => void;
};

const CustomButton = ({ onPress, title }: CustomButtonProps) => (
    <Pressable
        onPress={onPress}
        style={{
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightgreen",
            borderRadius: 5,
        }}
    >
        <Text style={{ color: "blue" }}>{title}</Text>
    </Pressable>
);

export default CustomButton;
