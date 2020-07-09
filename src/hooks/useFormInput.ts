import { useCallback, useState } from 'react';

// Typings
import { Validation } from '~/typings';
import { TextInputProps } from 'react-native';

export const useFormInput = (initialValue: string, validation?: Validation[]) => {
	let validate;
	const [hasError, setHasError] = useState(false);
	const [inputValue, setInputValue] = useState(initialValue);
	const [errorMessage, setErrorMessage] = useState('');

	const resetError = (): void => {
		setErrorMessage('');
		setHasError(false);
	};

	const setError = (message: string): void => {
		if (message === '') {
			resetError();
		} else {
			setErrorMessage(message);
			setHasError(true);
		}
	};

	const setValue = useCallback(
		(newValue: string) => {
			setErrorMessage('');
			setHasError(false);
			setInputValue(newValue);
		},
		[setInputValue]
	);

	if (validation) {
		validate = function (input: any) {
			let result;

			validation.forEach(({ callback: validationFunction, errorMsg }) => {
				if (typeof input === 'string' && validationFunction(input) === false) {
					result = false;
					setErrorMessage(errorMsg);
					return result;
				}
				if (typeof input !== 'string' && validationFunction(input.nativeEvent.text) === false) {
					result = false;
					setErrorMessage(errorMsg);
				}
				return null;
			});

			if (result === false) {
				setHasError(true);
			} else {
				setHasError(false);
			}
		};
	}

	return { inputValue, setValue, hasError, errorMessage, setError, validate };
};
