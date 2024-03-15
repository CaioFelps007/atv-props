import { Text } from "react-native";
import { estilos } from "../styles/StyleSheet";
import { ImageBackground, View, Image } from "react-native";



export default function TouristLoucation({ name, address, description, imageSource }) {


    return (
        <View>
            <Image source={imageSource} style={{ height: 170, width: 500 }} />
            <Text>{name}</Text>
            <Text>{address}</Text>
            <Text>{description}</Text>

        </View>




    )
}

