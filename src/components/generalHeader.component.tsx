import React from "react";
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    TextInput
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { suscriptionsScreenStyles as styles } from "../styles/suscriptionsScreen.styles";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

import { useTheme } from "../contexts/theme.context";

type GeneralHeaderProps = {
    screen: string
    userImage: string;
};

const GeneralHeader = ({ screen, userImage }: GeneralHeaderProps) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { theme } = useTheme()

    return (
        <View style={styles.GH_header}>
            <View style={styles.GH_container}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Feather name="arrow-left" size={24} color={theme.text} />
                </TouchableOpacity>

                <Text style={[styles.GH_title, { color: theme.text }]}>{screen}</Text>

                <Image
                    source={{ uri: userImage }}
                    style={[styles.GH_userImage, { backgroundColor: theme.text }]}
                />
            </View>

            {/*<View style={styles.GH_searchContainer}>
                <Feather name="search" size={20} color="black" />
                <TextInput
                    style={styles.GH_input}
                    placeholder="Buscar"
                    placeholderTextColor="#888"
                />
            </View>*/}

        </View>
    );
};


export default GeneralHeader;
