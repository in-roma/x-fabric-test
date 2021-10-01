import styled from 'styled-components';

// Layout (styled components)

export const FormPage = styled.section`
	poistion: relative;
	margin: 4vh 4vw 4vh 4vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.section`
	width: 100%;
	height: 18vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	font-size: 2 rem;
`;

export const Logo = styled.img`
	height: 6rem;
`;

export const TextHeader = styled.span`
	margin-top: 1rem;
	font-size: 1.8rem;
	color: black;
`;

export const FormSubscrition = styled.form`
	width: 32rem;
	height: 100%;
	margin: 4rem 0 4rem 0;
	display: grid;
	grid-template-columns: 7rem auto;
	grid-template-rows: repeat(5, 1.4rem);
	justify-items: start;
	row-gap: 2rem;
`;

export const Label = styled.label`
	width: 6rem;

	font-weight: 600;
	grid-column: 1 / 2;
`;

export const Input = styled.input`
	width: 100%;
	border: none;
	outline: none;
	border-bottom: 1px solid black;
	grid-column: 2/ 3;
`;

export const ErrorMessage = styled.span`
	witdh: 16rem;
	font-size: 0.6rem;
	color: black;
	grid-column: 1/ 3;
`;

export const Button = styled.button`
	justify-self: center;
	grid-column: 1 / 3;
`;

export const Footer = styled.section`
	position: absolute;
	bottom: 0;
	font-size: 0.8rem;
`;
