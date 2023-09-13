import React from "react";

import { Outlet } from 'react-router-dom'

import './styles.css';
import Footer from './Components/Footer'
import { AppThemeProvider } from "./shared/contexts";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {
	return (
		<AppThemeProvider>
			<div className="App">
				<Outlet />
				<Footer />
			</div>
		</AppThemeProvider>
	);
}