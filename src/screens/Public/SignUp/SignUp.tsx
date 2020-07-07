import React from 'react';

// Components
import { Button, Container, Content, Image, TextInput } from '!';

// Assets
import Logo from '#/img/logo.png';

export const SignUp = () => {
	return (
		<Container>
			<Content>
				<Image source={Logo} width={120} heigth={80} />

				<TextInput
					autoCompleteType="email"
					label="Tu Email"
					marginTop={40}
					placeholder="usuario@ejemplo.com"
					keyboardType="default"
				/>
				<TextInput
					autoCompleteType="username"
					label="Tu nombre de usuario"
					marginTop={40}
					placeholder="Nombre"
					keyboardType="default"
				/>
				<TextInput
					autoCompleteType="password"
					label="Tu contraseña"
					marginTop={40}
					placeholder="Contraseña"
					keyboardType="default"
				/>
				<TextInput
					autoCompleteType="password"
					label="Confirma tu contraseña"
					placeholder="Contraseña"
					keyboardType="default"
					marginTop={40}
				/>

				<Button variant="primary" isBlock onPress={() => console.log('Pressed!')}>
					Continuar
				</Button>
			</Content>
		</Container>
	);
};
