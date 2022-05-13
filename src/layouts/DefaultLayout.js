import React from "react"
import Nav from "../components/Nav/Nav"
import { Container } from "react-bootstrap"

function DefaultLayout({ children }) {
	return (
		<Container>
			<Nav />
			<div className="mt_nav">{children}</div>
		</Container>
	)
}

export default DefaultLayout
