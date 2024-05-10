import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { TextInput, View, StyleSheet } from 'react-native';

interface InputProps {
	control: Control<any>;
	name: string;
	rules?: any;
	defaultValue?: string;
	placeholder?: string;
	secureTextEntery?: boolean;
	// styles: any;
}

const Input: React.FC<InputProps> = ({
	control,
	name,
	rules,
	defaultValue = '',
	placeholder,
	secureTextEntery = false,
	// styles,
}) => {
	return (
		<View style={styles.inputContainer}>
			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.input}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder={placeholder}
						secureTextEntry={secureTextEntery}
					/>
				)}
				name={name}
				rules={rules}
				defaultValue={defaultValue}
			/>
		</View>
	);
};

let styles = StyleSheet.create({
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
});

export default Input;
