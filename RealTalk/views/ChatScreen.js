
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import Backend from '../src/Backend';

export class ChatScreen extends React.Component {
    static navigationOptions = {
    title: 'Max' //this.props.name
  };
    state = {
      messages: [],
    };
    componentWillMount(){

    }
    render() {
        return (
        <GiftedChat
        messages = {this.state.messages}
        onSend = {(message)=> {
            Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          name:"Max"// this.props.name,
        }}
        />
        );
    }


    componentDidMount() {
        Backend.loadMessages((message) => {
            this.setState((previousState)=> {
                return {
                    messages: GiftedChat.append(previousState.messages, message),
                };
            });
        });
    }

    componentWillUnmount() {
        Backend.closeChat();
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
