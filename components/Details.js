import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  }

  render() {
    return (
    <View>
      <Text></Text>
      <Button title='Back to Home' onPress={() => this.props.navigation.navigate('Home')}/>
    </View>
    )
  }
}

export default DetailsScreen;