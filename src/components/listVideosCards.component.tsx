import React from "react";
import { View, FlatList } from "react-native";
import VideoCard from "./videoCard.component";
import { Video } from "../types/video.interface";
import ListFilterButtons from "./listFilterButtons.component";

import { homeScreenStyles as styles } from "../styles/home.styles";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

interface ListVideosCardsProps {
  videos: Video[];
  filtros?: string[];
}
// obtiene la lista de videos de el screen "Home" para formar un scroll de videos
const ListVideosCards: React.FC<ListVideosCardsProps> = ({ videos, filtros = [] }) => {

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
                imagenVideo: item.imagenVideo,
                imagenCanal: item.imagenCanal,
                tituloVideo: item.tituloVideo,
                nombreCanal: item.nombreCanal,
                vistasVideo: item.vistasVideo,
                fechaSubida: item.fechaSubida,
              })
            }
          />
        )}
        ListHeaderComponent={
          filtros.length > 0 ? <ListFilterButtons filters={filtros} /> : null
        }
      />

    </View>
  );
};

export default ListVideosCards;
