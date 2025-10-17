import React from "react";
import { View } from "react-native";
import { Video } from "../types/video.interface";
import ListVideosCards from "../components/listVideosCards.component";
import Header from "../components/homeHeader.component"
import { homeScreenStyles as styles } from "../styles/home.styles";
import { useTheme } from "../contexts/theme.context";

const HomeScreen: React.FC = () => {

  const videos: Video[] = [
    {
      id: "1",
      imagenVideo: "https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2025-10%2Favios-tormenta-tropocal-lorenzo-atlantico.jpg%3Fh%3D920929c4%26itok%3DoLRz32f1&w=1200&q=75",
      imagenCanal: "https://placehold.co/100x100",
      tituloVideo: "Aprendiendo React Native en 10 minutos",
      nombreCanal: "DevMaster",
      vistasVideo: 15000,
      fechaSubida: "hace 2 días",
    },
    {
      id: "2",
      imagenVideo: "https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2025-10%2Favios-tormenta-tropocal-lorenzo-atlantico.jpg%3Fh%3D920929c4%26itok%3DoLRz32f1&w=1200&q=75",
      imagenCanal: "https://placehold.co/100x100",
      tituloVideo: "Expo vs React Native CLI",
      nombreCanal: "CodeTips",
      vistasVideo: 34000,
      fechaSubida: "hace 1 semana",
    },
    {
      id: "3",
      imagenVideo: "https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2025-10%2Favios-tormenta-tropocal-lorenzo-atlantico.jpg%3Fh%3D920929c4%26itok%3DoLRz32f1&w=1200&q=75",
      imagenCanal: "https://placehold.co/100x100",
      tituloVideo: "Cómo crear un Bottom Tab Navigator",
      nombreCanal: "React Academy",
      vistasVideo: 8700,
      fechaSubida: "hace 3 semanas",
    },
    {
      id: "4",
      imagenVideo: "https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2025-10%2Favios-tormenta-tropocal-lorenzo-atlantico.jpg%3Fh%3D920929c4%26itok%3DoLRz32f1&w=1200&q=75",
      imagenCanal: "https://placehold.co/100x100",
      tituloVideo: "Dart esta mas facil de entender que el TS",
      nombreCanal: "React Academy",
      vistasVideo: 8700,
      fechaSubida: "hace 3 semanas",
    },
  ];

  const filtros: string[] = ["filtro 1", "filtro 2", "filtro 3", "filtro 4", "filtro 5", "filtro 6", "filtro 7", "filtro 8", "filtro 9"]

  const { theme } = useTheme()
  return (
    <View style={[styles.HS_generalContainer, { backgroundColor: theme.background }]}>
      <Header />
      <ListVideosCards videos={videos} filtros={filtros} />
    </View>
  );
};

export default HomeScreen;