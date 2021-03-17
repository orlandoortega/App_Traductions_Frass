import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Button extends Component{
    static propTypes = {
        label: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired,
    }
    render() {
        const { label, action } = this.props;
        return(
            <TouchableOpacity style={styles.btn} onPress={action}>
                <Text style={styles.btntex}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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
  });

export default Button;