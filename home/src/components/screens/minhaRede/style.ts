import { StyleSheet } from 'react-native';
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

        barra:{
                flexDirection: 'row',
                paddingTop: 130, 
                backgroundColor: '#B0C4DE'
        },

        button:{
                paddingTop: 73, //196
                flexDirection: 'row',
                fex: 1,
                backgroundColor: '#3498db', 
                color: '#fff'      
        },

});

export { styles }