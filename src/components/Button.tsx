import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import styled from '~/styles';
import Ripple from 'react-native-material-ripple';
import { Text } from './Text';
import { useTheme } from 'styled-components/native';
import { ThemeInterface } from '~/theme';

interface BaseButtonProps {
	children: string | React.ReactChild;
	onPress: () => void;
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

const BaseButton = styled.TouchableHighlight.attrs({ activeOpacity: 1 })<BaseButtonProps>`
	border-radius: ${({ rounded }) => (rounded ? '10px' : '4px')};
	letter-spacing: 0.6px;
	display: flex;
	height: 48px;
	justify-content: center;
`;
const PrimaryButton = styled(BaseButton)`
	background-color: ${({ theme }) =>
		theme.name === 'dark' ? theme.primaryLight : theme.primaryMain};
`;

export const Button: React.FC<BaseButtonProps> = ({
	children,
	onPress,
	isBlock,
	isDisabled,
	isLoading,
	marginBottom,
	marginTop,
	rounded,
	variant,
}) => {
	const theme = useTheme() as ThemeInterface;

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
							<Text color={theme.elevation1} align="center" weight="bold" size={14}>
								{children}
							</Text>
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
							<Text align="center" weight="bold" size={14}>
								{children}
							</Text>
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
	isDisabled: false,
	isLoading: false,
	marginBottom: 0,
	marginTop: 0,
	onPress: () => null,
	rounded: false,
	variant: 'default',
};
