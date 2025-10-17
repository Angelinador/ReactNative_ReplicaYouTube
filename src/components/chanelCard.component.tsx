import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Bell, ChevronDown } from "lucide-react-native";
import { suscriptionsScreenStyles as styles } from "../styles/suscriptionsScreen.styles";
import { ChanelCardProps } from "../types/chanelCard.interface";

const ChanelCard = ({ imagen, nombre }: ChanelCardProps) => {
    return (
        <View style={styles.CC_container}>
            <Image
                source={{ uri: imagen }}
                style={styles.CC_chanelImage}
            />
            <Text style={styles.CC_channelName}>{nombre}</Text>

            <TouchableOpacity style={styles.CC_notificationButton}>
                <Bell color={"#fff"} size={24} />
                <ChevronDown color="#fff" size={16} style={{ marginLeft: 2 }} />
            </TouchableOpacity>
        </View>
    );
};

export default ChanelCard;
