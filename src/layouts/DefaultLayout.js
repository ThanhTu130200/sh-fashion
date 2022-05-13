import React from "react"
import Nav from "../components/Nav/Nav"
import { Container } from "react-bootstrap"
import Footer from "../components/Footer/Footer"

function DefaultLayout({ children }) {
	return (
		<Container className="DefaultLayout mt_nav bg-white">
			<Nav />
			<div>{children}</div>
			<Footer />
		</Container>
	)
}

export default DefaultLayout
