import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../component/Styles'
import { AGREGAR } from '../store/Types'
import generateDispatch from '../store/Config'

const Agregar = ({ props, navigation }) => {
    /* const { navigation } = props; */
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
            <Image style={styles.imagen} source={require('../component/images/inglaterra.png')} />
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
                dispatch({ type: AGREGAR, payload: [frase,fras]})
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
export default Agregar;