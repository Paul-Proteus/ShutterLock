import {createSwitchNavigator, createStackNavigator} from 'react-navigation';
import HomeScreen from './Home';
import DetailsScreen from './Details';
import ModalScreen from './Modal';
import LoginScreen from './Login';
import SignupScreen from './Signup'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    initialRouteName: 'Login'
  }
)

const FrontStack = createSwitchNavigator(
  {
    Front: LoginStack,
    Main: RootStack
  },
  {
    initialRouteName: 'Front',
  }
)

// const ModalStack = createStackNavigator(
//   {
//     Main: {
//       screen: RootStack,
//     },
//     MyModal: {
//       screen: ModalScreen,
//     },
//   },
//   {
//     mode: 'modal',
//     headerMode: 'none',
//   }
// );

export default FrontStack;
