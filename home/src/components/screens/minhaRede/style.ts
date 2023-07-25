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
        barra:{ //estilixzando o box barra
                flexDirection: 'row',
                paddingTop: 130, 
                backgroundColor: '#D3D3D3',
        },
        styleTextbarra: {       //estilizando os conteúdos da barra
                color:'#1D5E24',
                fontSize: 24,
                fontFamily: 'Roboto',
                fontWeight: 'bold',
        },
// -------------------------------------------
        boxbutton:{
                paddingTop: 73, //196
                flexDirection: 'row',
                fex: 1,
                backgroundColor: '#1D5E24',     // cor verde do layout do do sempre
        },
        bottonstyle: {
                alignItems: 'center',
                backgroundColor: '#F9F9F9',
                padding: 10,
                borderRadius: 22,
                marginTop: 10,
        },
        buttonText: {
                fontSize: 18,
                color: '#797979',
        },

});

export { styles }