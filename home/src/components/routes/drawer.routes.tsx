import React from "react-native";
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenB from "../screens/screenB";
import ScreenA from '../screens/screenA'

const {Navigator, Screen} = createDrawerNavigator();

export default function DrawerRoutes(){
  return(
    <Navigator> 
      <Screen 
        name = 'screenA'
        component={ScreenA}
      />

      <Screen 
        name = 'screenB'
        component={ScreenB}
      />
      
    </Navigator> //navegacao de transicao de telas 
  );
}