import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Video } from "../types/video.interface";
import { recordScreenStyles as styles } from "../styles/record.styles";
import { useTheme } from "../contexts/theme.context";

const ShortVideoCard: React.FC<Video> = ({
  imagenVideo,
  tituloVideo,
  nombreCanal,
  vistasVideo,
  fechaSubida,
  onPress,
}) => {

  const { theme } = useTheme()
  return (
    <TouchableOpacity onPress={onPress} style={styles.SVC_generalContainer}>

      <View style={styles.SVC_container}>

        <Image
          source={{ uri: imagenVideo }}
          style={styles.SVC_videoContainer}
          resizeMode="cover"
        />

        {/* informacion del video */}
        <View style={styles.SVC_textContainer}>

          <Text style={[styles.SVC_titleText, { color: theme.text }]} numberOfLines={2}>
            {tituloVideo}
          </Text>
          <Text style={[styles.SVC_metaText, { color: theme.subtitle }]} numberOfLines={2}>
            {nombreCanal}
          </Text>
          <Text style={[styles.SVC_metaText, { color: theme.subtitle }]} numberOfLines={2}>
            {vistasVideo}
          </Text>
          <Text style={[styles.SVC_metaText, { color: theme.subtitle }]} numberOfLines={2}>
            {fechaSubida}
          </Text>

        </View>
      </View>
    </TouchableOpacity>

  );
};

export default ShortVideoCard;
