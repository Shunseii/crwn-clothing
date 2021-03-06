import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import {
	SignUpContainer,
	TitleContainer
} from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	
	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		signUpStart({email, password, displayName});
	}

	const handleChange = (e) => {
		const { name, value } = e.target;

		setCredentials({ ...userCredentials, [name]: value });
	}

	return (
		<SignUpContainer>
			<TitleContainer>I do not have an account</TitleContainer>
			<span>Sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput 
					type="text" 
					name="displayName" 
					value={displayName}
					label="Display Name"
					onChange={handleChange}
					required
				/>
				<FormInput 
					type="email" 
					name="email" 
					value={email}
					label="Email"
					onChange={handleChange}
					required
				/>
				<FormInput 
					type="password" 
					name="password" 
					value={password} 
					label="Password"
					onChange={handleChange}
					required
				/>
				<FormInput 
					type="password"
					name="confirmPassword" 
					value={confirmPassword}
					label="Confirm Password"
					onChange={handleChange}
					required
				/>
				<CustomButton type="submit">SIGN UP</CustomButton>
			</form>
		</SignUpContainer>
	);
}	

const mapDispatchToProps = dispatch => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
