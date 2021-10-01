import React, { useState } from 'react';

// Components & assets
import logo from '../assets/LogoX-Tract.png';
import {
	FormPage,
	Header,
	Logo,
	TextHeader,
	FormSubscrition,
	Label,
	Input,
	ErrorMessage,
	Button,
	Footer,
} from './FormStyles';

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
		return <ErrorMessage>{field} doit être renseigné</ErrorMessage>;
	};

	// Resetting the form
	const handlingReset = () => {
		setInfos(initialState);
		setValidate(false);
	};

	return (
		<FormPage>
			<Header>
				<Logo src={logo} alt="Logo" />

				<TextHeader>Formulaire X-Tract</TextHeader>
			</Header>
			{!validate && (
				<FormSubscrition onSubmit={handlingSubmit}>
					<Label>Prénom:</Label>
					<Input
						type="text"
						placeholder=""
						onChange={onChange}
						name="firstName"
						autoComplete="off"
						value={infos.firstName}
					></Input>
					{missingField &&
						infos.firstName.length < 1 &&
						displayErrorMessage('Prénom')}
					<Label>Nom:</Label>
					<Input
						type="text"
						placeholder=""
						onChange={onChange}
						name="lastName"
						value={infos.lastName}
					></Input>
					{missingField &&
						infos.lastName.length < 1 &&
						displayErrorMessage('Nom de Famille')}
					<Label>Email:</Label>
					<Input
						type="email"
						placeholder=""
						onChange={onChange}
						name="email"
						autoComplete="off"
						value={infos.email}
					></Input>
					{missingField &&
						infos.email.length < 1 &&
						displayErrorMessage('Email')}
					<Label>Téléphone:</Label>
					<Input
						type="text"
						placeholder=""
						onChange={onChange}
						name="phone"
						autoComplete="off"
						value={infos.phone}
					></Input>
					<Button type="submit">Valider</Button>
				</FormSubscrition>
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
					<Button type="submit" onClick={handlingReset}>
						Reset
					</Button>
				</div>
			)}
			<Footer>Copyright © 2021 X-Tract. Tout droit réservé.</Footer>
		</FormPage>
	);
}
