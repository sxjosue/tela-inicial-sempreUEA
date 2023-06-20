import  React from "react";
import Header from "./header";


export const profileScreen = ({navigation}: {navigation: any}) => <Header navigation={navigation} name="Profile" />
export const mensageScreen = ({navigation} : {navigation: any}) => <Header navigation={navigation} name="Mensage" />
export const listScreen = ({navigation} : {navigation: any}) => <Header navigation={navigation} name="List" />
