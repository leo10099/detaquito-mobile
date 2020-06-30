import React, { useEffect, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';

// Theming
import * as Theme from './theme';
import { ThemeProvider } from './styles';

// Styles
import { Prueba } from './App.Styles';

// Components
import { Text } from 'react-native';

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
		setCurrentTheme(new Date().getHours() > 16 ? 'dark' : 'light');
	}, [setCurrentTheme]);

	return (
		<ThemeProvider theme={theme}>
			<Prueba>
				<Text>DE TAQUITO</Text>
			</Prueba>
			<StatusBar style="auto" />
		</ThemeProvider>
	);
}

export default App;
