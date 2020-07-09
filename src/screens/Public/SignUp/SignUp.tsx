import React, { useState } from 'react';

// Components
import { Button, Container, Content, Image, TextInput } from '!';
import { TouchListener } from './SignUp.Styles';

// Assets
import Logo from '#/img/logo.png';

// Hooks
import { useFormInput } from '~/hooks';

// Validation helpers
import { aliasValidation, emailValidation, passwordValidation } from '~/utils';

export const SignUp = () => {
	// Local State
	const {
		inputValue: email,
		setValue: setEmail,
		hasError: emailHasError,
		errorMessage: emailErrorMessage,
		setError: setEmailError,
		validate: validateEmail,
	} = useFormInput('', emailValidation);
	const {
		inputValue: alias,
		setValue: setAlias,
		hasError: aliasHasError,
		errorMessage: aliasErrorMessage,
		setError: setAliasError,
		validate: validateAlias,
	} = useFormInput('', aliasValidation);
	const {
		inputValue: password,
		setValue: setPassword,
		hasError: passwordHasError,
		errorMessage: passwordErrorMessage,
		validate: validatePassword,
	} = useFormInput('', passwordValidation);
	const {
		inputValue: passwordConfirmation,
		setValue: setPasswordConfirmation,
		hasError: passwordConfirmationHasError,
		errorMessage: passwordConfirmationErrorMessage,
		setError: setPasswordError,
		validate: validatePasswordConfirm,
	} = useFormInput('', passwordValidation);
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
						errorMessage={emailErrorMessage}
						hasError={emailHasError}
						keyboardType="default"
						label="Tu Email"
						marginTop={40}
						onBlur={validateEmail}
						onChangeText={setEmail}
						placeholder="usuario@ejemplo.com"
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

					<Button variant="primary" isBlock onPress={() => console.log('Pressed!')} marginTop={40}>
						Continuar
					</Button>
				</Content>
			</TouchListener>
		</Container>
	);
};
