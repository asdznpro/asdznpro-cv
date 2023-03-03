import React, { useEffect } from 'react'

function Portfolio() {
	useEffect(() => {
		document.title = 'Портфолио // Curriculum Vitae'
	}, [])

	return (
		<>
			<h1>Portfolio</h1>
		</>
	)
}

export default Portfolio
