import { StyleSheet } from 'react-native';
import { THEME } from '../../themes/themes';

const styles = StyleSheet.create({

        /* --------------------DIV's/VIEW's------------------- */


        background: { /* View principal que engloba toda a página */

                backgroundColor: THEME.background,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                flex: 1,
                flexDirection: 'column',

        },

        widthdiv: { /* View que delimita largura da página */

                width: '80%',
                height: '100%',

        },

});

export { styles }