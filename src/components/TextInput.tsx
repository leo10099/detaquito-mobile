import React from 'react';
import PropTypes from 'prop-types';
import styled from '~/styles';
import Popover, { PopoverMode, PopoverPlacement } from 'react-native-popover-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'styled-components/native';
import { gray, ThemeInterface } from '~/theme';
import { Text } from './Text';
import { View, StyleProp, ViewStyle } from 'react-native';

interface TextInputProps {
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
	onChangeText?: () => void;
	onFocus?: () => void;
	placeholder?: string;
	popoverText?: string;
	popoverPressHandler?: (boolean) => void;
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
	elevation: ${({ elevation }) => elevation};
	width: 100%;
	z-index: 0;
`;

const Label = styled.Text`
	text-align: left;
	margin-right: 6px;
	color: ${({ theme }) => theme.elevation6};
	font-size: 16px;
	letter-spacing: 1.1px;
	padding-bottom: 10px;
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
	keyboardType,
	isPopoverVisible,
	label,
	maxLength,
	marginBottom,
	marginTop,
	minLength,
	onBlur,
	onChange,
	onChangeText,
	onFocus,
	placeholder,
	popoverText,
	popoverPressHandler,
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
				keyBoardType={keyboardType}
				maxLength={maxLength}
				minLength={minLength}
				onBlur={onBlur}
				onChange={onChange}
				onChangeText={onChangeText}
				onFocus={onFocus}
				placeholder={placeholder}
				placeholderTextColor={theme.name === 'dark' ? theme.elevation5 : theme.elevation4}
				textAlign={textAlign}
				elevation={elevation}
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
	elevation: PropTypes.number,
	keyboardType: PropTypes.oneOf<TextInputProps['keyboardType']>([
		'default',
		'number-pad',
		'numeric',
		'email-address',
	]).isRequired,
	isPopoverVisible: PropTypes.bool,
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
	elevation: 4,
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
	textAlign: 'left',
};
