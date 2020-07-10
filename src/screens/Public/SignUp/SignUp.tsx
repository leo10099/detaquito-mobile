import React, { useRef, useState } from 'react';

// Components
import { Button, Container, Content, Image, TextInput } from '!';
import { TouchListener } from './SignUp.Styles';

// Assets
import Logo from '#/img/logo.png';

// Hooks
import { useFormInput } from '~/hooks';

// Validation helpers
import { aliasValidation, emailValidation, passwordValidation } from '~/utils';

import { TextInput as Input, Keyboard } from 'react-native';

export const SignUp = () => {
	// Refs
	const aliasRef = useRef<Input>(null);
	const passwordRef = useRef<Input>(null);
	const confirmPasswordRef = useRef<Input>(null);

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

	const onEmailReady = (): void => {
		const isValid = validateEmail(email);
		if (isValid && aliasRef.current) aliasRef.current.focus();
	};

	const onAliasReady = (): void => {
		const isValid = validateAlias(alias);
		if (isValid && passwordRef.current) passwordRef.current.focus();
	};

	const onPasswordReady = () => {
		const isValid = validatePassword(password);
		if (isValid && confirmPasswordRef.current) confirmPasswordRef.current.focus();
	};

	const onConfirmPasswordReady = () => {
		Keyboard.dismiss();
		const isValid = validatePasswordConfirm(passwordConfirmation);
		if (isValid && password !== passwordConfirmation)
			setPasswordError('Las contraseñas no coinciden');
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
						keyboardType="email-address"
						label="Tu Email"
						marginTop={40}
						onBlur={validateEmail}
						onChangeText={setEmail}
						onSubmitEditing={onEmailReady}
						placeholder="usuario@ejemplo.com"
						returnKeyType="next"
					/>
					<TextInput
						autoCompleteType="username"
						elevation={isPasswordPopoverOpen ? 0 : 4}
						errorMessage={aliasErrorMessage}
						hasError={aliasHasError}
						inputRef={aliasRef}
						isPopoverVisible={isAliasPopoverOpen}
						keyboardType="default"
						label="Tu nombre de usuario"
						marginTop={40}
						onBlur={validateAlias}
						onChangeText={setAlias}
						onSubmitEditing={onAliasReady}
						placeholder="Nombre"
						popoverPressHandler={setIsAliasPopoverOpen}
						popoverText="Con este nombre aparecerás en las tablas de posiciones"
						returnKeyType="next"
					/>
					<TextInput
						autoCompleteType="password"
						errorMessage={passwordErrorMessage}
						hasError={passwordConfirmationHasError || passwordHasError}
						inputRef={passwordRef}
						isPopoverVisible={isPasswordPopoverOpen}
						isSecureTextEntry
						keyboardType="default"
						label="Tu contraseña"
						marginTop={40}
						onBlur={validatePassword}
						onChangeText={setPassword}
						onSubmitEditing={onPasswordReady}
						placeholder="Contraseña"
						popoverPressHandler={setIsPasswordPopoverOpen}
						popoverText="La contraseña debe tener al menos 6 caracteres"
					/>
					<TextInput
						autoCompleteType="password"
						errorMessage={passwordConfirmationErrorMessage}
						hasError={passwordConfirmationHasError}
						inputRef={confirmPasswordRef}
						isSecureTextEntry
						keyboardType="default"
						label="Confirma tu contraseña"
						marginTop={40}
						onBlur={onConfirmPasswordReady}
						onChangeText={setPasswordConfirmation}
						onSubmitEditing={onConfirmPasswordReady}
						placeholder="Contraseña"
						returnKeyType="send"
					/>

					<Button variant="primary" isBlock onPress={() => console.log('Pressed!')} marginTop={40}>
						Continuar
					</Button>
				</Content>
			</TouchListener>
		</Container>
	);
};
