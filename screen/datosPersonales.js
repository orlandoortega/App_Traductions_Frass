import React from 'react';
import {View ,Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';

const datosPersonales = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <ScrollView>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <View style={{
                            alignItems:'center', 
                            justifyContent:'center', 
                            paddingBottom: 12,
                            paddingTop:20
                            }}>
                        <TextInput style={{
                            height:30,
                            width:250, 
                            backgroundColor:'#ccc', 
                            borderRadius:10,
                            fontSize:10
                            }}
                            placeholder="     Nombres"/>
                    </View>
                    <View style={{
                            alignItems:'center', 
                            justifyContent:'center', 
                            paddingBottom: 12
                            }}>
                        <TextInput style={{
                            height:30,
                            width:250, 
                            backgroundColor:'#ccc', 
                            borderRadius:10,
                            fontSize:10
                            }}
                            placeholder="     Apellidos"/>
                    </View>
                    <View style={{
                            alignItems:'center', 
                            justifyContent:'center', 
                            paddingBottom: 12
                            }}>
                        <TextInput style={{
                            height:30,
                            width:250, 
                            backgroundColor:'#ccc', 
                            borderRadius:10,
                            fontSize:10
                            }}
                            placeholder="     Dirección"/>
                    </View>
                    <View style={{  
                            paddingBottom: 12
                            }}>
                        <TextInput style={{
                            height:30,
                            width:250, 
                            backgroundColor:'#ccc', 
                            borderRadius:10,
                            fontSize:10
                            }}
                            placeholder="     Ciudad"/>
                    </View>
                </View>
                <View style={{flex:1.5}}>
                    <View style={{}}>
                        <Text style={{color:'#808080',paddingLeft:50}}>
                            Sexo
                        </Text>
                        <View style={{flexDirection:'row', paddingLeft:30}}>
                            <CheckBox 
                            uncheckedColor='orange' 
                            checkedColor ='green' 
                            containerStyle={{backgroundColor:'transparent'}} 
                            title='Hombre' 
                            checkedIcon='dot-circle-o' 
                            uncheckedIcon='circle-o'/>
                            <CheckBox uncheckedColor='orange' 
                            checkedColor ='green' 
                            containerStyle={{backgroundColor:'transparent'}} 
                            title='Mujer' 
                            checkedIcon='dot-circle-o' 
                            uncheckedIcon='circle-o'/>
                        </View>
                    </View>
                    <View style={{width:280, height:30,paddingLeft:30}}>
                        <View style={{
                            alignItems:'center',
                            borderRadius:10,
                            backgroundColor:'#ccc',
                            flexDirection:'row'}}> 
                            <TextInput style={{
                                flex:1,
                                height:30,
                                width:250, 
                                fontSize:10,
                                }}
                                keyboardType='numeric'
                                placeholder="     Fecha de Nacimiento"/>
                            <TouchableOpacity style={{flex:0.2}}>
                                <Icon name="calendar" size={15} color="#808080"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View>
                            <View style={{paddingTop:10}}>
                                <Text style={{color:'#808080',paddingLeft:50}}>
                                    Vehículo
                                </Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <CheckBox 
                                uncheckedColor='orange' 
                                checkedColor ='green' 
                                containerStyle={{backgroundColor:'transparent',width:90,height:30}} 
                                title='Bicicleta' 
                                checkedIcon='dot-circle-o' 
                                uncheckedIcon='circle-o'/>
                                <CheckBox uncheckedColor='orange' 
                                checkedColor ='green' 
                                containerStyle={{backgroundColor:'transparent',width:80,height:50}} 
                                title='Moto' 
                                checkedIcon='dot-circle-o' 
                                uncheckedIcon='circle-o'/>
                                <CheckBox uncheckedColor='orange' 
                                checkedColor ='green' 
                                containerStyle={{backgroundColor:'transparent', width:80, height:30}} 
                                title='Auto' 
                                checkedIcon='dot-circle-o' 
                                uncheckedIcon='circle-o'/>                            
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{paddingLeft:30}}>
                            <TextInput style={{
                                height:30,
                                width:250, 
                                fontSize:10,
                                backgroundColor:'#ccc',
                                borderRadius:10,
                                }}
                                placeholder="     Patente"/>
                        </View>
                        <View style={{flexDirection:'row', paddingHorizontal:30}}>
                            <Text style={{color:'#808080', paddingVertical:10}}>
                                Foto Patente
                            </Text>
                            <View style={{paddingHorizontal:10}}>
                                <View style={{paddingTop:5}}>
                                    <TouchableOpacity style={{backgroundColor:'#ccc', borderRadius:10, width:25, height:25,alignItems:'center',justifyContent:'center'}}>
                                        <Icon style={{ backgroundColor:'#ccc', 
                                        alignItems:'center', 
                                        justifyContent:'center', 
                                        borderRadius:10
                                        }} 
                                        name="camera" 
                                        size={15} 
                                        color="#808080"/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default datosPersonales;