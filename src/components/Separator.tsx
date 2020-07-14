import React from 'react';
import { Text } from './Text';
import PropTypes from 'prop-types';
import styled from '~/styles';

interface Props {
	children?: React.ReactNode | string | null;
	marginTop?: number;
	marginBottom?: number;
}

const Container = styled.View`
	align-items: center;
	flex-direction: row;
	flex: 1;
	justify-content: space-around;
	margin-top: ${({ marginTop }) => `${marginTop}px}`};
	margin-bottom: ${({ marginBottom }) => `${marginBottom}px}`};
`;

const Line = styled.View`
	width: 92px;
	border-bottom-color: ${({ theme }) => theme.elevation5};
	border-bottom-width: 1px;
`;

const Left = styled(Line)`
	position: relative;
	left: -20px;
`;

const Right = styled(Line)`
	position: relative;
	right: -20px;
`;

export const Separator = ({ children, marginTop, marginBottom }: Props) => {
	return (
		<Container marginTop={marginTop} marginBottom={marginBottom}>
			<Left />
			<Text size={20}>{children}</Text>
			<Right />
		</Container>
	);
};

Separator.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
	marginTop: PropTypes.number,
	marginBottom: PropTypes.number,
};

Separator.defaultProps = {
	children: null,
	marginTop: 0,
	marginBottom: 0,
};

Container.displayName = 'Separator-Container';
Line.displayName = 'Separator-Line';

export default Separator;
