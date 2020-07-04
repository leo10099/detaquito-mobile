import React from 'react';

// Components
import { Button, Image, TextInput } from '!';
import { Container } from './SignUp.Styles';

// Assets
import Logo from '#/img/logo.png';

export const SignUp = () => {
	return (
		<Container>
			<Image source={Logo} width={120} heigth={80} />
			<TextInput autoCompleteType="email" placeholder="E-mail" keyboardType="default" />
			<TextInput
				autoCompleteType="username"
				placeholder="usuario@ejemplo.com"
				keyboardType="default"
			/>
			<TextInput autoCompleteType="password" placeholder="Contraseña" keyboardType="default" />
			<TextInput autoCompleteType="password" placeholder="Contraseña" keyboardType="default" />

			<Button variant="primary" isBlock>
				Continuar
			</Button>
		</Container>
	);
};
