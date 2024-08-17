import { Navigate, Route, Routes } from 'react-router-dom'

import {
	About,
	Contacts,
	Education,
	Experience,
	Feedback,
	HardSkills,
	Home,
	// NotFound,
	Portfolio,
} from 'views'

export const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/experience/*" element={<Experience />} />
			<Route path="/feedback/*" element={<Feedback />} />
			<Route path="/portfolio/*" element={<Portfolio />} />
			<Route path="/hard-skills" element={<HardSkills />} />
			<Route path="/education" element={<Education />} />
			<Route path="/contacts" element={<Contacts />} />

			{/* <Route path='/404' element={<NotFound />} /> */}
			{/* <Route path='*' element={<Navigate to='/404' replace />} /> */}

			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	)
}
