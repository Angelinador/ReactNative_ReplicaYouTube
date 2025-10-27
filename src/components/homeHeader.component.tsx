import React, { useState } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { homeScreenStyles as styles } from "../styles/home.styles";
import { YouTubeService } from "../services/youtube.service";
import { useVideos } from "../contexts/videos.context";

const HomeHeader = () => {

    const { setVideos } = useVideos(); // 👈 Actualiza la lista global
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!query.trim()) return;
        try {
            setLoading(true);
            const resultados = await YouTubeService.buscarVideos(query.trim());
            setVideos(resultados); // Actualiza el contexto global
        } catch (error: any) {
            console.error("Error al buscar videos:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.HH_container}>
            <TouchableOpacity>
                <Image
                    source={{ uri: "https://img.icons8.com/color/48/youtube-play.png" }}
                    style={[styles.HH_logo, { shadowColor: "#fff" }]}
                />
            </TouchableOpacity>

            <View style={styles.HH_searchContainer}>

                <Feather name="search" size={20} color="black" />
                <TextInput
                    style={styles.HH_input}
                    placeholder="Buscar videos"
                    placeholderTextColor="#888"
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={handleSearch} // 👈 Ejecuta la búsqueda al presionar Enter
                    returnKeyType="search"
                />

                {loading && <ActivityIndicator size="small" color="blue" style={{ marginLeft: 8 }} />}
                
            </View>

            <TouchableOpacity>
                <Image
                    source={{
                        uri: "https://randomuser.me/api/portraits/men/32.jpg",
                    }}
                    style={styles.HH_userImage}
                />
            </TouchableOpacity>
        </View>
    );
};


export default HomeHeader;
