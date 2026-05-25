import React, { PropsWithChildren } from "react";
import {
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewProps,
    ViewStyle,
} from "react-native";

type BoxProps = PropsWithChildren<
    ViewProps & {
        style?: StyleProp<ViewStyle>;
    }
>;

export default function Box({ children, style, ...props }: BoxProps) {
    return (
        <View style={[styles.box, style]} {...props}>
            <Text style={styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#fff",
        padding: 20,
        width: 100,
        height: 100,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
});
