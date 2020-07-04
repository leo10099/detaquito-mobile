import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { HomeScreen } from '$/Public/Home/HomeScreen';
import { SignUp } from '$/Public/SignUp/SignUp';

// Helpers
import { RootNavigatorScreenOptions } from './RootNavigator.helpers';

export const RootNavigator: React.FC = () => {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={RootNavigatorScreenOptions}>
				<Stack.Screen name="De Taquito" component={HomeScreen} />
				<Stack.Screen name="SignUp" component={SignUp} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
