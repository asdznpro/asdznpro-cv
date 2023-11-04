import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from 'components/router'

import 'assets/styles/index.scss'

function App() {
	return (
		<BrowserRouter>
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
