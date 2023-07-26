import { StyleSheet, TouchableOpacity, Text } from 'react-native';
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
        barra:{flexDirection: 'row', paddingTop: 130, backgroundColor: '#F9F9F9', marginLeft: 21},  //estilixzando o box barra
        styleTextbarra: { color:'#1D5E24', fontSize: 24, fontFamily: 'Roboto', fontWeight: 'bold', marginLeft: 10}, //estilizando os conteúdos da barra
// -------------------------------------------
});

export { styles }