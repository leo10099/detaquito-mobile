import React, { useState } from 'react';

// Components
import { Button, Container, Content, Image, TextInput } from '!';
import { TouchListener } from './SignUp.Styles';

// Assets
import Logo from '#/img/logo.png';

export const SignUp = () => {
	// Local State
	const [isAliasPopoverOpen, setIsAliasPopoverOpen] = useState(false);
	const [isPasswordPopoverOpen, setIsPasswordPopoverOpen] = useState(false);

	// Handlers
	const onWrapperClickHandler = (): void => {
		if (isAliasPopoverOpen === true) {
			setIsAliasPopoverOpen(false);
			return;
		}
		if (isPasswordPopoverOpen === true) setIsPasswordPopoverOpen(false);
	};

	return (
		<Container>
			<TouchListener onTouchStart={onWrapperClickHandler}>
				<Content>
					<Image source={Logo} width={120} heigth={80} />
					<TextInput
						autoCompleteType="email"
						elevation={isAliasPopoverOpen ? 0 : 4}
						keyboardType="default"
						label="Tu Email"
						marginTop={40}
						placeholder="usuario@ejemplo.com"
						hasError
						errorMessage="Prueba"
					/>
					<TextInput
						autoCompleteType="username"
						elevation={isPasswordPopoverOpen ? 0 : 4}
						isPopoverVisible={isAliasPopoverOpen}
						keyboardType="default"
						label="Tu nombre de usuario"
						marginTop={40}
						placeholder="Nombre"
						popoverPressHandler={setIsAliasPopoverOpen}
						popoverText="Con este nombre aparecerás en las tablas de posiciones"
					/>
					<TextInput
						autoCompleteType="password"
						label="Tu contraseña"
						marginTop={40}
						placeholder="Contraseña"
						keyboardType="default"
						popoverPressHandler={setIsPasswordPopoverOpen}
						isPopoverVisible={isPasswordPopoverOpen}
						popoverText="La contraseña debe tener al menos 6 caracteres"
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
			</TouchListener>
		</Container>
	);
};
