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
	margin?: string;
	rounded?: boolean;
	variant: 'default' | 'primary';
}

const BaseButton = styled.TouchableHighlight.attrs({ activeOpacity: 1 })<BaseButtonProps>`
	border-radius: ${({ rounded }) => (rounded ? '10px' : '4px')};
	letter-spacing: 0.6px;
	display: flex;
	height: 48px;
	margin: ${({ margin }) => (margin ? margin : '0')};
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
	margin,
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
					margin: margin ? margin : 'auto',
					width: isBlock ? 300 : 'auto',
				},
			}),
		[isBlock, margin]
	);

	switch (variant) {
		case 'primary':
			return (
				<Ripple
					style={rippleStyles.styles}
					rippleOpacity={0.5}
					rippleColor={theme.elevation4}
					onPress={onPress}
				>
					<PrimaryButton
						underlayColor={theme.name === 'dark' ? theme.primaryLight : theme.primaryMain}
						disabled={isDisabled}
						isBlock={isBlock}
						isLoading={isLoading}
						margin={margin}
						rounded={rounded}
						variant={variant}
					>
						<Text color={theme.elevation1} align="center" weight="bold" size={14}>
							{children}
						</Text>
					</PrimaryButton>
				</Ripple>
			);
		default:
			return (
				<Ripple
					style={rippleStyles.styles}
					rippleOpacity={0.5}
					rippleColor={theme.elevation4}
					onPress={onPress}
				>
					<BaseButton
						underlayColor={theme.name === 'dark' ? theme.primaryLight : theme.primaryMain}
						disabled={isDisabled}
						isBlock={isBlock}
						isLoading={isLoading}
						margin={margin}
						rounded={rounded}
						variant={variant}
					>
						<Text align="center" weight="bold" size={14}>
							{children}
						</Text>
					</BaseButton>
				</Ripple>
			);
	}
};

// PropTypes
Button.propTypes = {
	isBlock: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
	isDisabled: PropTypes.bool,
	isLoading: PropTypes.bool,
	margin: PropTypes.string,
	onPress: PropTypes.func.isRequired,
	rounded: PropTypes.bool,
	variant: PropTypes.oneOf<BaseButtonProps['variant']>(['default', 'primary']).isRequired,
};

// Default Props
Button.defaultProps = {
	isBlock: false,
	isDisabled: false,
	isLoading: false,
	margin: '',
	onPress: () => null,
	rounded: false,
	variant: 'default',
};
