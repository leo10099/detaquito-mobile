import React, { useEffect, useMemo } from 'react';
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
	const [currentTheme, setCurrentTheme] = useTheme();

	// Helpers
	const theme = useMemo(() => {
		return currentTheme === Themes.DARK ? Theme.dark : Theme.light;
	}, [currentTheme]);

	// Effects
	useEffect(() => {
		// Test setting user preference in local storage
		setCurrentTheme(new Date().getHours() > 18 ? 'dark' : 'light');
	}, [setCurrentTheme]);

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style="auto" />
			<RootNavigator />
		</ThemeProvider>
	);
}

export default App;
