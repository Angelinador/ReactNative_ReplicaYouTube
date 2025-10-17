import { StyleSheet } from "react-native";

export const videoStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginBottom: 16,
        gap: 8
    },
    imagenVideo: {
        width: "100%",
        aspectRatio: 5 / 3,
        backgroundColor: "#e8e8e8ff",
        resizeMode: "stretch"
    },
    infoContenedor: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        gap: 10
    },
    canalImagen: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    metaContenedor: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
    },
    titulo: {
        fontSize: 18,
        fontWeight: "700",
    },
    metadatos: {
        fontSize: 14,
    },
})