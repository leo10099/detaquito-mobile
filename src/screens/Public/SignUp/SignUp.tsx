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

			<TextInput
				autoCompleteType="email"
				marginTop={40}
				placeholder="E-mail"
				keyboardType="default"
			/>
			<TextInput
				autoCompleteType="username"
				marginTop={40}
				placeholder="usuario@ejemplo.com"
				keyboardType="default"
			/>
			<TextInput
				autoCompleteType="password"
				marginTop={40}
				placeholder="Contraseña"
				keyboardType="default"
			/>
			<TextInput
				autoCompleteType="password"
				placeholder="Contraseña"
				keyboardType="default"
				marginTop={40}
			/>

			<Button variant="primary" isBlock onPress={() => console.log('Pressed!')}>
				Continuar
			</Button>
		</Container>
	);
};
