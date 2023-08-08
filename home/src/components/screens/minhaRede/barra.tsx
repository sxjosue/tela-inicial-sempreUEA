import React from "react-native";
import { View, Text, TouchableOpacity} from "react-native";
import {MaterialIcons, AntDesign} from "@expo/vector-icons";
import {styles} from "./style"
import Botao from "./funcionalidades";

export default function Barra(){
    return(

        <View style={styles.background}>   
            <View style={styles.barra}>
                <MaterialIcons name="people" size={24}/>
                <Text style={styles.styleTextbarra}>Minha rede</Text>
                
                <TouchableOpacity style={styles.stylefiltre}>
                    <AntDesign name="filter" size={24}/>
                
                </TouchableOpacity>
                <TouchableOpacity style={styles.Stylesearch}>
                    <AntDesign name="search1" size={24}/>
                </TouchableOpacity>
                
            </View>
            <Botao/>
        </View>
    );
}