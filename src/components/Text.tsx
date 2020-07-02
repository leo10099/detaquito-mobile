import React from 'react';
import PropTypes from 'prop-types';
import styled from '~/styles';
import { Fonts } from '~/typings';
import { StyleSheet } from 'react-native';

type TextProps = {
	children: React.ReactNode;
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
	color: ${props => props.theme.elevation7};
	font-size: ${props => props.size}px;
`;

export const Text: React.FC<TextProps> = ({ children, weight, size }) => {
	return (
		<BaseText size={size} style={fontWeight[weight ?? 'normal']}>
			{children}
		</BaseText>
	);
};

Text.propTypes = {
	children: PropTypes.string.isRequired,
	size: PropTypes.number,
	weight: PropTypes.oneOf<TextProps['weight']>(['light', 'normal', 'bold', 'bolder']),
};

Text.defaultProps = {
	weight: 'normal',
	size: 1,
};
