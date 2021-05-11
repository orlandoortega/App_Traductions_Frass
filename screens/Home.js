import React from 'react'
import { useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackActions } from '@react-navigation/native'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../component/Styles'

const Home = ({ navigation }) => {
    const store = useSelector(store => store);
  
    return (
      
        <View style={styles.container}>
          <View style={styles.center}>
            <Text style={styles.titulo}>APRENDE INGLES</Text>
            <Image style={styles.imagen} source={require('../component/images/ingles.png')} />
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

  export default Home;