import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: ""
		};
	}
	
	handleSubmit = (e) => {
		e.preventDefault();

		this.setState({email: "", password: ""});
	}

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	}

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
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

					<input type="submit" value="Submit Form" />
				</form>
			</div>
		);
	}
}

export default SignIn;
