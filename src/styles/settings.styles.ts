import { StyleSheet } from "react-native";

export const settingsScreenStyles = StyleSheet.create({
    SS_generalContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end"
    },
    SS_container: {
        width: "100%",
        height: "80%",
        backgroundColor: "#ff5252d8",
        borderTopEndRadius: 70,
        borderTopStartRadius: 70,
        alignItems: "center",
        justifyContent: "flex-end"
    },
    SS_infoContainer: {
        flexDirection: "column",
        width: "78%",
        height: "92%",
        gap: 40
    },
    SS_info: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    SS_profile: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    SS_profileText: {
        fontSize: 24,
        fontWeight: 600,
        color: "#fff"
    },
    SS_text: {
        fontSize: 18,
        fontWeight: 500,
        color: "#e6e6e6ff"
    },
    SS_lenguajeText: {
        fontSize: 14,
        fontWeight: 500,
        color: "#e6e6e6ff"
    },
    SS_buttons: {
        backgroundColor: "#fff",
        borderRadius: 30
    }
})