import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import ReduxThunk from "redux-thunk"
import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { View, Text, ActivityIndicator } from 'react-native'
import {ADD_USUARIO, AGREGAR} from './redux/Types'
import Agregar from './screens/Agregar'
import Repasar from './screens/Repasar'
import Home from './screens/Home'
import Login from './screens/Login'
import Registro from './screens/Registro'


const Stack = createStackNavigator();
const initialState = {data:['Hello, my name is orlando. What’s is yours?', 'Hola, mi nombre es orlando. ¿Cuál es el tuyo?',
'Pleased to meet you, Mary. My name’s orlando.', 'Encantado de conocerte, Mary. Mi nombre es Orlando.',
'Nice to meet you. Where are you from?', 'Un placer conocerte. ¿De donde eres?',
'I’m from Michigan. Detroit, specifically. And you? Where are you from?', 'Yo soy de Michigan. Detroit, específicamente. ¿Y usted? ¿De donde eres?',
'I’m from Las Vegas.', 'Soy de Las Vegas. ',],
count:0,
usuarios:[[{email:'Chato',password:'2106'}],]
};

const Reducer = (state = initialState, action) => {
  switch(action.type){
    case AGREGAR:
      return{
        ...state,
        data : [
          ...state.data,
          [].concat(action.payload[0]),
          [].concat(action.payload[1])
        ]
      };
    case ADD_USUARIO:
      return {
        ...state,
        usuarios: [
          ...state.usuarios,
          [].concat(action.payload)
        ]
      };
  
    default:
      return state;
  }
} 


const AppNavigator = ({navigation}) => {
    useEffect(() => {
      AsyncStorage.getItem('token')
      .then(x => {
        navigation.dispatch(
          StackActions.replace(x ? 'Home': 'Login')
        )
      })
    },[])

    return(
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'blue', fontSize: 22}}> Cargando... </Text>
        <ActivityIndicator size='large' color='red' />
      </View>
    );
}
const store = createStore( Reducer,applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AppNavigator" headerMode='none'>
          <Stack.Screen name='AppNavigator' component={AppNavigator}/>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registro" component={Registro} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Repasar" component={Repasar} />
          <Stack.Screen name="Agregar" component={Agregar} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
};


export default App;