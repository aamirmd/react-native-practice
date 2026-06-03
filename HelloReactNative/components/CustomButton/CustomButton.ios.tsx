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
            backgroundColor: "lightblue",
            borderRadius: 20,
        }}
    >
        <Text style={{ color: "purple" }}>{title}</Text>
    </Pressable>
);

export default CustomButton;
