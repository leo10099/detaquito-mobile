import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from './styles';
import { dark } from './theme';
import { Prueba } from './App.Styles';

export default function App() {
	return (
		<View style={styles.container}>
			<ThemeProvider theme={dark}>
				<Prueba>DE TAQUITO!</Prueba>
				<StatusBar style="auto" />
			</ThemeProvider>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
