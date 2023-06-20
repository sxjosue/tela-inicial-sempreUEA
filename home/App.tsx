import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from "react-navigation"
import {createDrawerNavigator} from "react-navigation-drawer"
import {Dimensions} from "react-native"
import {Feather} from "@expo/vector-icons"
import {profileScreen, mensageScreen, listScreen} from "./src/components/barra lateral/index";
import Title from "./src/components/superior/index"

const drawerNavigation = createDrawerNavigator({
  profileScreen, 
  mensageScreen, 
  listScreen
})

export default createDrawerNavigator(drawerNavigation);
/** 
export default function App(drawerNavigation) {
  return (
    <View style={styles.container}>
      <Title/>
    </View>
  );
}
**/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
