import React, { useEffect } from "react"
import DefaultLayout from "../../layouts/DefaultLayout"

function About() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<DefaultLayout>
			<h1>About us</h1>
		</DefaultLayout>
	)
}

export default About
