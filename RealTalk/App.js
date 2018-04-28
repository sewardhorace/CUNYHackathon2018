import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Butthead',
  };
  render() {
    const { navigate } = this.props.navigation;
    state = {
      counter: 1,
    };
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! {this.state.counter}</Text>
        <Button onPress={()=> this.setState({counter: this.state.counter+= 1})} title="click me"/>
      </View>
    );
  }
}

export const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});


// export default class App extends React.Component {
//   state = {
//     counter: 1,
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app! {this.state.counter}</Text>
//         <Button onPress={()=> this.setState({counter: this.state.counter+= 1})} title="click me"/>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});