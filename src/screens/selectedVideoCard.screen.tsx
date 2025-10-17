import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ThumbsUp, ThumbsDown, Share2, Download } from "lucide-react-native";
import { Video } from "../types/video.interface";
import ListVideosCards from "../components/listVideosCards.component";

import { useRoute, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";

import { selectedVideoStyle } from "../styles/selectedVideo.style";
import { useTheme } from "../contexts/theme.context";
/* 
    type SelectedVideoRouteProp = {
        key: string;                 // clave interna de la ruta
        name: "SelectedVideo";       // nombre de la pantalla
        params: Video;               // aquí está tu objeto Video
    }
*/
type SelectedVideoRouteProp = RouteProp<RootStackParamList, "SelectedVideo">;

const SelectedVideoCard = () => {

    const videos: Video[] = [
        {
            id: "1",
            imagenVideo: "https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-video%2Fs3fs-public%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2025-10%2Ftermina-guerra-gaza-hoy-conflicto-israel-hamas.jpg%3Fh%3D920929c4%26itok%3DnPWq4azn&w=1440&q=75",
            imagenCanal: "https://placehold.co/100x100",
            tituloVideo: "Aprendiendo React Native en 10 minutos",
            nombreCanal: "DevMaster",
            vistasVideo: 15000,
            fechaSubida: "hace 2 días",
        },
        {
            id: "2",
            imagenVideo: "https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2025-10%2FInterrumpen%2520a%2520Trump%2520en%2520Parlamento%2520israel%25C3%25AD%253B%2520Expulsan%2520a%2520Legisladores%2520que%2520Pidieron%2520Estado%2520Palestino.jpg%3Fh%3D920929c4%26itok%3DaLQkkbib&w=1440&q=75",
            imagenCanal: "https://placehold.co/100x100",
            tituloVideo: "Expo vs React Native CLI",
            nombreCanal: "CodeTips",
            vistasVideo: 34000,
            fechaSubida: "hace 1 semana",
        },
        {
            id: "3",
            imagenVideo: "https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2025-10%2F_Es%2520el%2520Fin%2520de%2520una%2520Era%2520de%2520Terror%2520y%2520Muerte_%252C%2520Celebra%2520Trump%253B%2520Netanyahu%2520Promete%2520Paz.jpg%3Fh%3D920929c4%26itok%3DcnOmBxYW&w=1440&q=75",
            imagenCanal: "https://placehold.co/100x100",
            tituloVideo: "Cómo crear un Bottom Tab Navigator",
            nombreCanal: "React Academy",
            vistasVideo: 8700,
            fechaSubida: "hace 3 semanas",
        },
        {
            id: "4",
            imagenVideo: "https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2025-10%2FLibera%2520Israel%2520a%2520Palestinos%2520que%2520eran%2520Prisioneros%253B%2520los%2520Reciben%2520con%2520Alegr%25C3%25ADa%2520en%2520Cisjordania%2520Ocupada.jpg%3Fh%3D920929c4%26itok%3DNAXXntZH&w=1440&q=75",
            imagenCanal: "https://placehold.co/100x100",
            tituloVideo: "Dart esta mas facil de entender que el TS",
            nombreCanal: "React Academy",
            vistasVideo: 8700,
            fechaSubida: "hace 3 semanas",
        },
    ];

    /* 
        const route = {
            key: string;                 // clave interna de la ruta
            name: "SelectedVideo";       // nombre de la pantalla
            params: Video;               // aquí está tu objeto Video
        }
    */
    const route = useRoute<SelectedVideoRouteProp>();
    const {
        imagenVideo,
        imagenCanal,
        tituloVideo,
        nombreCanal,
        vistasVideo,
        fechaSubida,
    } = route.params;

    const { theme } = useTheme()

    return (
        <View style={[selectedVideoStyle.container, { backgroundColor: theme.background }]}>
            {/* Video */}
            <Image
                source={{ uri: imagenVideo }}
                style={selectedVideoStyle.videoContainer}
                resizeMode="cover"
            />

            {/* info : titulo */}
            <View style={selectedVideoStyle.metaSection}>
                <Text style={[selectedVideoStyle.titleText, { color: theme.text }]}>{tituloVideo}</Text>
                <Text style={[selectedVideoStyle.subtitleText, { color: theme.subtitle }]}>
                    {vistasVideo.toLocaleString()} vistas • {fechaSubida} •{" "}
                    <Text style={selectedVideoStyle.tagsText}>#ReactNative</Text>
                </Text>
            </View>

            {/* acciones */}
            <View style={selectedVideoStyle.actionsContainer}>
                <TouchableOpacity style={selectedVideoStyle.actionButton}>
                    <ThumbsUp size={20} color={theme.text} />
                    <Text style={[selectedVideoStyle.actionText, { color: theme.text }]}>25.6K</Text>
                </TouchableOpacity>

                <TouchableOpacity style={selectedVideoStyle.actionButton}>
                    <ThumbsDown size={20} color={theme.text} />
                    <Text style={[selectedVideoStyle.actionText, { color: theme.text }]}>65</Text>
                </TouchableOpacity>

                <TouchableOpacity style={selectedVideoStyle.actionButton}>
                    <Share2 size={20} color={theme.text} />
                    <Text style={[selectedVideoStyle.actionText, { color: theme.text }]}>Compartir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={selectedVideoStyle.actionButton}>
                    <Download size={20} color={theme.text} />
                    <Text style={[selectedVideoStyle.actionText, { color: theme.text }]}>Guardar</Text>
                </TouchableOpacity>
            </View>

            {/* canal */}
            <View style={selectedVideoStyle.channelContainer}>
                <Image
                    source={{ uri: imagenCanal }}
                    style={[selectedVideoStyle.canalImagen, { backgroundColor: theme.text }]}
                />
                <View style={{ flex: 1 }}>
                    <Text style={[selectedVideoStyle.channelName, { color: theme.text }]}>{nombreCanal}</Text>
                    <Text style={[selectedVideoStyle.channelSubs, { color: theme.subtitle }]}>289K suscriptores</Text>
                </View>
                <TouchableOpacity style={selectedVideoStyle.subscribeButton}>
                    <Text style={selectedVideoStyle.subscribeText}>Suscribirse</Text>
                </TouchableOpacity>
            </View>

            <ListVideosCards videos={videos} />
        </View>
    );
};

export default SelectedVideoCard;
