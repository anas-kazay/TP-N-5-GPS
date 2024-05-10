import { Image, StyleSheet, SafeAreaView, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link, router } from 'expo-router';
import { useEffect } from 'react';



export default function HomeScreen() {
	const navigateTologin = () => {
		router.replace('/login');
	};
	useEffect(() => {
		// navigateTologin();
	}, []);
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Text>Welcome home baby god loves you</Text>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Link href="/login">
					<Text
						style={{
							fontSize: 16,
							color: 'blue',
							textDecorationLine: 'underline',
						}}
					>
						Go to login
					</Text>
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
