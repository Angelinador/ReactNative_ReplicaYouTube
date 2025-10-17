import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { settingsScreenStyles as styles } from "../styles/settings.styles";
import { useTheme } from "../contexts/theme.context";
import AnimatedToggleSwitch from "../components/animatedTogleSwitch.component";

type SettingsScreenProps = {
    imagenPerfil?: String
    nombrePerfil?: string
}

const SettingsScreen = ({ imagenPerfil, nombrePerfil }: SettingsScreenProps) => {

    const { theme } = useTheme()
    return (
        <View style={[styles.SS_generalContainer, { backgroundColor: theme.background }]}>
            <View style={styles.SS_container}>
                <View style={styles.SS_infoContainer}>

                    <View style={[styles.SS_info, { marginBottom: 28 }]}>
                        <Image
                            source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
                            style={[styles.SS_profile, { backgroundColor: theme.text }]}
                        />
                        <Text style={styles.SS_profileText}> Clemente Jack </Text>
                    </View>

                    <Text style={styles.SS_text}> Configuracion de la cuenta </Text>

                    <View style={styles.SS_info}>
                        <Text style={styles.SS_text}> Cambiar de cuenta </Text>
                        <TouchableOpacity>
                            <MaterialIcons style={styles.SS_buttons} name="keyboard-arrow-right" size={32} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.SS_info}>
                        <Text style={styles.SS_text}> Cambiar foto de perfil </Text>
                        <TouchableOpacity>
                            <MaterialIcons style={styles.SS_buttons} name="keyboard-arrow-right" size={32} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.SS_info}>
                        <Text style={styles.SS_text}> Idioma de la aplicacion </Text>
                        <TouchableOpacity>
                            <Text style={styles.SS_lenguajeText}> Español </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.SS_info}>
                        <Text style={styles.SS_text}> Modo Obscuro </Text>
                        
                        {/* Temas */}
                        <AnimatedToggleSwitch />

                    </View>

                    <View style={styles.SS_info}>
                        <Text style={styles.SS_text}> Cerrar sesion </Text>
                        <TouchableOpacity>
                            <MaterialIcons name="exit-to-app" size={32} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.SS_info}>
                        <Text style={styles.SS_text}> Ubicacion </Text>
                        <TouchableOpacity>
                            <MaterialIcons name="my-location" size={32} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
export default SettingsScreen;