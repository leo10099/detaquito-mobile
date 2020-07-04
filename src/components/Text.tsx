import React from 'react';
import PropTypes from 'prop-types';
import styled from '~/styles';
import { Fonts } from '~/typings';
import { StyleSheet } from 'react-native';

type TextProps = {
	align?: 'center' | 'left' | 'right';
	children: React.ReactNode;
	color?: string;
	size?: number;
	weight?: 'light' | 'normal' | 'bold' | 'bolder';
};

const fontWeight = StyleSheet.create({
	normal: {
		fontFamily: Fonts.NORMAL,
	},
	light: {
		fontFamily: Fonts.LIGHT,
	},
	bold: {
		fontFamily: Fonts.BOLD,
	},
	bolder: {
		fontFamily: Fonts.BOLDER,
	},
});

const BaseText = styled.Text<TextProps>`
	text-align: ${({ align }) => align};
	color: ${({ color, theme }) => (color ? color : theme.elevation7)};
	font-size: ${({ size }) => size}px;
`;

export const Text: React.FC<TextProps> = ({ align, children, color, weight, size }) => {
	return (
		<BaseText align={align} color={color} size={size} style={fontWeight[weight ?? 'normal']}>
			{children}
		</BaseText>
	);
};

Text.propTypes = {
	align: PropTypes.oneOf<TextProps['align']>(['center', 'left', 'right']),
	color: PropTypes.string,
	children: PropTypes.string.isRequired,
	size: PropTypes.number,
	weight: PropTypes.oneOf<TextProps['weight']>(['light', 'normal', 'bold', 'bolder']),
};

Text.defaultProps = {
	align: 'left',
	color: '',
	weight: 'normal',
	size: 20,
};
