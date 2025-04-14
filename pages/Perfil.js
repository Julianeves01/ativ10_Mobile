import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo (a) ao meu Perfil! 🧸</Text>
            <Text style={styles.description}>
                Aqui você pode encontrar informações sobre mim, meus interesses e
                muito mais!
            </Text>

            <Image
                source={{ uri: "https://avatars.githubusercontent.com/u/158210262?v=4" }}
                style={styles.profileImage}
            />

            <View style={styles.iconContainer}>
                <View style={styles.iconRow}>
                    <Ionicons name="logo-html5" size={40} color="orange" />
                    <Ionicons name="logo-github" size={40} color="black" />
                    <Ionicons name="logo-figma" size={40} color="purple" />
                </View>
                <View style={styles.iconRow}>
                    <Ionicons name="logo-javascript" size={40} color="yellow" />
                    <Ionicons name="logo-css3" size={40} color="blue" />
                    <Ionicons name="logo-react" size={40} color="cyan" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#F5FCFF",
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        margin: 10,
    },
    description: {
        fontSize: 14,
        textAlign: "center",
        margin: 10,
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    iconContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    iconRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginBottom: 20,
    },
    iconR:{
        flexDirection: "row",
        justifyContent: "space-between",
    }
});