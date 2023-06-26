import { setStatusBarBackgroundColor } from "expo-status-bar";
import { alignPropType } from "react-bootstrap/esm/types";
import React from "react-native";
import { View, Text } from "react-native";
import {styles} from  "../THEMES/defaultTheme"


export default function MinhaRede(){
    return(
        <View style={styles.container}>
            <>
                <Text>Sempre UEA</Text>
                <Text>Perfil</Text>
            </>
        </View>
    );
}