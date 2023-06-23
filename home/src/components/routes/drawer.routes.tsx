import React from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import InqueritosEstatisticos from "../screens/Inquerito_estatisticos";
import MinhaRede from '../screens/Minha_rede'
import Eventos from '../screens/Eventos'

const {Navigator, Screen} = createDrawerNavigator();

export default function DrawerRoutes(){
  return(
    <Navigator> 
      <Screen 
        name = 'Minha rede'
        component={MinhaRede}
      />

      <Screen 
        name = 'Inquerito estatisticos'
        component={InqueritosEstatisticos}
      />

      <Screen 
        name = 'Eventos'
        component={Eventos}
      />
      
    </Navigator> //navegacao de transicao de telas 
  );
}