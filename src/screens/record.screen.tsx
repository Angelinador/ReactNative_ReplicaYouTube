import React from "react";
import { View } from "react-native";
import { Video } from "../types/video.interface";
import ListRecordVideos from "../components/listRecordVideos.component";
import GeneralHeader from "../components/generalHeader.component";
import { recordScreenStyles as styles } from "../styles/record.styles";
import { useTheme } from "../contexts/theme.context";

const RecordScreen = () => {
    const videos: Video[] = [
        {
            id: "1",
            imagenVideo: "https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-video%2Fs3fs-public%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2025-10%2Ftermina-guerra-gaza-hoy-conflicto-israel-hamas.jpg%3Fh%3D920929c4%26itok%3DnPWq4azn&w=1440&q=75",
            imagenCanal: "https://placehold.co/100x100",
            tituloVideo: "Compilation | Everything Belongs to Allah 33 Mins | Omar & Hana",
            nombreCanal: "Omar & Hana - Islamic",
            vistasVideo: 5500000,
            fechaSubida: "hace 2 días"
        },
        {
            id: "2",
            imagenVideo: "https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2025-10%2FInterrumpen%2520a%2520Trump%2520en%2520Parlamento%2520israel%25C3%25AD%253B%2520Expulsan%2520a%2520Legisladores%2520que%2520Pidieron%2520Estado%2520Palestino.jpg%3Fh%3D920929c4%26itok%3DaLQkkbib&w=1440&q=75",
            imagenCanal: "https://placehold.co/100x100",
            tituloVideo: "Compilation | Everything Belongs to Allah 33 Mins | Omar & Hana",
            nombreCanal: "Omar & Hana - Islamic",
            vistasVideo: 5500000,
            fechaSubida: "hace 2 días"
        },
        {
            id: "3",
            imagenVideo: "https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2025-10%2F_Es%2520el%2520Fin%2520de%2520una%2520Era%2520de%2520Terror%2520y%2520Muerte_%252C%2520Celebra%2520Trump%253B%2520Netanyahu%2520Promete%2520Paz.jpg%3Fh%3D920929c4%26itok%3DcnOmBxYW&w=1440&q=75",
            imagenCanal: "https://placehold.co/100x100",
            tituloVideo: "Compilation | Everything Belongs to Allah 33 Mins | Omar & Hana",
            nombreCanal: "Omar & Hana - Islamic",
            vistasVideo: 5500000,
            fechaSubida: "hace 2 días"
        },
        {
            id: "4",
            imagenVideo: "https://www.nmas.com.mx/_next/image/?url=https%3A%2F%2Fstatic-live.nmas.com.mx%2Fnmas-news%2Fstyles%2Fcorte_16_9%2Fcloud-storage%2F2025-10%2FLibera%2520Israel%2520a%2520Palestinos%2520que%2520eran%2520Prisioneros%253B%2520los%2520Reciben%2520con%2520Alegr%25C3%25ADa%2520en%2520Cisjordania%2520Ocupada.jpg%3Fh%3D920929c4%26itok%3DNAXXntZH&w=1440&q=75",
            imagenCanal: "https://placehold.co/100x100",
            tituloVideo: "Compilation | Everything Belongs to Allah 33 Mins | Omar & Hana",
            nombreCanal: "Omar & Hana - Islamic",
            vistasVideo: 5500000,
            fechaSubida: "hace 2 días"
        }
    ]

    const { theme } = useTheme()
    return (
        <View style={[styles.RS_generalContainer, { backgroundColor: theme.background }]}>
            <View style={styles.RS_container}>
                <GeneralHeader userImage="https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1" screen="Historial" />
                <ListRecordVideos videos={videos} fecha="hoy" />
            </View>
        </View>
    );
}
export default RecordScreen;