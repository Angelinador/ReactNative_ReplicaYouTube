import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Video } from "../types/video.interface";

import { videoStyles } from "../styles/video.style";
import { useTheme } from "../contexts/theme.context";

const VideoCard: React.FC<Video> = ({
    id,
    imagenVideo,
    imagenCanal,
    tituloVideo,
    nombreCanal,
    vistasVideo,
    fechaSubida,
    onPress, }) => {

    const { theme } = useTheme()
    return (
        <TouchableOpacity onPress={onPress} style={videoStyles.container}>

            <Image
                source={{ uri: imagenVideo }}
                style={videoStyles.imagenVideo}
            />

            <View style={videoStyles.infoContenedor}>
                <Image
                    source={{ uri: imagenCanal }}
                    style={[videoStyles.canalImagen, { backgroundColor: theme.text }]}
                />
                <View style={videoStyles.metaContenedor}>
                    <Text style={[videoStyles.titulo, { color: theme.text }]}>
                        {tituloVideo}
                    </Text>
                    <Text style={[videoStyles.metadatos, { color: theme.subtitle }]}>
                        {nombreCanal} • {vistasVideo} views • {fechaSubida}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default VideoCard;
