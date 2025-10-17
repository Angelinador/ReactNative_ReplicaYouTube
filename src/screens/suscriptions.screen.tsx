import { View } from "react-native"
import ListSuscriptionsChanels from "../components/listSuscriptionsChanels.component"
import { ChanelCardProps } from "../types/chanelCard.interface"
import { suscriptionsScreenStyles as styles } from "../styles/suscriptionsScreen.styles"
import GeneralHeader from "../components/generalHeader.component"

const canales: ChanelCardProps[] = [
    {
        imagen: "https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1",
        nombre: "PixelExplorers",
        notificacion: true,
    },
    {
        imagen: "https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1",
        nombre: "Code Lab",
        notificacion: false,
    },
    {
        imagen: "https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1",
        nombre: "DevTips",
        notificacion: true,
    },
    {
        imagen: "https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1",
        nombre: "React World",
        notificacion: false,
    },

]

const SuscriptionsScreen = () => {
    return (
        <View style={styles.SS_generalContainer}>
            <View style={styles.SS_container}>
                <GeneralHeader
                    screen="Suscripciones"
                    userImage="https://i0.wp.com/e-quester.com/wp-content/uploads/2021/11/placeholder-image-person-jpg.jpg?fit=820%2C678&ssl=1"
                />
                <ListSuscriptionsChanels canales={canales} />
            </View>
        </View>
    )
}
export default SuscriptionsScreen