import React, { Component, PureComponent } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CustomButton from './component/button';


class App extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleDow = this.handleDow.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleTen = this.handleTen.bind(this);
  }

  handleTen(){
    const { counter: ct} = this.state;
    this.setState({counter: ct + 10});
  }

  handleUp(){
    const {counter: ct} = this.state;
    this.setState({counter: ct + 1});
  }
  handleDow(){
    const {counter: ct} = this.state;
    this.setState({counter: ct - 1});
  }
  handleReset(){
    this.setState({counter: 0 });
  }

  render(){
    const {counter} = this.state;
    return (
      <View style={styles.container}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style= {{color:'red', fontSize:20}}>COMENZANDO CON MI PRIMERA APP</Text>
        </View>
        <View style={styles.subContenedor}>
          <CustomButton label="-" action={this.handleDow}/>
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counter}</Text>
          </View>
          <CustomButton label="+" action={this.handleUp}/>
        </View>
        <View style={styles.newContenedor}>
          <TouchableOpacity style={styles.btnReset} onPress={this.handleReset}>
            <Text style={styles.txtReset}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btndiez} onPress={this.handleTen}>
            <Text style={{color:'red', fontSize:25}}>+ 10</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#2c3e50',
    justifyContent:'center',
  },
  counterContainer: {
    flex: 1,
    alignItems: 'center',
  },
  btnReset: {
    height:50,
    width:'60%',
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:10,
  },
  btndiez: {
    height:50,
    width:'20%',
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
  },
  txtReset: {
    color:'red',
    fontSize: 25,
  },
  btn: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
  },
  btntex: {
    fontSize: 28,
    color: 'red',
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 28,
    color: '#eee',
    fontWeight: 'bold',
  },
  newContenedor: {
    flex:2,
    height: 50,
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop: 20,
  },
  subContenedor: {
    flex: 2,
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection:'row',
  },
});

export default App;