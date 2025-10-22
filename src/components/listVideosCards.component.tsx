import React from "react";
import { View, FlatList } from "react-native";
import VideoCard from "./videoCard.component";
import { VideoInterface } from "../types/video.interface";

import { homeScreenStyles as styles } from "../styles/home.styles";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

interface ListVideosCardsProps {
  videos: VideoInterface[];
}
// obtiene la lista de videos de el screen "Home" para formar un scroll de videos
const ListVideosCards: React.FC<ListVideosCardsProps> = ({ videos }) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.LVC_container}>

      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}

        renderItem={({ item }) => (
          <VideoCard
            {...item}
            onPress={() =>
              navigation.navigate("SelectedVideo", {
                id: item.id,
                titulo: item.titulo,
                descripcion: item.descripcion,
                canal: item.canal,
                miniatura: item.miniatura,
                vistas: item.vistas,
                likes: item.likes,
                duracion: item.duracion,
                canalImagen: item.canalImagen,
                publicado: item.publicado,
              })
            }
          />
        )}
      />

    </View>
  );
};

export default ListVideosCards;
