import React, { ReactNode, createContext, useState } from 'react';

interface Pictures {
	uri: string;
	description: string;
	location: {
		latitude: number;
		longitude: number;
	};
}

// Create the context
export const UserContext = createContext<Pictures>;

// Create the provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [users, setUsers] = useState([]);

	return (
		<UserContext.Provider value={{ users, setUsers }}>
			{children}
		</UserContext.Provider>
	);
};
