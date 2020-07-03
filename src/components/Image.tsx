import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from '~/styles';
import PropTypes from 'prop-types';

interface ImageProps {
	heigth?: number;
	margin?: string;
	source: ImageSourcePropType;
	width: number;
}

const BaseImage = styled.Image<ImageProps>`
	height: ${({ height, width }) => (height ? height : width)}px;
	margin: ${({ margin }) => margin ?? '0'}px;
	width: ${({ width }) => width}px;
`;

export const Image: React.FC<ImageProps> = ({ heigth, margin, source, width }) => {
	return (
		<BaseImage heigth={heigth} margin={margin} source={source} width={width} resizeMode="contain" />
	);
};

Image.propTypes = {
	heigth: PropTypes.number,
	margin: PropTypes.string,
	source: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
};
