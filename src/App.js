import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = {
		loggedIn: null,
	};
	// first accesses data on firebase server
	componentWillMount() {
		console.log(this.state);
		firebase.initializeApp({
			apiKey: 'AIzaSyAwcvQWEnu4m2c96ipGRwm8tty3zhYJ4SY',
			authDomain: 'auth-55d93.firebaseapp.com',
			databaseURL: 'https://auth-55d93.firebaseio.com',
			projectId: 'auth-55d93',
			storageBucket: 'auth-55d93.appspot.com',
			messagingSenderId: '38212697625',
		});
		// lets user know they're signed in or out
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<View style={styles.logOutButtonStyle}>
						<Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
					</View>
				);
			case false:
				return <LoginForm />;
			default:
				return (
					<View style={styles.renderContentStyle}>
						<Spinner size="large" />
					</View>
				);
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	renderContentStyle: {
		paddingTop: 250,
	},
	logOutButtonStyle: {
		flexDirection: 'row',
	},
};
export default App;
