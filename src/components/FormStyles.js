import styled from 'styled-components';

// Layout (styled components)

export const FormPage = styled.section`
	poistion: relative;
	margin: 2vh 4vw 4vh 4vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.section`
	width: 32rem;
	height: 10vh;
	margin-top: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
	font-size: 2 rem;

	border-top: 1px solid #eff7e1;
	border-bottom: 1px solid #eff7e1;
`;

export const TextHeader = styled.span`
	margin-top: 0rem;
	font-size: 1.8rem;
	font-weight: 600;
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
	row-gap: 2.8rem;
`;

export const Label = styled.label`
	width: 6rem;
	font-weight: 600;
	grid-column: 1 / 2;
`;

export const Field = styled.label`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const Input = styled.input`
	width: 100%;
	border: none;
	outline: none;
	border-bottom: 1px solid #eff7e1;
	grid-column: 2/ 3;
`;

export const ErrorMessage = styled.span`
	witdh: 16rem;
	font-size: 0.6rem;
	color: black;
	margin-top: 1rem;
`;

export const Button = styled.button`
	justify-self: center;
	grid-column: 1 / 3;
	margin-top: 4rem;
	width: 8.68rem;
	height: 2.4rem;
	border-radius: 5px;
	background-color: #a00;
	background-image: linear-gradient(132deg, red, #a00);
	color: #fff;
	font-size: 12px;
	font-weight: 600;
	cursor: pointer;
	display: inline-block;
	padding: 9px 15px;
	border: 0;
	line-height: inherit;
	text-decoration: none;
	&:hover {
		background-color: white;
		background-image: none;
		color: #a00;
		border: 2px solid #a00;
	}
`;

export const DataList = styled.ul`
	width: 32rem;
	height: 100%;
	margin: 4rem 0 4rem 0;
	padding: 0;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: repeat(5, 1.4rem);
	justify-items: start;
	row-gap: 2.8rem;
	list-style-type: none;
`;

export const DataItem = styled.li`
	width: 100%;
	text-decoration: none;
	grid-column: 1/2;
	margin-block-start: 0;
	& ::first-word {
		font-weight: 800;
	}
`;

export const Footer = styled.section`
	position: absolute;
	bottom: 0;
	font-size: 0.8rem;
	margin-bottom: 2rem;
`;

export const Logo = styled.img`
	height: 2rem;
`;
