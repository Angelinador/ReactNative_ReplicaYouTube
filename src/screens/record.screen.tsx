import React, { useCallback, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import ListRecordVideos from "../components/listRecordVideos.component";
import GeneralHeader from "../components/generalHeader.component";
import { recordScreenStyles as styles } from "../styles/record.styles";
import { useTheme } from "../contexts/theme.context";
import { ReferenciaInterface } from "../types/referencia.interface";
import { getReferenciasPorHistorial } from "../services/reference.service";

const RecordScreen: React.FC = () => {
    const { theme } = useTheme();
    const [videos, setVideos] = useState<ReferenciaInterface[]>([]);
    const [loading, setLoading] = useState(true);

    const cargarReferencias = async () => {
        try {
            setLoading(true);
            const res = await getReferenciasPorHistorial();
            if (res.success && res.data) {
                setVideos(res.data);
            } else {
                console.warn("No se encontraron referencias:", res.message);
            }
        } catch (err) {
            console.error("Error cargando historial:", err);
        } finally {
            setLoading(false);
        }
    };
    useFocusEffect(
        useCallback(() => {
            cargarReferencias();
        }, [])
    );
    if (loading) {
        return (
            <View style={[
                styles.RS_generalContainer,
                {
                    backgroundColor: theme.background,
                    justifyContent: "center",
                    alignItems: "center",
                },
            ]}>
                <ActivityIndicator size="large" color={theme.primary} />
                <Text style={{ color: theme.text, marginTop: 10 }}>Cargando historial...</Text>
            </View>
        );
    }

    return (
        <View style={[styles.RS_generalContainer, { backgroundColor: theme.background }]}>
            <View style={styles.RS_container}>
                <GeneralHeader
                    userImage="https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1"
                    screen="Historial"
                />
                {videos.length > 0 ? (
                    <ListRecordVideos videos={videos} />
                ) : (
                    <Text style={{
                        color: theme.subtitle,
                        textAlign: "center",
                        marginTop: 20,
                    }}>
                        No hay videos en tu historial todavía.
                    </Text>
                )}
            </View>
        </View>
    );
};

export default RecordScreen;
