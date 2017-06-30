import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements'
import axios from 'axios';

const ROOT_URL = 'https://us-central1-spot27-firebase.cloudfunctions.net';


class SignUpForm extends Component {

  // 이렇게 썼었는데...
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     phone: '',
  //
  //   }
  // }
  // ES7에서 이렇게 바뀜...
  state = { phone: '' };

  // 이것도 ES7에서 이렇게 바뀜...
  // handleSubmit (){
  //
  // }
  // 이렇게 하면 bind(this)를 할필요가 없다.
  // this를 게런티해준다.
  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone })
    } catch (err) {
      console.log(err)
    }
  };

  render() {
    return(
      <View>
        <View style={{ marginBottom: 10 }}>
        <FormLabel>
          Enter Phone Number
        </FormLabel>
        <FormInput
          value = { this.state.phone }
          onChangeText = { phone => this.setState({ phone })}
        />
        </View>

        <Button title="Submit" onPress= { this.handleSubmit }/>
      </View>
    );
  }
}

export default SignUpForm;