import React, { useEffect } from 'react'

function NotFound() {
	useEffect(() => {
		document.title = 'Страница не найдена // Curriculum Vitae'
	}, [])

	return (
		<>
			<h1>NotFound</h1>
		</>
	)
}

export default NotFound
