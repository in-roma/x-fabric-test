import React, { useState } from 'react';

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

	return (
		<div className="form_page">
			{!validate && (
				<form onSubmit={handlingSubmit}>
					<label>
						Prénom:
						<input
							type="text"
							placeholder="."
							onChange={onChange}
							name="firstName"
							autoComplete="off"
							value={infos.firstName}
						></input>
					</label>
					{missingField &&
						infos.firstName.length < 1 &&
						displayErrorMessage('Prénom')}
					<label>
						Nom:
						<input
							type="text"
							placeholder="."
							onChange={onChange}
							name="lastName"
							autoComplete="off"
							value={infos.lastName}
						></input>
					</label>
					{missingField &&
						infos.lastName.length < 1 &&
						displayErrorMessage('Nom de Famille')}
					<label>
						Email:
						<input
							type="email"
							placeholder="."
							onChange={onChange}
							name="email"
							autoComplete="off"
							value={infos.email}
						></input>
					</label>
					{missingField &&
						infos.email.length < 1 &&
						displayErrorMessage('Email')}
					<label>
						Téléphone:
						<input
							type="text"
							placeholder="."
							onChange={onChange}
							name="phone"
							autoComplete="off"
							value={infos.phone}
						></input>
					</label>
					<button type="submit">Valider</button>
				</form>
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
		</div>
	);
}
