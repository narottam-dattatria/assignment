import React from 'react';
import './App.css';
import 'h8k-components';
import { BrowserRouter, Outlet } from "react-router-dom";
import AppRoutes from './Routes';

const title = "SPA - LeaderBoard";

function App() {
	return (
		
		<div className="App">
			<h8k-navbar header={title}></h8k-navbar>
				<BrowserRouter>
					<AppRoutes />
				</BrowserRouter>
				<Outlet />
		</div>
	);
}

export default App;
