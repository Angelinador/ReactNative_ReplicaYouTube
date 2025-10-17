import { FlatList, View } from "react-native"
import ChanelCard from "../components/chanelCard.component"
import { ChanelCardProps } from "../types/chanelCard.interface"
import React from "react"
import { suscriptionsScreenStyles as styles } from "../styles/suscriptionsScreen.styles"

interface ListSuscriptionsChanelsProps {
    canales: ChanelCardProps[]
}
const ListSuscriptionsChanels: React.FC<ListSuscriptionsChanelsProps> = ({ canales }) => {
    return (
        <View style={styles.LSC_container}>
            <FlatList
                data={canales}
                keyExtractor={(item) => item.nombre}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ChanelCard
                        imagen={item.imagen}
                        nombre={item.nombre}
                        notificacion={item.notificacion}
                    />
                )}
            />
        </View>
    )
}
export default ListSuscriptionsChanels