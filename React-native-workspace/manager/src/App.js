import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyBwQ2WQ1XzakDP98wXPswLNetLleJEDYPg',
      authDomain: 'manager-5983d.firebaseapp.com',
      databaseURL: 'https://manager-5983d.firebaseio.com',
      projectId: 'manager-5983d',
      storageBucket: 'manager-5983d.appspot.com',
      messagingSenderId: '954217323797'
    };
    firebase.initializeApp(config)
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store= {store}>
        <Router/>
      </Provider>
    );
  };
}

export default App;
