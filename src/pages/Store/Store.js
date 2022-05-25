import React, { useEffect } from "react"
import { useSelector } from "react-redux"

import Directory from "../../components/Directory/Directory"
import Products from "../../components/Products/Products"

import "./Store.scss"

function Store() {
	const categories = useSelector((state) => state.categories)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="storePage">
			<Directory directory={["store"]} />
			{categories.length ? <Products categories={categories} numberOfProducts={4} /> : ""}
		</div>
	)
}

export default Store
