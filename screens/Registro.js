import React from 'react'
import { Formik } from "formik";
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native'
import styles from '../component/Styles'
import {ADD_USUARIO} from '../redux/Types'


const Registro = ({navigation}) => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  
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
        <Text></Text>
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
            const existeU = (usu,val) => {
              return usu.some(x => val===x[0].email);
            }
            
            if(existeU(store.usuarios,values.usuario)){
              alert('el usuario ya existe ingrese otro nombre de usuario');
              return;
            }
            dispatch({type: ADD_USUARIO, payload: values });
            alert('usuario agregado con exito')
            navigation.goBack()
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
            </View>
          )}
          
        </Formik>

        <Text></Text>
        <View style={{flexDirection:'row'}}>
          {/* <TouchableOpacity style={styles.btnNew} onPress={formik.handleSubmit}>
            <Text style={styles.textonegro}>
              registrar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNew} onPress={() => 
              navigation.goBack()}>
            <Text style={styles.textonegro}>
              volver
            </Text>
          </TouchableOpacity> */}
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

export default Registro; 