import React from 'react';

// Components
import { Button, TouchableNativeFeedback, View } from 'react-native';
import { Text } from '~/components';

// Styles
import { Container } from './HomeScreen.Styles';

// Types
import { HomeScreenNavigationProps } from '~/typings/navigation';

export type HomeScreenProps = {
	navigation: HomeScreenNavigationProps;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<Container>
			<Text size={20}>DE TAQUITO!</Text>
			<TouchableNativeFeedback>
				<View>
					<Button title="REGISTRARSE" onPress={() => navigation.navigate('SignUp')} />
				</View>
			</TouchableNativeFeedback>
		</Container>
	);
};
