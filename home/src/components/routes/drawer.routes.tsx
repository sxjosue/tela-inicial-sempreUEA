import React from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import InqueritosEstatisticos from "../screens/Inquerito_estatisticos";
import MinhaRede from '../screens/Minha_rede'
import Eventos from '../screens/Eventos'
import Oportunidades from "../screens/Oportunidades";
import Asitencia_estudantil from "../screens/Assitencia";
import Indicadores_instucionais from "../screens/Indicadores";

const {Navigator, Screen} = createDrawerNavigator();

export default function DrawerRoutes(){
  return(
    <Navigator> 

      <Screen name = 'Minha rede' component={MinhaRede}/>
      <Screen name = 'Inquerito estatisticos'component={InqueritosEstatisticos}/>
      <Screen name = 'Eventos' component={Eventos}/>
      <Screen name='Oportunidade' component={Oportunidades}/>
      <Screen name = "Assistencia estudantil" component={Asitencia_estudantil} />
      <Screen name = 'Indicadores Institucionais' component={Indicadores_instucionais}/>

    </Navigator> //navegacao de transicao de telas 
  );
}