import React from 'react';
import PropTypes from 'prop-types';
import styled from '~/styles';
import { Text } from './Text';
import { useTheme } from 'styled-components/native';
import { ThemeInterface } from '~/theme';

interface BaseButtonProps {
	children: string | React.ReactChild;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	isBlock?: boolean;
	isDisabled?: boolean;
	isLoading?: boolean;
	margin?: string;
	rounded?: boolean;
	variant: 'default' | 'primary';
}

const BaseButton = styled.TouchableOpacity<BaseButtonProps>`
	border-radius: ${({ rounded }) => (rounded ? '10px' : '4px')};
	height: 48px;
	letter-spacing: 0.6px;
	max-width: 300px;
	display: flex;
	margin: ${({ margin }) => (margin ? margin : '0')};
	justify-content: center;
	width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
`;
const PrimaryButton = styled(BaseButton)`
	background-color: ${({ theme }) =>
		theme.name === 'dark' ? theme.primaryLight : theme.primaryMain};
`;

export const Button: React.FC<BaseButtonProps> = ({
	children,
	onClick,
	isBlock,
	isDisabled,
	isLoading,
	margin,
	rounded,
	variant,
}) => {
	const theme = useTheme() as ThemeInterface;

	switch (variant) {
		case 'primary':
			return (
				<PrimaryButton
					disabled={isDisabled}
					isBlock={isBlock}
					isLoading={isLoading}
					margin={margin}
					onClick={onClick}
					rounded={rounded}
					variant={variant}
				>
					<Text color={theme.elevation1} align="center" weight="bold" size={14}>
						{children}
					</Text>
				</PrimaryButton>
			);
		default:
			return (
				<BaseButton
					disabled={isDisabled}
					isBlock={isBlock}
					isLoading={isLoading}
					margin={margin}
					onClick={onClick}
					rounded={rounded}
					variant={variant}
				>
					<Text align="center" weight="bold" size={14}>
						{children}
					</Text>
				</BaseButton>
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
	onClick: PropTypes.func,
	rounded: PropTypes.bool,
	variant: PropTypes.oneOf<BaseButtonProps['variant']>(['default', 'primary']).isRequired,
};

// Default Props
Button.defaultProps = {
	isBlock: false,
	isDisabled: false,
	isLoading: false,
	margin: '',
	onClick: () => null,
	rounded: false,
	variant: 'default',
};
