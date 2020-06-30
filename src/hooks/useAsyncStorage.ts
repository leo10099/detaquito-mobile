import { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';

export function useAsyncStorage(key: any) {
	const [storageItem, setStorageItem] = useState<null | string>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	async function getStorageItem() {
		const data = await AsyncStorage.getItem(key);
		console.log('data', data);
		setStorageItem(data);
		setIsLoaded(true);
	}

	function updateStorageItem(data) {
		if (typeof data === 'string') {
			AsyncStorage.setItem(key, data);
			setStorageItem(data);
		}
	}

	function removeStorageItem() {
		AsyncStorage.removeItem(key);
		setStorageItem(null);
	}

	useEffect(() => {
		getStorageItem();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return [storageItem, updateStorageItem, removeStorageItem, isLoaded];
}
