import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";  
import {FontAwesome5} from "@expo/vector-icons"

interface Props {
    navigation: any,
    name: any
  }

export default class Header extends React.Component<Props>{ //barra lateral
    render(){
    return(
        <View style = {style.container}>
             <SafeAreaView style={{flex: 1}}>
                <TouchableOpacity style={{alignItems: "flex-end", margin: 16}} onPress={this.props.navigation.openDrawer}>
                    <FontAwesome5 name="bars" size={24}/ >
                </TouchableOpacity>
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <Text style={style.text}>{this.props.name}Screen</Text>
                </View>
             </SafeAreaView>
        </View>
        );
    }
}

const style = StyleSheet.create({ 
    container:{
        flex: 1,
        backgroundColor: "#F9F9F9"
    }, 
    text:{
        color: "#1D5E24"
    }
})