import React, {Component} from 'react';
import {View, Text, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import styles from './StyleSheet';

const CameraIcon = (props) => {
  return (
    <Image
    source={{uri: 'https://www.peace.edu/wp-content/uploads/Camera-icon-White-SMALL.png'}}
    style={{width: 42, height: 30, marginRight: 20}}/>
  )
}

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hi'
    }
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Welcome',
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Logout"
          color="#fff"
        />
      ),
      headerRight: <CameraIcon /> 
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => {
          this.props.navigation.navigate('Details')
        }} title='Press'/>
        <TextInput style={styles.input} placeholder='Type here...' onChangeText={(text) => this.setState({text})}/>
        <Text style={styles.text}>
          {this.state.text}
        </Text> 
      </View>
    )
  }
}