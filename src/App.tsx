import React, { useEffect, useMemo } from 'react';
import * as Theme from './theme';
import { Prueba } from './App.Styles';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { ThemeProvider } from './styles';
import { Themes } from './typings';
import { useTheme } from './hooks';

function App() {
	const [currentTheme, setCurrentTheme] = useTheme();

	// Helpers
	const theme = useMemo(() => {
		return currentTheme === Themes.DARK ? Theme.dark : Theme.light;
	}, [currentTheme]);

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
