import React, { Component } from 'react';
import { Button, Input, Card, CardSection } from './common';
import { Text } from 'react-native';
import firebase from 'firebase';

class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		error: '',
	};

	onButtonPress() {
		// const { email, password } = this.state;

		firebase
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => {
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.catch(() => {
						this.setState({ error: 'Authenication Failed' });
					});
			});
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>
				<CardSection>
					<Input
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
						secureTextEntry
					/>
				</CardSection>

				<Text style={styles.errorTextStyle}>{this.state.error}</Text>

				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>Login</Button>
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: '#ff0000',
	},
};
export default LoginForm;
