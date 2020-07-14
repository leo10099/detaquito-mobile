import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components/native';
import { gray, ThemeInterface } from '~/theme';
import { Text } from './Text';

interface Props {
	size: number;
	children: string;
	marginTop?: number;
	marginBottom?: number;
}

export const Header = ({ children, marginTop, marginBottom, size }: Props) => {
	const theme = useTheme() as ThemeInterface;

	switch (size) {
		case 1:
			return (
				<Text marginTop={marginTop} marginBottom={marginBottom} size={40} letterSpacing={1}>
					{children}
				</Text>
			);
		case 2:
			return (
				<Text marginTop={marginTop} marginBottom={marginBottom} size={33} letterSpacing={1}>
					{children}
				</Text>
			);
		case 3:
			return (
				<Text
					marginTop={marginTop}
					marginBottom={marginBottom}
					size={18}
					color={theme.elevation5}
					letterSpacing={1.2}
				>
					{children}
				</Text>
			);
		case 4:
			return (
				<Text marginTop={marginTop} marginBottom={marginBottom} size={15} weight="bolder">
					{children}
				</Text>
			);
		case 5:
			return (
				<Text marginTop={marginTop} marginBottom={marginBottom} size={12} weight="bold">
					{children}
				</Text>
			);
		default:
			return (
				<Text marginTop={marginTop} marginBottom={marginBottom} size={25}>
					{children}
				</Text>
			);
	}
};

Header.propTypes = {
	size: PropTypes.number,
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
	marginTop: PropTypes.number,
	marginBottom: PropTypes.number,
};

Header.defaultProps = {
	marginBottom: 0,
	marginTop: 0,
};
