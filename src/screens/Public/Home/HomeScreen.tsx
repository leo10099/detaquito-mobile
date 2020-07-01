import React from 'react';
import { Button, Text, TouchableNativeFeedback, View } from 'react-native';

// Styles
import { Container } from './HomeScreen.styles';

// Types
import { HomeScreenNavigationProps } from '~/typings/navigation';

export type HomeScreenProps = {
	navigation: HomeScreenNavigationProps;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<Container>
			<Text>DE TAQUITO</Text>
			<TouchableNativeFeedback>
				<View>
					<Button
						title="REGISTRARSE"
						onPress={() => {
							navigation.navigate('SignUp');
						}}
					/>
				</View>
			</TouchableNativeFeedback>
		</Container>
	);
};
