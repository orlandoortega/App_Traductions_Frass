import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import  Login  from "../../screens/Login";
import Registro  from "../../screens/Registro";
import Repasar  from "../../screens/Repasar";
import  Home  from "../../screens/Home";
import Agregar from "../../screens/Agregar";
import Splahs from "../../screens/Splahs";

const Stack = createStackNavigator();


export const NavegationStack = ({props}) => {
    return (
        <Stack.Navigator initialRouteName="Splahs" headerMode='none'>
          <Stack.Screen name='Splahs' component={Splahs}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registro" component={Registro} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Repasar" component={Repasar} />
          <Stack.Screen name="Agregar" component={Agregar} />
        </Stack.Navigator>
    );
};
