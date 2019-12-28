import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {
	SignInContainer,
	TitleContainer,
	ButtonsContainer
} from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({email: '', password: ''});
	const { email, password } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();

		emailSignInStart(email, password);
	}

	const handleChange = (e) => {
		const { value, name } = e.target;

		setCredentials({...userCredentials, [name]: value });
	}

	return (
		<SignInContainer>
			<TitleContainer>I already have an account</TitleContainer>
			<span>Sign in with your email and password</span>
			
			<form onSubmit={handleSubmit}>
				<FormInput 
					type="email" 
					name="email" 
					value={email} 
					required 
					label="Email"
					handleChange={handleChange}
				/>
				<FormInput 
					type="password" 
					name="password" 
					value={password} 
					required
					label="Password"
					handleChange={handleChange}
				/>
				<ButtonsContainer>
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
						Sign In With Google
					</CustomButton>	
				</ButtonsContainer>
			</form>
		</SignInContainer>
	);
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password})) 
});

export default connect(null, mapDispatchToProps)(SignIn);
