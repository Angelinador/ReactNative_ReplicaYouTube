import React from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { homeScreenStyles as styles } from "../styles/home.styles";

const HomeHeader = () => {
    return (
        <View style={styles.HH_container}>
            <TouchableOpacity>
                <Image
                    source={{ uri: "https://img.icons8.com/color/48/youtube-play.png" }}
                    style={styles.HH_logo}
                />
            </TouchableOpacity>

            <View style={styles.HH_searchContainer}>
                <Feather name="search" size={20} color="black" />
                <TextInput
                    style={styles.HH_input}
                    placeholder="Buscar"
                    placeholderTextColor="#888"
                />
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
