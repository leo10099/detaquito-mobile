import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { HomeScreen } from '~/screens/Home/HomeScreen';

// Helpers
import { RootNavigatorScreenOptions } from './RootNavigator.helpers';

export const RootNavigator: React.FC = () => {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={RootNavigatorScreenOptions}>
				<Stack.Screen name="De Taquito" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
