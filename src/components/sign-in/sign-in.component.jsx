import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {
	SignInContainer,
	TitleContainer,
	ButtonsContainer
} from './sign-in.styles';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}
	
	handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({email: "", password: ""});
		} catch (err) {
			console.log(err);
		}
	}

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	}

	render() {
		return (
			<SignInContainer>
				<TitleContainer>I already have an account</TitleContainer>
				<span>Sign in with your email and password</span>
				
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						type="email" 
						name="email" 
						value={this.state.email} 
						required 
						label="Email"
						handleChange={this.handleChange}
					/>
					<FormInput 
						type="password" 
						name="password" 
						value={this.state.password} 
						required
						label="Password"
						handleChange={this.handleChange}
					/>
					<ButtonsContainer>
						<CustomButton type="submit">Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign In With Google
						</CustomButton>	
					</ButtonsContainer>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;
