import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { VideoInterface } from "../types/video.interface";
import ListVideosCards from "../components/listVideosCards.component";
import Header from "../components/homeHeader.component";
import { homeScreenStyles as styles } from "../styles/home.styles";

import { YouTubeService } from "../services/youtube.service";

import { useTheme } from "../contexts/theme.context";
import { useRecord } from "../contexts/record.context";


const HomeScreen: React.FC = () => {

  const [videos, setVideos] = useState<VideoInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  const { generarId } = useRecord()

  //const filtros: string[] = ["Populares", "Locales", "Recomendados"];

  // DF
  // Kansas city [39.107517, -94.578808]
  const lat = 39.107517;
  const lon = -94.578808;

  useEffect(() => {
    const cargarVideos = async () => {
      setLoading(true);
      const data = await YouTubeService.obtenerPopulares(lat, lon);
      setVideos(data);
      setLoading(false);
    };
    generarId(lat, lon)
    cargarVideos();
  }, []);

  return (
    <View
      style={[styles.HS_generalContainer, { backgroundColor: theme.background }]}
    >
      <Header />

      {loading ? (
        <ActivityIndicator
          size="large"
          color={theme.text}
          style={{ marginTop: 40 }}
        />
      ) : (
        <ListVideosCards videos={videos} />
      )}
    </View>
  );
};

export default HomeScreen;
