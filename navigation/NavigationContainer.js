import * as React from "react";
import { NavegationStack } from "./stacknavigation/StackNavigator";
import { NavigationContainer} from '@react-navigation/native';

const navigationRef = React.createRef();

const Contenedor = ({props}) => {
    return (
        <NavigationContainer ref={navigationRef} {...props}>
            <NavegationStack/>
        </NavigationContainer>
    );
}
export default Contenedor;