import React from 'react';
import PropTypes from 'prop-types';
import styled from '~/styles';
import { useTheme } from 'styled-components/native';
import { ThemeInterface } from '~/theme';

interface TextInputProps {
	autoCompleteType: 'password' | 'username' | 'email' | 'name';
	keyboardType: 'default' | 'number-pad' | 'numeric' | 'email-address';
	label?: string;
	maxLength?: number;
	marginBottom?: number;
	marginTop?: number;
	minLenght?: number;
	onBlur?: () => void;
	onChange?: () => void;
	onChangeText?: () => void;
	onFocus?: () => void;
	placeholder?: string;
	textAlign?: 'center' | 'left' | 'right';
}

const InputContainer = styled.View<TextInputProps>`
	align-content: center;
	align-items: center;
	flex: 1;
	flex-wrap: wrap;
	height: 100%;
	justify-content: space-between;
	margin-bottom: ${({ marginBottom }) => marginBottom}px;
	margin-top: ${({ marginTop }) => marginTop}px;
	max-width: 300px;
	width: 100%;
`;

const BaseTextInput = styled.TextInput<TextInputProps>`
	background-color: ${({ theme }) => theme.background};
	border-radius: 4px;
	border-width: 1.4px;
	border-color: ${({ theme }) => theme.primaryLight};
	height: 50px;
	max-width: 300px;
	padding: 0 20px 0 10px;
	position: relative;
	width: 100%;
`;

export const Label = styled.Text`
	align-self: flex-start;
	color: ${({ theme }) => theme.elevation6};
	font-size: 16px;
	letter-spacing: 1.1px;
	padding-bottom: 10px;
`;

export const TextInput: React.FC<TextInputProps> = ({
	autoCompleteType,
	keyboardType,
	label,
	maxLength,
	marginBottom,
	marginTop,
	minLenght,
	onBlur,
	onChange,
	onChangeText,
	onFocus,
	placeholder,
	textAlign,
}) => {
	const theme = useTheme() as ThemeInterface;

	return (
		<InputContainer marginBottom={marginBottom} marginTop={marginTop}>
			<Label>{label}</Label>
			<BaseTextInput
				autoCompleteType={autoCompleteType}
				autoCorrect={false}
				keyBoardType={keyboardType}
				maxLength={maxLength}
				minLenght={minLenght}
				onBlur={onBlur}
				onChange={onChange}
				onChangeText={onChangeText}
				onFocus={onFocus}
				placeholder={placeholder}
				placeholderTextColor={theme.name === 'dark' ? theme.elevation5 : theme.elevation4}
				textAlign={textAlign}
				elevation={4}
			/>
		</InputContainer>
	);
};

TextInput.propTypes = {
	autoCompleteType: PropTypes.oneOf<TextInputProps['autoCompleteType']>([
		'password',
		'username',
		'email',
		'name',
	]).isRequired,
	keyboardType: PropTypes.oneOf<TextInputProps['keyboardType']>([
		'default',
		'number-pad',
		'numeric',
		'email-address',
	]).isRequired,
	label: PropTypes.string,
	marginBottom: PropTypes.number,
	marginTop: PropTypes.number,
	maxLength: PropTypes.number,
	minLenght: PropTypes.number,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onChangeText: PropTypes.func,
	onFocus: PropTypes.func,
	placeholder: PropTypes.string,
	textAlign: PropTypes.oneOf<TextInputProps['textAlign']>(['left', 'center', 'right']),
};

TextInput.defaultProps = {
	maxLength: 200,
	marginBottom: 0,
	marginTop: 0,
	minLenght: 0,
	onBlur: () => null,
	onChange: () => null,
	onChangeText: () => null,
	onFocus: () => null,
	placeholder: '',
	textAlign: 'left',
};
