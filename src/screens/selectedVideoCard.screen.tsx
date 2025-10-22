import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ThumbsUp, ThumbsDown } from "lucide-react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { selectedVideoStyle as styles } from "../styles/selectedVideo.style";
import { useTheme } from "../contexts/theme.context";
import { WebView } from "react-native-webview";

type SelectedVideoRouteProp = RouteProp<RootStackParamList, "SelectedVideo">;

const SelectedVideoCard = () => {
    const route = useRoute<SelectedVideoRouteProp>();
    const {
        id,
        titulo,
        descripcion,
        canal,
        miniatura,
        vistas,
        likes,
        duracion,
        canalImagen,
        publicado,
    } = route.params;

    const { theme } = useTheme();
    const [mostrarDescripcion, setMostrarDescripcion] = useState(false);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            {/* 🎬 Video embebido */}
            <View style={styles.videoContainer}>
                <WebView
                    style={{ flex: 1 }}
                    javaScriptEnabled
                    domStorageEnabled
                    allowsFullscreenVideo
                    scrollEnabled={false}
                    source={{
                        html: `
              <html>
                <body style="margin:0;padding:0;overflow:hidden;background:black;">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/${id}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowfullscreen
                  ></iframe>
                </body>
              </html>
            `,
                    }}
                />
            </View>

            <TouchableOpacity
                style={styles.metaSection}
                activeOpacity={0.8}
                onPress={() => setMostrarDescripcion((prev) => !prev)} // toggle
            >
                <Text style={[styles.titleText, { color: theme.text }]}>{titulo}</Text>
                <Text style={[styles.subtitleText, { color: theme.subtitle }]}>
                    {vistas} vistas • {publicado}
                </Text>

                {mostrarDescripcion && (
                    <Text
                        style={[
                            styles.descriptionText,
                            { color: theme.subtitle, marginTop: 8 },
                        ]}
                    >
                        {descripcion || "Sin descripción disponible."}
                    </Text>
                )}
            </TouchableOpacity>


            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionButton}>
                    <ThumbsUp size={20} color={theme.text} />
                    <Text style={[styles.actionText, { color: theme.text }]}>
                        {likes}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <ThumbsDown size={20} color={theme.text} />
                    <Text style={[styles.actionText, { color: theme.text }]}>No me gusta</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.channelContainer}>
                <Image
                    source={{ uri: canalImagen }}
                    style={[styles.canalImagen, { backgroundColor: theme.text }]}
                />
                <View style={{ flex: 1 }}>
                    <Text style={[styles.channelName, { color: theme.text }]}>{canal}</Text>
                    <Text style={[styles.channelSubs, { color: theme.subtitle }]}>
                        289K suscriptores
                    </Text>
                </View>
                <TouchableOpacity style={styles.subscribeButton}>
                    <Text style={styles.subscribeText}>Suscribirse</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SelectedVideoCard;
