import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import storeApp from './storeApp'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={storeApp}>
			<App />
		</Provider>
	</React.StrictMode>
)
