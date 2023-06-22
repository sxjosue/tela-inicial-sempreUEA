import { StyleSheet, Text, View, Button } from 'react-native';
//import {createAppContainer} from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Feather} from "@expo/vector-icons";
import {profileScreen, mensageScreen, listScreen} from "./src/components/barra lateral";
import Title from "./src/components/superior/index";
import './src/components/barra lateral/index'
import * as React from 'react';

// Refaça o código de acordo com a documentação: https://reactnavigation.org/docs/drawer-based-navigation/

function SideBar({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

 
export default function App() {
  return (
    <View style={styles.container}>
      <Title/>

      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={SideBar} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
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