import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './StyleSheet'

export default class SignupScreen extends Component {
  static navigationOptions = {
    title: 'Signup',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'dodgerblue'
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Choose Username' style={styles.login}/>
        <TextInput placeholder='Choose Password' style={styles.login}/>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('Main')
        }} style={styles.button}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    )
  }
}