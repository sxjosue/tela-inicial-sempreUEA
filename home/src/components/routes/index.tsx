import {NavigationContainer} from '@react-navigation/native';
import DrawerRoutes from "./drawer.routes";

export default function Index(){
    return(
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}