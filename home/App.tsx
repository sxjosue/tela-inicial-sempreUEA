import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Dimensions} from "react-native";
import {Feather} from "@expo/vector-icons";
import {profileScreen, mensageScreen, listScreen} from "./src/components/barra lateral";
import Title from "./src/components/superior/index";
import Header  from './src/components/barra lateral/header';
import './src/components/barra lateral/index'
import { AppRegistry } from 'react-native';


// Refaça o código de acordo com a documentação: https://reactnavigation.org/docs/drawer-based-navigation/

function SideBar() {
  return (
    <View>
      <Text>Profile</Text>
      <Text>Mensagem</Text>
      <Text>Lista</Text>
      {/* Adicione mais opções de navegação ou conteúdo aqui */}
    </View>
  );
}
const DrawerNavigation = createDrawerNavigator();
 
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>

      <NavigationContainer>
        <DrawerNavigation.Navigator drawerContent={() => <SideBar />}>
          <DrawerNavigation.Screen name="Home" component={index} />
          {/* Adicione mais telas aqui */}
        </DrawerNavigation.Navigator>
      </NavigationContainer>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 