import React, { useEffect } from 'react'
import {View, Text, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackActions } from '@react-navigation/native'

const Splash = ({props, navigation}) => {
    /* const {navigation } = props; */
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
};
export default Splash;