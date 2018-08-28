import { AsyncStorage } from 'react-native';

// using for tokens. 

const deviceStorage = {

  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

};

module.exports = deviceStorage;