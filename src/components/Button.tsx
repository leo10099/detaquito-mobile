import React, { useCallback, useMemo } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styled from '~/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ripple from 'react-native-material-ripple';
import { Text } from './Text';
import { useTheme } from 'styled-components/native';
import { gray, ThemeInterface } from '~/theme';
import { FlexRowCentered } from '~/utils';

interface BaseButtonProps {
	children: string | React.ReactChild;
	onPress: () => void;
	icon?: string;
	isBlock?: boolean;
	isDisabled?: boolean;
	isLoading?: boolean;
	marginBottom?: number;
	marginTop?: number;
	rounded?: boolean;
	variant: 'default' | 'primary';
}

const ButtonContainer = styled.View`
	margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom + 'px' : 'auto')};
	margin-top: ${({ marginTop }) => (marginTop ? marginTop + 'px' : 'auto')};
`;

const ButtonContent = styled.View`
	${FlexRowCentered()}
`;

const BaseButton = styled.TouchableHighlight.attrs({ activeOpacity: 1 })<BaseButtonProps>`
	border-radius: ${({ rounded }) => (rounded ? '10px' : '4px')};
	letter-spacing: 0.6px;
	display: flex;
	height: 48px;
	justify-content: center;
`;
const PrimaryButton = styled(BaseButton)`
	background-color: ${({ theme, disabled }) => {
		if (disabled) {
			return theme.name === 'dark' ? theme.elevation5 : theme.elevation3;
		}
		return theme.name === 'dark' ? theme.primaryLight : theme.primaryMain;
	}};
	opacity: ${({ theme }) => (theme.name === 'dark' ? 0.4 : 0.9)};
`;

const iconStyle = { paddingRight: 10 };

export const Button: React.FC<BaseButtonProps> = ({
	children,
	onPress,
	isBlock,
	icon,
	isDisabled,
	isLoading,
	marginBottom,
	marginTop,
	rounded,
	variant,
}) => {
	const theme = useTheme() as ThemeInterface;

	const getPrimaryButtonTextColor = useCallback(() => {
		if (isDisabled) {
			return theme.name === 'dark' ? theme.elevation7 : theme.elevation4;
		}
		return theme.elevation1;
	}, [isDisabled, theme.elevation1, theme.elevation4, theme.elevation7, theme.name]);

	const rippleStyles = useMemo(
		() =>
			StyleSheet.create({
				styles: {
					height: 48,
					alignSelf: 'center',
					maxWidth: 300,
					width: isBlock ? 300 : 'auto',
				},
			}),
		[isBlock]
	);

	switch (variant) {
		case 'primary':
			return (
				<ButtonContainer marginTop={marginTop} marginBottom={marginBottom}>
					<Ripple
						disabled={isDisabled}
						style={rippleStyles.styles}
						rippleOpacity={0.66}
						rippleColor={theme.elevation4}
						onPress={onPress}
					>
						<PrimaryButton
							underlayColor={theme.name === 'dark' ? theme.primaryLight : theme.primaryMain}
							disabled={isDisabled}
							isBlock={isBlock}
							isLoading={isLoading}
							rounded={rounded}
							variant={variant}
						>
							<ButtonContent>
								{!!icon && (
									<Icon
										name={icon}
										solid
										style={iconStyle}
										size={24}
										color={theme.name === 'dark' ? gray.gray700 : gray.gray100}
									/>
								)}
								{isLoading ? (
									<ActivityIndicator size="large" color={theme.elevation4} />
								) : (
									<Text color={getPrimaryButtonTextColor()} align="center" weight="bold" size={14}>
										{children}
									</Text>
								)}
							</ButtonContent>
						</PrimaryButton>
					</Ripple>
				</ButtonContainer>
			);
		default:
			return (
				<ButtonContainer marginTop={marginTop} marginBottom={marginBottom}>
					<Ripple
						style={rippleStyles.styles}
						rippleOpacity={0.66}
						rippleColor={theme.elevation4}
						onPress={onPress}
					>
						<BaseButton
							underlayColor={theme.name === 'dark' ? theme.primaryLight : theme.primaryMain}
							disabled={isDisabled}
							isBlock={isBlock}
							isLoading={isLoading}
							rounded={rounded}
							variant={variant}
						>
							<ButtonContent>
								{icon && (
									<Icon
										name={icon}
										solid
										style={iconStyle}
										size={24}
										color={theme.name === 'dark' ? gray.gray700 : gray.gray100}
									/>
								)}
								{isLoading ? (
									<ActivityIndicator size="large" color={theme.elevation4} />
								) : (
									<Text color={getPrimaryButtonTextColor()} align="center" weight="bold" size={14}>
										{children}
									</Text>
								)}
							</ButtonContent>
						</BaseButton>
					</Ripple>
				</ButtonContainer>
			);
	}
};

// PropTypes
Button.propTypes = {
	isBlock: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
	icon: PropTypes.string,
	isDisabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	marginTop: PropTypes.number,
	marginBottom: PropTypes.number,
	onPress: PropTypes.func.isRequired,
	rounded: PropTypes.bool,
	variant: PropTypes.oneOf<BaseButtonProps['variant']>(['default', 'primary']).isRequired,
};

// Default Props
Button.defaultProps = {
	isBlock: false,
	icon: '',
	isDisabled: false,
	isLoading: false,
	marginBottom: 0,
	marginTop: 0,
	onPress: () => null,
	rounded: false,
	variant: 'default',
};
