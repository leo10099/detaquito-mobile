import React, { useEffect, useMemo } from 'react';
import {
	useFonts,
	OpenSans_300Light,
	OpenSans_400Regular,
	OpenSans_600SemiBold,
	OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';

// Navigator
import { RootNavigator } from '~/navigator/Root/RootNavigator';

// Theming
import * as Theme from './theme';
import { ThemeProvider } from './styles';

// Types
import { Themes } from './typings';

// Hooks
import { useTheme } from './hooks';

function App() {
	// Hooks
	const [hasFinishedLoadingFonts] = useFonts({
		OpenSans300: OpenSans_300Light,
		OpenSans400: OpenSans_400Regular,
		OpenSans600: OpenSans_600SemiBold,
		OpenSans700: OpenSans_700Bold,
	});
	const [currentTheme, setCurrentTheme] = useTheme();

	// Helpers
	const theme = useMemo(() => {
		return currentTheme === Themes.DARK ? Theme.dark : Theme.light;
	}, [currentTheme]);

	// Effects
	useEffect(() => {
		// Test setting user preference in local storage
		setCurrentTheme(new Date().getHours() > 22 ? 'dark' : 'light');
	}, [setCurrentTheme]);

	if (!hasFinishedLoadingFonts) {
		return <AppLoading />;
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="auto" />
			<RootNavigator />
		</ThemeProvider>
	);
}

export default App;
