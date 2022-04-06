import React from "react";
import {NativeBaseProvider,extendTheme,} from "native-base";
import Main from "./src/Main";
import store from './src/redux/store'
import { Provider } from "react-redux";
// Define the config
const config = {
	useSystemColorMode: false,
	initialColorMode: "light",
};
import axios from 'axios'
axios.defaults.baseURL = 'https://rootrsk-food-booking.herokuapp.com'
// extend the theme
export const theme = extendTheme({ config });

export default function App() {
	return (
		<NativeBaseProvider>
			<Provider store={store} >
				<Main />
			</Provider>
		</NativeBaseProvider>
	);
}

