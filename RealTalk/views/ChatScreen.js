import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class ChatScreen extends React.Component {
  state = {
    counter: 1,
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Text>Press Button to Increment: {this.state.counter}</Text>
        <Button onPress={()=> this.setState({counter: this.state.counter+= 1})} title="click me"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});