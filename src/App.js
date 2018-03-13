import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	// first accesses data on firebase server
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAwcvQWEnu4m2c96ipGRwm8tty3zhYJ4SY',
			authDomain: 'auth-55d93.firebaseapp.com',
			databaseURL: 'https://auth-55d93.firebaseio.com',
			projectId: 'auth-55d93',
			storageBucket: 'auth-55d93.appspot.com',
			messagingSenderId: '38212697625',
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
