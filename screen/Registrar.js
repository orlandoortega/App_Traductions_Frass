import React from 'react';
import { TouchableOpacity } from 'react-native';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
})

const Registrar = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text> </Text>
            <Text> </Text>
            <ScrollView>
                <View style={styles.container}>  
                    <View style={{flex:1, justifyContent:'center',alignContent:'center', paddingHorizontal:40}}>
                        <Text style={{ color:'#808080', fontSize:24, alignContent:'center'}}>
                            Queremos que tengas
                        </Text>
                        <Text style={{ color:'#808080', fontSize:24, alignContent:'center'}}>
                            la mejor experiencia
                        </Text>
                    </View>
                    <Text> </Text>
                    <Text> </Text>
                    <View style={{flex:0.5, justifyContent:'flex-end'}}>
                        <Text style={{color:'#808080', fontSize:17}}>
                            Ingresa tu numero de teléfono
                        </Text>
                    </View>
                    <View style={{flex:1, flexDirection:'row', paddingTop:10}}>
                        <View style={{paddingEnd:10, justifyContent:'center'}}>
                            <Text style={{fontSize:15}}>
                                +54 9
                            </Text>
                        </View>
                        <View style={{paddingEnd:10}}>
                            <TextInput 
                            placeholder='Cód. de Aréa' 
                            style={{width:80, 
                            height:35, 
                            backgroundColor:'#ccc', 
                            paddingBottom:10, 
                            borderRadius:10}}
                            keyboardType='numeric'/>
                        </View>
                        <View>
                            <TextInput
                            placeholder='Número' 
                            style={{width:100, 
                            height:35, 
                            backgroundColor:'#ccc', 
                            borderRadius:10}}
                            keyboardType='numeric'/>
                        </View>
                    </View>
                </View>
                <Text> </Text>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <View style={{flex:1}}>
                            <TouchableOpacity style={{
                                    borderRadius:10, 
                                    alignItems:'center', 
                                    justifyContent:'center', 
                                    backgroundColor:'orange', 
                                    height:40, 
                                    width:250}}
                                    onPress={()=> navigation.navigate('segDato')}> 
                                <Text style={{color:'#eee'}}> Enviar código </Text>
                            </TouchableOpacity>
                        </View>
                        <Text> </Text>
                        <View style={{flex:1, justifyContent:'center'}}>
                            <Text style={{color:'#808080'}}>Ingresa el Texto que Resiviste</Text>
                        </View>
                    </View>
                    <Text> </Text>
                    <View style={{flex:1, alignItems:'flex-start'}}>
                        <TouchableOpacity style={{
                                    borderRadius:10, 
                                    alignItems:'center', 
                                    justifyContent:'center', 
                                    backgroundColor:'orange', 
                                    height:40, 
                                    width:250}}
                                    onPress={()=> navigation.navigate('Datos')}> 
                            <Text style={{color:'#eee'}}> Validar código </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};


export default Registrar;