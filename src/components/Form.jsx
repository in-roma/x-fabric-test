import React, { useState } from 'react';
import styled from 'styled-components';

export default function Form() {
	const initialState = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
	};

	const [infos, setInfos] = useState(initialState);
	const [validate, setValidate] = useState(false);
	const [missingField, setMissingField] = useState(false);

	// Datafields
	const onChange = (event) => {
		let { name, value } = event.target;
		setInfos((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// Submitting the fields & error message
	const handlingSubmit = (event) => {
		if (
			Object.values(infos)
				.slice(0, -1)
				.every((item) => item.length > 1)
		) {
			setValidate(true);
			setMissingField(false);
		} else {
			event.preventDefault();
			setValidate(false);
			setMissingField(true);
		}
	};

	const displayErrorMessage = (field) => {
		return <span>{field} doit être renseigné</span>;
	};

	// Resetting the form
	const handlingReset = () => {
		setInfos(initialState);
		setValidate(false);
	};

	// Layout (styled components)
	const FormPage = styled.section`
		poistion: relative;
		margin: 10vh 10vw 10vh 10vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`;

	const Header = styled.section``;

	const Form = styled.form`
		display: grid;
		row-gap: 2rem;
	`;

	const Label = styled.label`
		margin-left: 0.5rem;
	`;

	const Input = styled.input`
		margin-left: 1rem;
	`;

	const Footer = styled.section`
		position: absolute;
		bottom: 0;
		font-size: 0.8rem;
	`;

	return (
		<FormPage>
			<Header>
				<img src="../../public/LogoX-Tract.png" alt="logo X-Tract" />
				<span>Formulaire X-Tract</span>
			</Header>
			{!validate && (
				<Form onSubmit={handlingSubmit}>
					<Label>
						Prénom:
						<Input
							type="text"
							placeholder="."
							onChange={onChange}
							name="firstName"
							autoComplete="off"
							value={infos.firstName}
						></Input>
					</Label>
					{missingField &&
						infos.firstName.length < 1 &&
						displayErrorMessage('Prénom')}
					<Label>
						Nom:
						<Input
							type="text"
							placeholder="."
							onChange={onChange}
							name="lastName"
							autoComplete="off"
							value={infos.lastName}
						></Input>
					</Label>
					{missingField &&
						infos.lastName.length < 1 &&
						displayErrorMessage('Nom de Famille')}
					<Label>
						Email:
						<Input
							type="email"
							placeholder="."
							onChange={onChange}
							name="email"
							autoComplete="off"
							value={infos.email}
						></Input>
					</Label>
					{missingField &&
						infos.email.length < 1 &&
						displayErrorMessage('Email')}
					<Label>
						Téléphone:
						<Input
							type="text"
							placeholder="."
							onChange={onChange}
							name="phone"
							autoComplete="off"
							value={infos.phone}
						></Input>
					</Label>
					<button type="submit">Valider</button>
				</Form>
			)}
			{validate && (
				<div className="results">
					<ul>
						<li>
							<span>Prénom:</span>
							<span>{infos.firstName}</span>
						</li>
						<li>
							<span>Nom:</span>
							<span>{infos.lastName}</span>
						</li>
						<li>
							<span>Email:</span>
							<span>{infos.email}</span>
						</li>
						<li>
							<span>Mobile:</span>
							<span>{infos.phone}</span>
						</li>
					</ul>
					<button type="submit" onClick={handlingReset}>
						Reset
					</button>
				</div>
			)}
			<Footer>Copyright © 2021 X-Tract. Tout droit réservé.</Footer>
		</FormPage>
	);
}
