import React, {Component} from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import styles from './StyleSheet'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    };
  }

  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <View style={styles.container}>
      <Image style={{width: 200, height: 200, marginBottom: 30}} source={{uri: 'https://i.imgur.com/PCVFXZH.png'}}/>
        <TextInput placeholder='Username' style={styles.login} onChangeText={(input) => {
          this.setState({username: input})
        }} value={this.state.username}/>
        <TextInput placeholder='Password' style={styles.login} onChangeText={(input) => {
          this.setState({password: input})
        }} value={this.state.password}/>
        <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Main')}}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Signup')}}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    )
  }
}