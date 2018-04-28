import React from 'react';
import { StackNavigator } from 'react-navigation';
import { HomeScreen } from './views/HomeScreen.js';
import { ProfileScreen } from './views/ProfileScreen.js';
import { ChatScreen } from './views/ChatScreen.js';

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Chat: {
      screen: ChatScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}