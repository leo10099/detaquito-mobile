import { StackNavigationProp } from '@react-navigation/stack';

// Navigation
type RootStackParamList = {
	Home: undefined;
	SignUp: undefined;
};
export type HomeScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Home'>;
