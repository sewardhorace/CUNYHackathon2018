import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import Expo from 'expo';

import { InterestList } from '../components/InterestList.js';
import { Input } from '../components/Input.js';

export class ProfileScreen extends React.Component {
  state = {
    counter: 1,
    interests: [],
  }

  onSubmit = (text) => {
    const {interests} = this.state
    this.setState({
      ...this.state,
      interests: [text, ...interests],
    });
  }

  // async alertIfCameraDisabledAsync() {
  //   const { Permissions } = Expo;
  //   const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
  //   if (status !== 'granted') {
  //     alert('Hey! You might want to enable notifications for my app, they are good.');
  //   }
  // }

  async getCameraAsync() {
    const { Permissions } = Expo;
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      // return Location.getCurrentPositionAsync({enableHighAccuracy: true});
      return {fart: "stinks"};
    } else {
      throw new Error('Location permission not granted');
    }
  }


  onPressImage = () => {
    this.getCameraAsync();
    // this.alertIfCameraDisabledAsync();
    const result = Expo.ImagePicker.launchImageLibraryAsync({mediaTypes: Expo.ImagePicker.MediaTypeOptions.Images});
    
    // let msg = "";
    // for (prop in result) {
    //   msg = msg + " " + prop;
    // }
    // alert(msg);
    //https://github.com/malsapp/react-native-photo-upload
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <TouchableOpacity activeOpacity = { .5 } onPress={this.onPressImage}>
          <Image
            style={styles.image}
            source={{uri: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg'}}
          />
        </TouchableOpacity>
        <Input placeholder="Enter Conversation Topic" onSubmit={this.onSubmit}/>
        <InterestList items={this.state.interests}/>
        
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
  image: {
    width: 100,
    height: 100,
  },
});