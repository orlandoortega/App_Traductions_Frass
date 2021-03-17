import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Registrar from './screen/Registrar';
import DatosP from './screen/datosPersonales';
import segDato from './screen/segundoDato';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createStore, applyMiddleware } from "redux";
import {Provider, useSelector, useDispatch} from 'react-redux';
import ReduxThunk from "redux-thunk";
import axios from 'axios';
import { Alert } from 'react-native';
import DrawerNavigation from './navigation/drawerNavigation'

const LOGIN_ATTEMPT = "LOGIN_ATTEPMT";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
const STATUS = {
  ATTEMPT: 'ATTEMPT',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  NONE: 'NONE'
}

const initialState = {
  Loading: STATUS.NONE,
  data: [],
  error: {}
};

const Login = ( values, navigation ) => {
  const {email, password} = values;
  return dispatch => {
    dispatch({type: LOGIN_ATTEMPT});

      axios
        .post('https://jsonplaceholder.typicode.com/users',
        {
          email,
          password
        })
        .then(res => {
          dispatch({type: LOGIN_SUCCESS});
          Alert.alert('exito','As iniciado sección exitosamente')
          navigation.navigate('Datos')
        })
        .catch(error => {
          dispatch({type: LOGIN_FAILURE});
          Alert.alert('error', error)
        })
  }

}

const Reducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_ATTEMPT:
      return {
        ...state,
        Loading: STATUS.ATTEMPT
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        Loading: STATUS.SUCCESS
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        Loading: STATUS.FAILURE
      };
    default:
      return state
  }
}

const store = createStore(Reducer, applyMiddleware(ReduxThunk));

const Stack = createStackNavigator();
const App = () => {
  /* const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  
  const apiFecht = () => {
    useEffect(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(Response =>
          {
            setUsers(Response.data)
            setLoading(false)
          })
    },[])
  }

  apiFecht()

  if(loading){
    return(
      <View style={styles.container}>
        <Text style={styles.texto}>
          Cargando...
        </Text>
      </View>
    );
  } */
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation/>
        {/* <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {backgroundColor: 'orange'},
              title: 'ingresar',
              headerTintColor: '#eee',
            }}
          />
          <Stack.Screen
            name="Registrar"
            component={Registrar}
            options={{
              headerStyle: {backgroundColor: 'orange'},
              title: 'Registrate',
              headerTintColor: '#eee',
            }}
          />
          <Stack.Screen
            name="Datos"
            component={DatosP}
            options={{
              headerStyle: {backgroundColor: 'orange'},
              title: 'Datos Personales',
              headerTintColor: '#eee',
            }}
          />
          <Stack.Screen
            name="segDato"
            component={segDato}
            options={{
              headerStyle: {backgroundColor: 'orange'},
              title: 'Datos Personales',
              headerTintColor: '#eee',
            }}
          />
        </Stack.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
};

const Home = ({navigation}) => {
  const [cambio, setCambio] = useState(false);
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues:{
      email: '',
      password:'',
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email('email invalido')
      .required('Requerido'),

      password: Yup.string()
      .min(5)
      .required('Requerido'),
    }),
    onSubmit: values => {
      dispatch(Login(values,navigation));
    }
  })
  return (
    <View style={{flex: 1}}>
      <Text> </Text>
      <Text> </Text>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 12,
            }}>
            <TextInput
              autoCapitalize='none'
              onBlur={formik.handleBlur('email')}
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              style={{
                height: 40,
                width: 250,
                backgroundColor: '#ccc',
                borderRadius: 10,
              }}
              placeholder='email'
            />
              {formik.errors.email && formik.touched.email ? <Text>{formik.errors.email}</Text> : null}
          </View>
          <View style={{paddingBottom: 12}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#ccc',
                borderRadius: 10,
              }}>
              <TextInput
                autoCapitalize='none'
                onBlur={formik.handleBlur('password')}
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                secureTextEntry={cambio}
                keyboardType='default'
                style={{
                  height: 40,
                  width: 220,
                  backgroundColor: '#ccc',
                  borderRadius: 10,
                }}
                placeholder='Contraseña'
              />
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingEnd: 10,
                }}
                onPress={() => {
                  setCambio(!cambio);
                }}>
                {cambio == true ? (
                  <Icon name="eye-slash" size={20} color="#808080" />
                ) : (
                  <Icon name="eye" size={20} color="#808080" />
                )}
              </TouchableOpacity>
            </View>
              {formik.errors.password && formik.touched.password ? <Text style={{alignSelf:'center'}}>{formik.errors.password}</Text> : null}
              {(store.Loading === STATUS.ATTEMPT) ? <ActivityIndicator size='small' color='orange' /> : null }
          </View>
          <View>
            <TouchableOpacity
              style={{
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'orange',
                height: 40,
                width: 250,
              }}
              onPress={formik.handleSubmit}>
              <Text style={{color: '#eee'}}> ingresar </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text> </Text>
        <Text> </Text>
        <View style={styles.container}>
          <View style={{flex: 1.2}}>
            <View style={{paddingBottom: 12}}>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  backgroundColor: '#ccc',
                  height: 40,
                  width: 250,
                }}>
                <View
                  style={{flex: 1, justifyContent: 'center'}}
                  flexDirection="row">
                  <View
                    style={{
                      flex: 0.2,
                      justifyContent: 'center',
                      paddingLeft: 10,
                    }}>
                    <Image
                      source={require('./component/images/google.png')}
                      style={{width: 20, height: 20}}
                    />
                  </View>
                  <View style={{flex: 0.8, justifyContent: 'center'}}>
                    <Text>Inicia Secion Con Google</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{paddingBottom: 12}}>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#0000f8',
                  height: 40,
                  width: 250,
                }}>
                <View
                  style={{flex: 1, justifyContent: 'center'}}
                  flexDirection="row">
                  <View
                    style={{
                      flex: 0.2,
                      justifyContent: 'center',
                      paddingLeft: 10,
                    }}>
                    <Image
                      source={require('./component/images/facebook.png')}
                      style={{width: 20, height: 20}}
                    />
                  </View>
                  <View style={{flex: 0.8, justifyContent: 'center'}}>
                    <Text style={{color: 'white'}}>
                      Inicia Secion Con Facebook
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ccc',
                  height: 40,
                  width: 250,
                }}>
                <View
                  style={{flex: 1, justifyContent: 'center'}}
                  flexDirection="row">
                  <View
                    style={{
                      flex: 0.2,
                      justifyContent: 'center',
                      paddingLeft: 12,
                    }}>
                    <Image
                      source={require('./component/images/Apple.png')}
                      style={{width: 16, height: 20}}
                    />
                  </View>
                  <View style={{flex: 0.8, justifyContent: 'center'}}>
                    <Text style={{color: 'black'}}>
                      Inicia Secion Con Cuenta Apple
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: 'black'}}>¿No Tenes Cuenta?</Text>
              <Text
                style={{
                  color: 'black',
                  borderBottomWidth: 1,
                  borderBottomColor: 'black',
                }}
                onPress={() => navigation.navigate('Registrar')}>
                Registrate Aqui
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 30,
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#808080'}}>
                  Al Continuar Aceptas las Condiciones de
                </Text>
                <Text style={{color: '#808080'}}>
                  Servicio y Polticas de Privacidad
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;