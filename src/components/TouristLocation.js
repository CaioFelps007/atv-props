import { Text } from "react-native";
import { estilos } from "../styles/StyleSheet";
import { ImageBackground, View, Image } from "react-native";



export default function TouristLoucation({ name, address, description, imageSource }) {


    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>{name}</Text>
            <Image source={imageSource} style={{ height: 180, width: 500 }} />
            <Text style={{ fontSize: 25 }}>{address}</Text>
            <Text style={{ fontSize: 25 }}>{description}</Text>
        </View>




    )
}

