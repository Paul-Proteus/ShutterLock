import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import deviceStorage from './deviceStorage.js'; // attempting to use for tokens. 

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Enter Account Name Here',
      password: 'Enter Password Here',
    }

  }

  login = (e) => {
    const { username, password } = this.state;
    console.log('inside of login ', username, password);

    fetch('http://192.168.0.126:8080/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json"
      },
    }).then(response => {console.log('fetched response ', response);})
      .catch(err => console.log('error ', err));
  }

  signUp = () => {
    const { username, password } = this.state

    fetch('http://192.168.0.126:8080/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => {console.log('fetched response ', response.locals.token);}) 
    .catch(err => console.log('error ', err));
  }


  render() {
    return (

      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <TextInput
          style={{ width: 200, height: 50, backgroundColor: 'powderblue', color: 'white', fontWeight: 'bold' }}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'enter username'}
        />

        <View style={{width: 50, height: 50, backgroundColor: 'white'}} />

        <TextInput 
          style={{ width: 200, height: 50, backgroundColor: 'steelblue'}} 
          secureTextEntry={true} 
          onChangeText={ (password => {this.setState({ password })})}
          placeholder={'enter password'}
        />

        <View 
          style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between' }} />
            <Button
              onPress={() => {this.login()}}
              title="Login"
            />

            <Button
              onPress={() => this.signUp()}
              title="Sign Up"
            />
        <View/>

      </View>
    );
  }
}


