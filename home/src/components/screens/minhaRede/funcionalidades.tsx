import React from "react";
import { View, Text} from "react-native";
import {TouchableOpacity} from 'react-native';
import {styles} from "./stlyeFunc"

const estilobotao = styles.boxbutton
const estililoTextobotao = styles.buttonText

export default function Botao(){
    return(
        <View>
            <View style={estilobotao}>
                <TouchableOpacity style={styles.bottonstyle1}>
                    <Text style={estililoTextobotao}>Informações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottonstyle2}>
                    <Text style={estililoTextobotao}>Minha Turma</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottonstyle3}>
                    <Text style={estililoTextobotao}>Docentes</Text>
                </TouchableOpacity>
            </View>
            <View style={estilobotao}>
                <TouchableOpacity style={styles.bottonstyle4}>
                    <Text style={estililoTextobotao}>Coordenação</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottonstyle5}>
                    <Text style={estililoTextobotao}>Secretaria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottonstyle6}>
                    <Text style={estililoTextobotao}>Grade</Text>
                </TouchableOpacity>
            </View>
            <View style={estilobotao}>
                <TouchableOpacity style={styles.bottonstyle7}>
                    <Text style={estililoTextobotao}>Calendario</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}