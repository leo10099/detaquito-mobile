import React from 'react';
import PropTypes from 'prop-types';
import styled from '~/styles';
import Popover, { PopoverMode, PopoverPlacement } from 'react-native-popover-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components/native';
import { gray, ThemeInterface } from '~/theme';
import { Text } from './Text';
import { View, StyleProp, ViewStyle } from 'react-native';

interface BaseInputProps {
	autoCompleteType: 'password' | 'username' | 'email' | 'name';
	elevation?: number;
	keyboardType: 'default' | 'number-pad' | 'numeric' | 'email-address';
	isPopoverVisible?: boolean;
	label?: string;
	maxLength?: number;
	marginBottom?: number;
	marginTop?: number;
	minLength?: number;
	onBlur?: () => void;
	onChange?: () => void;
	onChangeText?: (string) => void;
	onFocus?: () => void;
	placeholder?: string;
	popoverText?: string;
	popoverPressHandler?: (boolean) => void;
	textAlign?: 'center' | 'left' | 'right';
	ref?: React.MutableRefObject<any>;
}

interface ErrorMessageProps {
	hasError?: boolean;
	errorMessage?: string;
}

type TextInputProps = BaseInputProps & ErrorMessageProps;

const InputContainer = styled.View<BaseInputProps>`
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

const BaseTextInput = styled.TextInput<BaseInputProps>`
	background-color: ${({ theme }) => theme.background};
	border-color: ${({ theme }) => theme.primaryLight};
	border-radius: 4px;
	border-width: 1.4px;
	color: ${({ theme }) => theme.elevation7};
	elevation: ${({ elevation }) => elevation};
	height: 50px;
	max-width: 300px;
	padding: 0 20px 0 10px;
	width: 100%;
`;

const Label = styled.Text`
	color: ${({ theme }) => theme.elevation6};
	font-size: 16px;
	letter-spacing: 1.1px;
	margin-right: 6px;
	padding-bottom: 10px;
	text-align: left;
`;

const ErrorMessage = styled.Text<ErrorMessageProps>`
	align-self: flex-start;
	color: ${({ theme }) => theme.error};
	letter-spacing: 0.5px;
	opacity: ${({ hasError }) => (hasError ? 1 : 0)};
	padding-top: 6px;
`;

const popoverArrowStyles = { backgroundColor: 'rgba(48, 48, 48, 0.8)' };

const popoverStyles = {
	backgroundColor: gray.gray600,
	right: 10,
	padding: 18,
	opacity: 0.9,
};

const popoverAnimationConfig = { delay: 0 };

const iconStyle = { top: 3 };

const extraInfoContainer = {
	display: 'flex',
	flexDirection: 'row',
	width: '100%',
} as StyleProp<ViewStyle>;

export const TextInput: React.FC<TextInputProps> = ({
	autoCompleteType,
	elevation,
	errorMessage,
	hasError,
	isPopoverVisible,
	keyboardType,
	label,
	marginBottom,
	marginTop,
	maxLength,
	minLength,
	onBlur,
	onChange,
	onChangeText,
	onFocus,
	placeholder,
	popoverPressHandler,
	popoverText,
	// eslint-disable-next-line react/prop-types
	ref,
	textAlign,
}) => {
	const theme = useTheme() as ThemeInterface;

	const popoverIconPressHandler = () =>
		popoverPressHandler && popoverPressHandler(currentValue => !currentValue);

	return (
		<InputContainer marginBottom={marginBottom} marginTop={marginTop}>
			<View style={extraInfoContainer}>
				<Label>{label}</Label>

				{!!popoverText && (
					<Popover
						animationConfig={popoverAnimationConfig}
						isVisible={isPopoverVisible}
						mode={PopoverMode.TOOLTIP}
						placement={PopoverPlacement.AUTO}
						arrowStyle={popoverArrowStyles}
						popoverStyle={popoverStyles}
						from={
							<Icon
								name="question-circle"
								solid
								onPress={popoverIconPressHandler}
								size={20}
								style={iconStyle}
								color={gray.gray300}
							/>
						}
					>
						<Text color="#fff" weight="bold" size={12} align="center">
							{popoverText}
						</Text>
					</Popover>
				)}
			</View>

			<BaseTextInput
				autoCompleteType={autoCompleteType}
				autoCorrect={false}
				blurOnSubmit={false}
				elevation={elevation}
				keyBoardType={keyboardType}
				maxLength={maxLength}
				minLength={minLength}
				onChange={onChange}
				onChangeText={onChangeText}
				onEndEditing={onBlur}
				onFocus={onFocus}
				placeholder={placeholder}
				placeholderTextColor={theme.name === 'dark' ? theme.elevation5 : theme.elevation4}
				textAlign={textAlign}
			/>

			{hasError && errorMessage && <ErrorMessage hasError={hasError}>{errorMessage}</ErrorMessage>}
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
	elevation: PropTypes.number,
	errorMessage: PropTypes.string,
	hasError: PropTypes.bool,
	isPopoverVisible: PropTypes.bool,
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
	minLength: PropTypes.number,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onChangeText: PropTypes.func,
	onFocus: PropTypes.func,
	placeholder: PropTypes.string,
	popoverPressHandler: PropTypes.func,
	popoverText: PropTypes.string,
	textAlign: PropTypes.oneOf<TextInputProps['textAlign']>(['left', 'center', 'right']),
};

TextInput.defaultProps = {
	hasError: false,
	elevation: 4,
	errorMessage: '',
	isPopoverVisible: false,
	marginBottom: 0,
	marginTop: 0,
	maxLength: 200,
	minLength: 0,
	onBlur: () => null,
	onChange: () => null,
	onChangeText: () => null,
	onFocus: () => null,
	placeholder: '',
	popoverPressHandler: () => null,
	popoverText: '',
	ref: { current: null },
	textAlign: 'left',
};
