import { useColorScheme } from 'react-native-appearance';

import { useAsyncStorage } from './useAsyncStorage';

export function useTheme() {
	const [storedThemePreference, storeThemePreference] = useAsyncStorage('preferred_theme');
	const deviceConfigPreference = useColorScheme();

	const enabled = storedThemePreference ? storedThemePreference : deviceConfigPreference;

	// Return enabled state and setter
	return [enabled, storeThemePreference];
}
