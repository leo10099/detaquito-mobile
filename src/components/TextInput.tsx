import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '~/styles';
import { useTheme } from 'styled-components/native';
import { gray, ThemeInterface } from '~/theme';
import { Text } from './Text';
import { View } from 'react-native';
import Popover, { PopoverMode, PopoverPlacement } from 'react-native-popover-view';
import Icon from 'react-native-vector-icons/FontAwesome';

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
	elevation: 0;
	width: 90%;
	z-index: 0;
`;

export const Label = styled.Text`
	text-align: left;
	margin-right: 6px;
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
	const [showPopover, setShowPopover] = useState(false);

	return (
		<InputContainer marginBottom={marginBottom} marginTop={marginTop}>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
				}}
			>
				<Label>{label}</Label>
				<Popover
					mode={PopoverMode.TOOLTIP}
					placement={PopoverPlacement.AUTO}
					isVisible={showPopover}
					arrowStyle={{ backgroundColor: gray.gray600, opacity: 0.9 }}
					popoverStyle={{
						backgroundColor: gray.gray600,
						right: 10,
						padding: 20,
						opacity: 0.9,
						zIndex: 1000,
					}}
					from={
						<Icon
							name="question-circle"
							solid
							onPress={() => setShowPopover(true)}
							size={18}
							style={{ top: 4.5 }}
							color={gray.gray300}
						/>
					}
				>
					<View>
						<Text color="#fff" weight="bold" size={12}>
							This is the contents of the popover
						</Text>
					</View>
				</Popover>
			</View>

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
				elevation={showPopover ? 0 : 4}
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
