import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Registrar from './screen/Registrar';
import DatosP from './screen/datosPersonales';
import segDato from './screen/segundoDato';
import { createStore} from 'redux';
import {Provider, useSelector} from 'react-redux';

const initialState = [{value: 0}];

function counterReducer(state = initialState, action) {
  if (action.type == 'jfksdj') return initialState;
  return initialState;
}

const store = createStore(counterReducer);

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const Home = ({navigation}) => {
  const [cambio, setCambio] = useState(false);
  const store = useSelector(store => store);
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
              style={{
                height: 40,
                width: 250,
                backgroundColor: '#ccc',
                borderRadius: 10,
              }}
              placeholder="     Email"
            />
          </View>
          <View style={{paddingBottom: 12}}>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#ccc',
                borderRadius: 10,
              }}>
              <TextInput
                style={{
                  height: 40,
                  width: 220,
                  borderRadius: 10,
                }}
                secureTextEntry = {cambio}
                placeholder="     Contraseña"
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
              }}>
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