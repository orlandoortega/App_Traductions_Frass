import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackActions } from '@react-navigation/native'
import { Alert, View, Image, Text, TextInput, TouchableOpacity, ScrollView, Button} from 'react-native'
import styles from '../component/Styles'

const Login = ({props, navigation}) => {
    const store = useSelector(store => store);
    /* const { navigation } = props; */
    /* const formik = useFormik({
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
    }) */
  
    return (
      <ScrollView>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <View style={styles.container}>
          <View style={styles.center}>
            <Text style={styles.titulo}>APRENDE INGLES</Text>
            <Image style={styles.imagen} source={require('../component/images/ingles.png')} />
          </View>
          <Text style={styles.subtitulos2}>INICIAR SECCIÓN</Text>
          <Formik
            initialValues={{usuario:'', password:''}}
            validationSchema = {Yup.object({
              usuario: Yup
              .string()
              .min(5)
              .required('Requerido'),
        
              password: Yup
              .string()
              .min(5)
              .required('Requerido'),
            })}
            onSubmit={ values => {
    
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
            }}
          >
            
            {({ handleChange, handleBlur, handleSubmit, errors, touched, values, ...props }) => (
              <View>
                <TextInput 
                  style={styles.textoinputs}
                  onChangeText={handleChange('usuario')}
                  onBlur={handleBlur('usuario')}
                  value={values.usuario}
                  placeholder='Nombre de usuario'
                  autoCapitalize='none'
                />
                {errors.usuario && touched.usuario ? <Text>{errors.usuario}</Text> : null}
                <TextInput 
                  style={styles.textoinputs}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  placeholder='Password'
                  autoCapitalize='none'
                  secureTextEntry={true}
                />
                {errors.password && touched.password ? <Text>{errors.password}</Text> : null}
                <Button onPress={handleSubmit} title='enviar'/>
                <Button onPress={() => navigation.navigate('Registro')} title='registrarme'/>
              </View>
            )}
            
          </Formik>
          {/* <View style={styles.segvista}>
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
          </View> */}
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

export default Login;