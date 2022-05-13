import React from "react"
import { Routes, Route } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/styles/main.scss"

import Home from "./pages/Home"
import Store from "./pages/Store"
import { Container } from "react-bootstrap"

function App() {
	return (
		<Routes>
			<Route path="/*" element={<Home />} />
			<Route path="/store" element={<Store />} />
		</Routes>
	)
}

export default App
