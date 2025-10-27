import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../contexts/theme.context";
import AnimatedToggleSwitch from "../components/animatedTogleSwitch.component";

import { settingsScreenStyles as styles } from "../styles/settings.styles";

type SettingsScreenProps = {
    imagenPerfil?: string;
    nombrePerfil?: string;
};

const SettingsScreen = ({ imagenPerfil, nombrePerfil }: SettingsScreenProps) => {
    const { theme } = useTheme();

    return (
        <View style={[styles.generalContainer, { backgroundColor: theme.background }]}>
            <View
                style={[
                    styles.headerContainer,
                    { backgroundColor: theme.primary || "#3B62FF" },
                ]}
            >
                <Image
                    source={{
                        uri:
                            imagenPerfil ||
                            "https://randomuser.me/api/portraits/men/32.jpg",
                    }}
                    style={[styles.profileImage, { borderColor: theme.subtitle }]}
                />
                <Text style={[styles.profileName, { color: theme.text }]}>
                    {nombrePerfil || "Clemente Jack"}
                </Text>
            </View>

            <ScrollView
                style={styles.contentContainer}
                contentContainerStyle={{ paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            >
                <Text style={[styles.sectionTitle, { color: theme.subtitle }]}>
                    Configuración de la cuenta
                </Text>

                <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
                    <Text style={[styles.optionText, { color: theme.text }]}>
                        Cambiar foto de perfil
                    </Text>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={28}
                        color={theme.subtitle}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
                    <Text style={[styles.optionText, { color: theme.text }]}>
                        Idioma de la aplicación
                    </Text>
                    <Text style={[styles.languageText, { color: theme.subtitle }]}>
                        Español
                    </Text>
                </TouchableOpacity>

                <View style={styles.optionRow}>
                    <Text style={[styles.optionText, { color: theme.text }]}>
                        Modo oscuro
                    </Text>
                    <AnimatedToggleSwitch />
                </View>

                <TouchableOpacity style={styles.optionRow} activeOpacity={0.7}>
                    <Text style={[styles.optionText, { color: theme.text }]}>
                        Ubicación
                    </Text>
                    <MaterialIcons name="my-location" size={26} color={theme.subtitle} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.optionRow, styles.logoutRow]}
                    activeOpacity={0.7}
                >
                    <Text style={[styles.optionText, { color: "#fff" }]}>
                        Cerrar sesión
                    </Text>
                    <MaterialIcons name="exit-to-app" size={26} color="#fff" />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default SettingsScreen;
