import { StackNavigationProp } from '@react-navigation/stack';

// Navigation
export type RootStackParamList = {
	Home: undefined;
	SignUp: undefined;
};
export type HomeScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;
export type SignUpScreenNavigationProps = StackNavigationProp<RootStackParamList, 'SignUp'>;
