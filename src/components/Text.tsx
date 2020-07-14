import React from 'react';
import PropTypes from 'prop-types';
import styled from '~/styles';
import { Fonts } from '~/typings';
import { StyleSheet } from 'react-native';

type TextProps = {
	align?: 'center' | 'left' | 'right';
	children: React.ReactNode;
	color?: string;
	marginBottom?: number;
	marginTop?: number;
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
	color: ${({ color, theme }) => (color ? color : theme.elevation7)};
	font-size: ${({ size }) => size}px;
	margin-bottom: ${({ marginBottom }) => `${marginBottom}px}`};
	margin-top: ${({ marginTop }) => `${marginTop}px}`};
	text-align: ${({ align }) => align};
`;

export const Text: React.FC<TextProps> = ({
	align,
	children,
	marginBottom,
	marginTop,
	color,
	weight,
	size,
}) => {
	return (
		<BaseText
			align={align}
			color={color}
			marginBottom={marginBottom}
			marginTop={marginTop}
			size={size}
			style={fontWeight[weight ?? 'normal']}
		>
			{children}
		</BaseText>
	);
};

Text.propTypes = {
	align: PropTypes.oneOf<TextProps['align']>(['center', 'left', 'right']),
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	marginBottom: PropTypes.number,
	marginTop: PropTypes.number,
	size: PropTypes.number,
	weight: PropTypes.oneOf<TextProps['weight']>(['light', 'normal', 'bold', 'bolder']),
};

Text.defaultProps = {
	align: 'left',
	color: '',
	marginBottom: 0,
	marginTop: 0,
	size: 20,
	weight: 'normal',
};
