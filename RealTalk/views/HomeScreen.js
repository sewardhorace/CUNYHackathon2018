import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
        <Button
          title="Go to Chat"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
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
