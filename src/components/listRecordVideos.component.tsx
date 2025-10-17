import React from "react";
import { Video } from "../types/video.interface";
import { Text, View } from "react-native";
import { FlatList } from "react-native";
import ShortVideoCard from "./shortVideoCard.component";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

import { recordScreenStyles as styles } from "../styles/record.styles";
import { useTheme } from "../contexts/theme.context";

interface ListRecordVideosProps {
    videos: Video[];
    fecha: string;
}

const ListRecordVideos: React.FC<ListRecordVideosProps> = ({ videos, fecha }) => {

    // al presionar un video del historial podremos acceder a el
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { theme } = useTheme()

    return (
        <View style={[styles.LRV_container, { borderColor: theme.subtitle }]}>

            <FlatList
                data={videos}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ShortVideoCard
                        {...item}
                        onPress={() =>
                            navigation.navigate("SelectedVideo", {
                                id: item.id,
                                imagenCanal: item.imagenCanal,
                                imagenVideo: item.imagenVideo,
                                tituloVideo: item.tituloVideo,
                                nombreCanal: item.nombreCanal,
                                vistasVideo: item.vistasVideo,
                                fechaSubida: item.fechaSubida,
                            })
                        }
                    />
                )}
                ListHeaderComponent={
                    <Text style={[styles.LRV_dateText, { color: theme.text }]}>{fecha}</Text>
                }
            />
        </View>
    );
}

export default ListRecordVideos;