import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Text as VanillaText, StyleSheet } from 'react-native';
import { Fonts } from '~/typings';

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

export const Text: React.FC<TextProps> = ({ children, weight, size }) => {
	const fontSize = useMemo(
		() =>
			StyleSheet.create({
				size: {
					fontSize: size,
				},
			}),
		[size]
	);

	return (
		<VanillaText style={[fontWeight[weight ?? 'normal'], fontSize.size]}>{children}</VanillaText>
	);
};

Text.propTypes = {
	children: PropTypes.string.isRequired,
	size: PropTypes.number,
	weight: PropTypes.oneOf<TextProps['weight']>(['light', 'normal', 'bold', 'bolder']),
};

Text.defaultProps = {
	weight: 'normal',
	size: 15,
};
