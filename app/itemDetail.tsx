import { GlobalContext } from "@/context/GlobalProvider"
import { useLocalSearchParams } from "expo-router"
import { useContext } from "react"
import { View,Text} from "react-native"

export default function ItemDetail(){
    const {data} = useContext(GlobalContext)
    const local = useLocalSearchParams()
    const itemData = data.filter((item) => item.id === local.id )
    return(
        <View>
            <Text>{itemData[0].title}</Text>
            <Text>{itemData[0].description}</Text>
        </View>
    )
}