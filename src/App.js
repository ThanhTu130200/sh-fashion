import React from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import { loadCategories } from "./redux/thunks"

import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/styles/main.scss"

import Home from "./pages/Home/Home"
import Store from "./pages/Store/Store"
import ItemDetails from "./pages/Store/ProductDetails/ProductDetails"
import Category from "./pages/Store/Category/Category"
import About from "./pages/About/About"

function App() {
	loadCategories(useDispatch())
	return (
		<Routes>
			<Route path="/*" element={<Home />} />
			<Route path="/store" element={<Store />} />
			<Route path="/store/product-details-:id" element={<ItemDetails />} />
			<Route path="/store/category-:id" element={<Category />} />
			<Route path="/about" element={<About />} />
		</Routes>
	)
}

export default App
