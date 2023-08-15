import React, { useState } from "react";
import { View, Text} from "react-native";
import {TouchableOpacity} from 'react-native';
import {styles} from "./stlyeFunc"

const estilobotao = styles.boxbutton
const estililoTextobotao = styles.buttonText
type ButtonColor = '#F9F9F9' | '#1D5E24';

export default function Botao(){

    const [buttonColor, setButtonColor] = useState<{ [key: string]: ButtonColor }>({
        btn1: '#F9F9F9', btn2: '#F9F9F9', btn3: '#F9F9F9', btn4: '#F9F9F9', btn5: '#F9F9F9', btn6: '#F9F9F9', btn7: '#F9F9F9',
    });
    const handlePress = (btnId: string) => {
        setButtonColor(prevColors => ({
            ...prevColors,
            [btnId]: prevColors[btnId] === '#F9F9F9' ? '#1D5E24' : '#F9F9F9', }));
      };

    return(
        <View>
            <View style={estilobotao}>
                <TouchableOpacity style={[styles.bottonstyle1, { backgroundColor: buttonColor.btn1 }]} onPress={() => handlePress('btn1')}>
                    <Text style={[estililoTextobotao]}>Informações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottonstyle2, { backgroundColor: buttonColor.btn2 }]} onPress={() => handlePress('btn2')}>
                    <Text style={estililoTextobotao}>Minha Turma</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottonstyle3, { backgroundColor: buttonColor.btn3 }]} onPress={() => handlePress('btn3')}>
                    <Text style={estililoTextobotao}>Docentes</Text>
                </TouchableOpacity>
            </View>
            <View style={estilobotao}>
                <TouchableOpacity style={[styles.bottonstyle4, { backgroundColor: buttonColor.btn4 }]} onPress={() => handlePress('btn4')}>
                    <Text style={estililoTextobotao}>Coordenação</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottonstyle5, { backgroundColor: buttonColor.btn5 }]} onPress={() => handlePress('btn5')}>
                    <Text style={estililoTextobotao}>Secretaria</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottonstyle6, { backgroundColor: buttonColor.btn6 }]} onPress={() => handlePress('btn6')}>
                    <Text style={estililoTextobotao}>Grade</Text>
                </TouchableOpacity>
            </View>
            <View style={estilobotao}>
                <TouchableOpacity style={[styles.bottonstyle7, { backgroundColor: buttonColor.btn7 }]} onPress={() => handlePress('btn7')}>
                    <Text style={estililoTextobotao}>Calendario</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}