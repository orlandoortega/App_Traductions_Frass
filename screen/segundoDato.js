import React from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CheckBox } from 'react-native-elements';

const segDato = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <ScrollView>
                <View style={{flex:1}}>
                    <View style={{flex:2, paddingTop:5}}>
                        <CheckBox 
                        uncheckedColor='orange' 
                        checkedColor ='green' 
                        containerStyle={{backgroundColor:'transparent', width:270, height:30}} 
                        title='Cedula Nacional' 
                        checkedIcon='dot-circle-o' 
                        uncheckedIcon='circle-o'/>
                        <CheckBox 
                        uncheckedColor='orange' 
                        checkedColor ='green' 
                        containerStyle={{backgroundColor:'transparent', height:30}} 
                        title='Cedula Extranjero' 
                        checkedIcon='dot-circle-o' 
                        uncheckedIcon='circle-o'/>
                    </View>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center', paddingTop:30}}>
                        <TextInput style={{
                                height:40,
                                width:250, 
                                backgroundColor:'#ccc', 
                                borderRadius:10,
                                fontSize:15
                                }}
                                keyboardType='numeric'
                                placeholder="     Número"/>
                    </View>
                    <View style={{flex:2}}>
                        <View style={{ flexDirection:'row', justifyContent:'space-evenly', paddingTop:20}}>
                            <View style={{paddingLeft:22, flex:1}}>
                                <Text style={{color:'#808080'}}>Frente</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{color:'#808080'}}>Dorso</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection:'row', justifyContent:'space-evenly', paddingTop:10}}>
                            <View style={{paddingLeft:22, flex:1}}>
                                <View style={{backgroundColor:'#ccc', width:45, height:45, alignItems:'center',justifyContent:'center', borderRadius:5}}>
                                    <TouchableOpacity>
                                        <Icon name="camera" size={30} color="#808080"/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{backgroundColor:'#ccc', width:45, height:45, alignItems:'center',justifyContent:'center', borderRadius:5}}>
                                    <TouchableOpacity>
                                        <Icon name="camera" size={30} color="#808080"/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:1, paddingLeft:22}}>
                    <View style={{flex:0.5, paddingTop:15}}>
                        <Text style={{color:'#808080'}}>
                            Carnet de Conducir
                        </Text>
                    </View>
                    <View style={{flex:2, paddingTop:5}}>
                        <View style={{ flexDirection:'row', justifyContent:'space-evenly'}}>
                            <View style={{ flex:1}}>
                                <Text style={{color:'#808080'}}>Frente</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Text style={{color:'#808080'}}>Dorso</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection:'row', justifyContent:'space-evenly', paddingTop:10}}>
                            <View style={{ flex:1}}>
                                <View style={{backgroundColor:'#ccc', width:45, height:45, alignItems:'center',justifyContent:'center', borderRadius:5}}>
                                    <TouchableOpacity>
                                        <Icon name="camera" size={30} color="#808080"/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{backgroundColor:'#ccc', width:45, height:45, alignItems:'center',justifyContent:'center', borderRadius:5}}>
                                    <TouchableOpacity>
                                        <Icon name="camera" size={30} color="#808080"/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:2, paddingTop:5}}>
                        <View style={{ flexDirection:'row', justifyContent:'space-evenly'}}>
                            <View style={{ flex:1}}>
                                <Text style={{color:'#808080'}}>Foto de Perfil</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection:'row', justifyContent:'space-evenly', paddingTop:10}}>
                            <View style={{ flex:1}}>
                                <View style={{backgroundColor:'#ccc', width:40, height:40, alignItems:'center',justifyContent:'center', borderRadius:5}}>
                                    <TouchableOpacity>
                                        <Icon name="camera" size={25} color="#808080"/>
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
export default segDato;