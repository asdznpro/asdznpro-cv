import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import storeApp from './store-app'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={storeApp}>
			<App />
		</Provider>
	</React.StrictMode>,
)
