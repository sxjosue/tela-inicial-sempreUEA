import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";  
import {FontAwesome5} from "@expo/vector-icons"

export default class Header extends React.Component{ //barra lateral
    render(){
    return(
        <View>
             <SafeAreaView style={{flex: 1}}>
                <TouchableOpacity style={{alignItems: "flex-end", margin: 16}} onPress={this.props.navigation.openDrawer}>
                    <FontAwesome5 name="bars" size={24}>

                    </FontAwesome5>
                </TouchableOpacity>
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