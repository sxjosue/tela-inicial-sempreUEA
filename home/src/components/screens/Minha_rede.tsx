import { setStatusBarBackgroundColor } from "expo-status-bar";
import { alignPropType } from "react-bootstrap/esm/types";
import React from "react-native";
import { View, Text, ImageComponent, Button} from "react-native";
import {MaterialIcons, FontAwesome5, AntDesign} from "@expo/vector-icons";
import {HomeTheme} from "../THEMES/homeTheme"
import {styles} from  "../THEMES/defaultTheme"


export default function MinhaRede(){
    return(
        <View style={styles.container}>
            
            <View style={HomeTheme.container}>
                <MaterialIcons name="people" size={22}/>
                <Text>Minha rede</Text>
                <AntDesign name="filter" size={22}/>
                <AntDesign name="search1" size={22}/>
            </View>

                <View>
                    <Button
                        title="Informações"
                    />
                    <Button
                        title="Minha Turma"
                    />
                    <Button
                        title="Docentes"
                    />
                </View>
                <View>
                    <Button
                        title="Coordenação"
                    />
                    <Button
                        title="Secretaria"
                    />
                    <Button
                        title="Grade"
                    />
                </View>
                <View>
                    <Button
                        title="Calendário"
                    />
            </View>

        </View>
    );
}