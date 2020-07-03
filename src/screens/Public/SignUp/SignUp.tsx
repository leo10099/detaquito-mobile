import React from 'react';

// Components

import { Image, Text } from '~/components';
import { Container } from './SignUp.Styles';

// Assets
import Logo from '~/assets/img/logo.png';

export const SignUp = () => {
	return (
		<Container>
			<Image source={Logo} width={120} heigth={80} />
			<Text>SIGN UP!</Text>
		</Container>
	);
};
