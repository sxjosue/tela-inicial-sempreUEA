import {View, StyleSheet, DrawerLayoutAndroid} from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MaterialIcons, FontAwesome5, Entypo} from "@expo/vector-icons"; //biblioteca de icones
import InqueritosEstatisticos from "../screens/Inquerito_estatisticos";
import MinhaRede from '../screens/Minha_rede'
import Eventos from '../screens/Eventos'
import Oportunidades from "../screens/Oportunidades";
import Asitencia_estudantil from "../screens/Assitencia";
import Indicadores_instucionais from "../screens/Indicadores";
import navigationView from "../screens/posicaDrawer";

const {Navigator, Screen} = createDrawerNavigator();

export default function DrawerRoutes(){
  return(
        <Navigator> 
          <Screen name = 'Minha rede' component={MinhaRede} 
            options={{ //permite uma estilizacao a mais da barra
              drawerIcon: () => <MaterialIcons name="people" size={22}/> 
          }}/>

          <Screen name = 'Inquerito estatisticos'component={InqueritosEstatisticos}
            options={{
              drawerIcon: () => <FontAwesome5 name="tasks" size={22}/> 
          }}/>

          <Screen name = 'Eventos' component={Eventos}
           options={{
            drawerIcon: () => <MaterialIcons name="event" size={22}/> 
          }}/>

          <Screen name='Oportunidade' component={Oportunidades}
           options={{
            drawerIcon: () => <MaterialIcons name="work" size={22}/> 
          }}/>

          <Screen name = "Assistencia estudantil" component={Asitencia_estudantil} 
          options={{
            drawerIcon: () => <FontAwesome5 name="money-check" size={22}/> 
          }}/>

          <Screen name = 'Indicadores Institucionais' component={Indicadores_instucionais}
          options={{ 
            drawerIcon: () => <Entypo name="line-graph" size={22}/> 
          }}/>
        </Navigator> //navegacao de transicao de telas 
  );
}