import React, { useState } from 'react'
import { useSelector} from 'react-redux'
import { View, Image, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import styles from '../component/Styles'

const Repasar = ({ props, navigation }) => {
    /* const { navigation } = props; */
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
                <Image style={styles.imagen} source={require('../component/images/cerebro.jpeg')} />
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

export default Repasar;