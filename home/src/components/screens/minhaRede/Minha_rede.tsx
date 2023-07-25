import { setStatusBarBackgroundColor } from "expo-status-bar";
import React from "react-native";
import { View, Text, ImageComponent, Button} from "react-native";
import {MaterialIcons, FontAwesome5, AntDesign} from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity} from 'react-native';
import {styles} from "./style"

const estilobotao = styles.boxbutton
const estililoTextobotao =styles.buttonText

export default function MinhaRede(){
    return(
        <View style={styles.background}>   
            
            <View style={styles.barra}>
                <MaterialIcons name="people" size={24}/>
                <Text style={styles.styleTextbarra}>Minha rede</Text>
                <AntDesign name="filter" size={24}/>
                <AntDesign name="search1" size={24}/>
            </View>

                <View style={estilobotao}>
                    <TouchableOpacity style={styles.bottonstyle}>
                        <Text style={estililoTextobotao}>Informações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottonstyle}>
                        <Text style={estililoTextobotao}>Minha Turma</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottonstyle}>
                        <Text style={estililoTextobotao}>Docentes</Text>
                    </TouchableOpacity>
                </View>

                <View style={estilobotao}>
                    <TouchableOpacity style={styles.bottonstyle}>
                        <Text style={estililoTextobotao}>Coordenação</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottonstyle}>
                        <Text style={estililoTextobotao}>Secretaria</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bottonstyle}>
                        <Text style={estililoTextobotao}>Grade</Text>
                    </TouchableOpacity>
                </View>

                <View style={estilobotao}>
                    <TouchableOpacity style={styles.bottonstyle}>
                        <Text style={estililoTextobotao}>Calendario</Text>
                    </TouchableOpacity>
                </View>
        </View>    
    );
}