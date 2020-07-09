// Typings
import { Validation } from '~/typings';

// Helpers
export const isEmail = (email: string): boolean => {
	const emailRegExp = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegExp.test(String(email).toLowerCase());
};

export const isWithinAllowedMaxLength = (testingTarget: string, maxLength = 50): boolean => {
	return testingTarget.length <= maxLength;
};

export const isWithinAllowedMinLength = (testingTarget: string, minLength = 2): boolean => {
	return testingTarget.length >= minLength;
};

// Validations
export const emailValidation: Validation[] = [
	{ callback: isEmail, errorMsg: 'Debes ingresar un email válido' },
	{
		callback: isWithinAllowedMaxLength,
		errorMsg: 'El email no puede tener más de 50 caracteres',
	},
];

export const aliasValidation: Validation[] = [
	{
		callback: isWithinAllowedMaxLength,
		errorMsg: 'Tu nombre de usuario no puede tener más de 50 caracteres',
	},
];

export const passwordValidation: Validation[] = [
	{
		callback: (value: string) => isWithinAllowedMinLength(value, 6),
		errorMsg: 'La contraseña debe tener al menos 6 caracteres',
	},
];
