import { View } from "react-native";
import { estilos } from "./src/styles/StyleSheet";
import TouristLoucation from "./src/components/TouristLocation";




// APP, onde será exibido os resultados dos components.  

export default function App() {

  const imagempraia = { uri: 'https://www.viajali.com.br/wp-content/uploads/2023/03/praia-das-pitangueiras-20.png' }


  return (

    // View principal/container, onde se agrupa todos os elementos para serem exibidos.
    <View style={estilos.container}>
      <TouristLoucation imageSource={imagempraia} />
      <TouristLoucation name='PRAIA' />
      <TouristLoucation address='GUARUJA - PRAIA DAS PITANGUEIRAS' />
      <TouristLoucation address='Uma praia cheia de maravilhas da natureza, um ambiente agradável, com ondas calmas e uma praia limpa, ótimo para dar um passeio em fámilia ou amigos, uma das melhores praias da região.' />




    </View>



  )
}