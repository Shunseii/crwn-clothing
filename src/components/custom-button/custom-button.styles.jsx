import styled, { css } from 'styled-components';

const buttonStyles = css`
	color: white;
	border: none;
	background-color: black;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;
	
	&:hover {	
		background-color: black;
		color: white;
		border: none;
	}
`;

const googleSignInStyles = css`
	border: none;
	background-color: #4285F4;
	color: white;

	&:hover {
		background-color: #357ae8;
	}
`;

const getButtonStyles = props => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	justify-content: center;

	${getButtonStyles}
`;
