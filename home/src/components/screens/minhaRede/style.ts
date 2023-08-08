import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import {MaterialIcons, AntDesign} from "@expo/vector-icons";
// import { THEME } from '../../themes/themes';

const styles = StyleSheet.create({

        background: { /* View principal que engloba toda a página */
           //     backgroundColor: THEME.background,
                width: '100%',
                height: '100%',
                alignItems: 'flex-start',
                flex: 1,
                backgroundColor: '#F9F9F9',
        },

        widthdiv: { /* View que delimita largura da página */

                width: '80%',
                height: '100%',
        },
// ---------------------------------------------------
        barra:{flexDirection: 'row', paddingTop: 130, backgroundColor: '#F9F9F9', marginLeft: 21, marginBottom:'7%'},  //estilixzando o box barra
        styleTextbarra: { color:'#1D5E24', fontSize: 24, fontFamily: 'Roboto', fontWeight: 'bold', marginLeft: 10}, //estilizando os conteúdos da barra
        stylefiltre: {marginStart: '55%'}, //"empurra a pesquisa e o filtro mais para a direita"
        Stylesearch: {paddingLeft: 15,},
// -------------------------------------------
});

export { styles }