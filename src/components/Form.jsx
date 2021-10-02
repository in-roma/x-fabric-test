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
	Field,
	Input,
	ErrorMessage,
	Button,
	DataList,
	DataItem,
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
				<TextHeader>
					{validate ? 'VALIDATION' : 'INSCRIPTION'}
				</TextHeader>
			</Header>
			{!validate && (
				<FormSubscrition onSubmit={handlingSubmit}>
					<Label>Prénom:</Label>
					<Field>
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
					</Field>
					<Label>Nom:</Label>
					<Field>
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
					</Field>
					<Label>Email:</Label>
					<Field>
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
					</Field>
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
				<DataList>
					<DataItem>Prénom: {infos.firstName}</DataItem>
					<DataItem>Nom: {infos.lastName}</DataItem>
					<DataItem>Email: {infos.email}</DataItem>
					<DataItem>Mobile: {infos.phone}</DataItem>
					<Button type="submit" onClick={handlingReset}>
						Reset
					</Button>
				</DataList>
			)}
		</FormPage>
	);
}
