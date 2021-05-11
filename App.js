import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Provider, useDispatch, useSelector, useStore} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { Alert, View, Image, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

const Stack = createStackNavigator();
const initialState = {data:['Hello, my name is orlando. What’s is yours?', 'Hola, mi nombre es orlando. ¿Cuál es el tuyo?',
'Pleased to meet you, Mary. My name’s orlando.', 'Encantado de conocerte, Mary. Mi nombre es Orlando.',
'Nice to meet you. Where are you from?', 'Un placer conocerte. ¿De donde eres?',
'I’m from Michigan. Detroit, specifically. And you? Where are you from?', 'Yo soy de Michigan. Detroit, específicamente. ¿Y usted? ¿De donde eres?',
'I’m from Las Vegas.', 'Soy de Las Vegas. ',],
count:0,
usuarios:[[{email:'Chato',password:'2106'}],]
};
const ADD_USUARIO = "ADD_USUARIO";
const AGREGAR = "AGREGAR";

const generateDispatch = (type, payload) => {
  return {
    type: type,
    payload: payload
  };
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

const App = () => {
  return (
    <Provider store={createStore(Reducer)}>
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

const Registro = ({navigation}) => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues:{
      usuario: '',
      password:'',
    },
    validationSchema: Yup.object({
      usuario: Yup.string()
      .min(5)
      .required('Requerido'),

      password: Yup.string()
      .min(5)
      .required('Requerido'),
    }),
    onSubmit: values => {
  
      const existeU = (usu,val) => {
        return usu.some(x => val===x[0].email);
      }
      
      if(existeU(store.usuarios,values.usuario)){
        alert('el usuario ya existe ingrese otro nombre de usuario');
        return;
      }
  
      dispatch(generateDispatch(ADD_USUARIO,values));
      alert('el usuario se a creado con exito');
      navigation.navigate('Login');
    }
  })
  return (
    <ScrollView>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.titulo}>APRENDE INGLES</Text>
          <Image style={styles.imagen} source={require('./component/images/ingles.png')} />
        </View>
        <Text></Text>
        <View style={styles.segvista}>
          <Text style={styles.subtitulos2}>
            Registrar usuario
          </Text>
          <Text>
          </Text>
          <TextInput
            autoCapitalize='none'
            onBlur={formik.handleBlur('usuario')}
            value={formik.values.usuario}
            onChangeText={formik.handleChange('usuario')}
            style={styles.textoinputs}
            placeholder='Nombre de usuario'
            />
            {formik.errors.usuario && formik.touched.usuario ? <Text>{formik.errors.usuario}</Text> : null}
          <Text style={styles.subtitulos}>
          </Text>
          <TextInput
            autoCapitalize='none'
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            secureTextEntry={true}
            keyboardType='numeric'
            style={styles.textoinputs}
            placeholder='Contraseña'
            />
            {formik.errors.password && formik.touched.password ? <Text>{formik.errors.password}</Text> : null}
        </View>
        <Text></Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.btnNew} onPress={formik.handleSubmit}>
            <Text style={styles.textonegro}>
              registrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNew} onPress={() => 
              navigation.goBack()}>
            <Text style={styles.textonegro}>
              volver
            </Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View>
          <Text style={styles.ultvista}>
            derechos reservados
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const Login = ({navigation}) => {
  const store = useSelector(store => store);
  
  const formik = useFormik({
    initialValues:{
      usuario: '',
      password:'' ,
    },
    validationSchema: Yup.object({
      usuario: Yup.string()
      .min(5)
      .required('Requerido'),

      password: Yup.string()
      .min(5)
      .required('Requerido'),
    }),
    onSubmit: values => {
  
      const existeP = (usu,val) => {
        return (usu.some(x => (val.email===x[0].email && val.password===x[0].password)));
      }
  
      if(existeP(store.usuarios,values)){
        AsyncStorage.setItem('token',values.password)
        navigation.dispatch(
          StackActions.replace('Home')
        )
        return;
      };
  
      Alert.alert('Error','Usuario y/o contraseña incorecto');
    }
  })

  return (
    <ScrollView>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.titulo}>APRENDE INGLES</Text>
          <Image style={styles.imagen} source={require('./component/images/ingles.png')} />
        </View>
        <Text></Text>
        <View style={styles.segvista}>
          <Text style={styles.subtitulos2}>
            Iniciar sección
          </Text>
          <TextInput
            autoCapitalize='none'
            onBlur={formik.handleBlur('usuario')}
            value={formik.values.usuario}
            onChangeText={formik.handleChange('usuario')}
            style={styles.textoinputs}
            placeholder='Usuario'
            />
            {formik.errors.usuario && formik.touched.usuario ? <Text>{formik.errors.usuario}</Text> : null}
          <Text></Text>
          <Text></Text>
          <TextInput
            autoCapitalize='none'
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
            onChangeText={formik.handleChange('password')}
            secureTextEntry={true}
            keyboardType='numeric'
            style={styles.textoinputs}
            placeholder='Contraseña'
            />
            {formik.errors.password && formik.touched.password ? <Text>{formik.errors.password}</Text> : null}
        </View>
        <Text></Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.btnNew} onPress={formik.handleSubmit}>
            <Text style={styles.textonegro}>
              ingresar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNew} onPress={() => 
              navigation.navigate('Registro')}>
            <Text style={styles.textonegro}>
              registrarme
            </Text>
          </TouchableOpacity>
        </View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View>
          <Text style={styles.ultvista}>
            derechos reservados
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const Home = ({ navigation }) => {
  const store = useSelector(store => store);

  return (
    
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.titulo}>APRENDE INGLES</Text>
          <Image style={styles.imagen} source={require('./component/images/ingles.png')} />
        </View>
        <View style={styles.segvista}>
          <Text style={styles.subtitulos}>
            desea repasar ahora?
          </Text>
          <TouchableOpacity style={styles.btnReset} onPress={() => 
            navigation.navigate('Repasar')}>
            <Text style={styles.textonegro}>ir</Text>
          </TouchableOpacity>
          <Text style={styles.subtitulos}>
            agregar nuevas frases?
          </Text>
          <TouchableOpacity style={styles.btnReset} onPress={() => { 
            navigation.navigate('Agregar') }}>
            <Text style={styles.textonegro}>ir</Text>
          </TouchableOpacity>
          <Text
            style={{
              paddingTop:30,
              alignSelf:'flex-end',
              fontSize:15,
              color:'red'
              }}
              onPress={() => {
                AsyncStorage.removeItem('token')
                navigation.dispatch(
                  StackActions.replace('Login', store)
                )
                
              }
              }>
                cerrar sección
          </Text>
        </View>
        <View>

        </View>
        <View>
          <Text style={styles.ultvista}>
            derechos reservados
          </Text>
        </View>
      </View>
    
  );
};

const Agregar = ({ route, navigation }) => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  const longitud = store.data.length-1;
  const [frase, setFrase] = useState([])
  const [fras, setFras] = useState([])

  return (
    <ScrollView style={{backgroundColor: 'lightcyan'}}>
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
      <View style={styles.centerBol}>
        <View style={styles.center}>
          <Image style={styles.imagen} source={require('./component/images/inglaterra.png')} />
          <Text style={styles.textotitulo}>
            ingrese la frase:
          </Text>
          <TextInput onChangeText={r => setFrase(r)} style={styles.textoinputs} placeholder='frase (EN INGLES)' ></TextInput>
          <TextInput onChangeText={t => setFras(t)} style={styles.textoinputs} placeholder='ingrese la traduccion' ></TextInput>
          <View style={styles.direccion}>
            <TouchableOpacity  style={styles.btnNew} onPress={() => {
              if (frase.length === 0) {
                alert('Campo Obligatorio ingrese la frase')
                return;
              }
              if (fras.length === 0) {
                alert('Campo Obligatorio ingrese la traducción')
                return;
              }
              if(store.data[longitud] == fras){
                alert('la frase y/o traducción se repite, ingrese una diferente')
                return;
              }
              if(store.data[longitud-1] == frase){
                alert('la frase y/o traducción se repite, ingrese una diferente')
                return;
              }
              dispatch(generateDispatch(AGREGAR,[frase,fras]))
              alert('texto enviado con exito')
              navigation.navigate('Home') 
              }}>
              <Text style={styles.textonegro}> enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnNew} onPress={
              () => navigation.navigate('Home')
              }>
              <Text style={styles.textonegro}>volver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const Repasar = ({ route, navigation }) => {
  const store = useSelector(store => store);
  const [newCount, setNewCount] = useState(0);

  return (
    <ScrollView style={{backgroundColor: 'lightcyan'}}>
      <View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
      <View style={styles.container}>
          <View style={styles.centerBol}>
            <View style={styles.center}>
              <Image style={styles.imagen} source={require('./component/images/cerebro.jpeg')} />
              <Text style={styles.textotitulo}>
                aqui podra ver la frase:
            </Text>
              <Text style={styles.textolist}>
                {store.data[newCount]}
              </Text>
              <Text style={styles.textotitulo}>
                y la traduccion:
            </Text>
              <Text style={styles.textolist}>
                {store.data[newCount+1]}
              </Text>
            </View>
            <View style={styles.center}>
              <View style={styles.centerNew}>
                <View>
                  <Text></Text>
                  <Text></Text>
                  <Text></Text>
                </View>
                <TouchableOpacity style={styles.btnNew} onPress={() => { 
                  setNewCount(newCount + 2); 
                  if (newCount + 2 >= store.data.length) {
                    return (alert('se acabaron las frases, por favor ingrese nuevas'));
                  }
                  }}>
                  <Text style={styles.textonegro}>ver seguiente frase?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnNew} onPress={() => {
                  if(newCount==0){
                    return alert('estas en el inicio')
                  }
                  setNewCount(0);
                  alert('volviste a empezar')
                  }}>
                  <Text style={styles.textonegro}>volver a empezar</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.centerNo}>
                <TouchableOpacity style={styles.btnNew} onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.textonegro}>volver</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'aliceblue',
  },
  subtitulos2:{
    textAlign:'center',
    fontSize: 25,
    color: 'blue'
  },
  ultvista: {
    fontSize: 10,
    color: 'black',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  segvista: {
    flex: 2,
    marginBottom: 10,
  },
  subtitulos: {
    fontSize: 20,
    color: 'blue',
  },
  titulo: {
    color: 'red',
    fontSize: 25,
  },
  textonegro: {
    color: 'white',
  },
  textoinputs: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  textotitulo: {
    fontSize: 20,
  },
  direccion: {
    flexDirection: 'row',
  },
  textolist: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    color: 'blue',
  },
  imagen: {
    width: 70,
    height: 70,
  },
  btnN: {
    borderRadius: 10,
    height: 50,
    width: 50,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnNew: {
    borderRadius: 30,
    height: 50,
    width: 120,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerNew: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerNo: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerBol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightcyan',
  },
  centerCol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lavender'
  },
  btnReset: {
    borderRadius: 30,
    height: 50,
    backgroundColor: 'aqua',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default App;