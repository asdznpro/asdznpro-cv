// https://vkcom.github.io/icons

import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './components/AppRouter'

import './styles/index.scss'

function App() {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
