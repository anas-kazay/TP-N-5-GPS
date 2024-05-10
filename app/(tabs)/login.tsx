import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { Controller, Form, useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';

interface ILoginProps {
	email: string;
	password: string;
}

const Login = () => {
	const { control, handleSubmit } = useForm();
	const [message, setMessage] = useState('');

	if (!control)
		return (
			<View>
				<Text>Control is undefined</Text>
			</View>
		);

	const onSubmit = (data: any) => {
		if (data.email === 'admin' && data.password === 'admin'||true) {
			router.replace('/home');
		} else {
			setMessage('Invalid email or password');
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Text style={styles.title}>Log In</Text>
			</View>
			<View style={{ width: '100%' }}>
				<Input control={control} name="email" placeholder="Email" />
				<Input
					control={control}
					name="password"
					placeholder="Password"
					secureTextEntery={true}
					// styles={styles}
				/>
			</View>
			<View
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Pressable onPress={handleSubmit(onSubmit)} style={styles.loginButton}>
					<Text style={{ fontSize: 16 }}>Log In</Text>
				</Pressable>
			</View>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					marginTop: 10,
				}}
			>
				<Text style={{ marginRight: 10 }}>Need to create an account</Text>
				<Pressable
					onPress={() => {
						router.replace('/(tabs)/signup/');
					}}
				>
					<Text
						style={{
							color: 'blue',
							textDecorationLine: 'underline',
						}}
					>
						Sign up
					</Text>
				</Pressable>
			</View>
			<View>{message}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	titleContainer: {
		textAlign: 'center',
		width: '100%',
		marginBottom: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
	},

	inputContainer: {
		width: '100%',
		marginBottom: 10,
	},
	input: {
		width: '100%',
		height: 40,
		borderWidth: 1,
		borderColor: 'black',
		marginTop: 8,
		marginBottom: 8,
		padding: 8,
	},
	loginButton: {
		width: '50%',
		height: 40,
		marginTop: 20,
		backgroundColor: '#3273a8',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 6,
		alignItems: 'center',
		fontSize: 34,
	},
});
export default Login;
