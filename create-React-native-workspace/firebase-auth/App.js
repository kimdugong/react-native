import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from "./components/SignInForm";

export default class App extends React.Component {
  componentDidMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyD52bOxTEgaGSHlkn9q9Etjj10oefZiGN8",
      authDomain: "spot27-firebase.firebaseapp.com",
      databaseURL: "https://spot27-firebase.firebaseio.com",
      projectId: "spot27-firebase",
      storageBucket: "spot27-firebase.appspot.com",
      messagingSenderId: "382246056463"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm/>
        <SignInForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
