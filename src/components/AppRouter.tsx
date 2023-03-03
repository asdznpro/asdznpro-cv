import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Portfolio from '../pages/Portfolio'

export const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/portfolio' element={<Portfolio />} />
			<Route path='/404' element={<NotFound />} />
			<Route path='*' element={<Navigate to='/404' replace />} />
		</Routes>
	)
}
