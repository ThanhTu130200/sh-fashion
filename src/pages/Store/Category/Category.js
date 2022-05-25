import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import Directory from "../../../components/Directory/Directory"
import Products from "../../../components/Products/Products"

function Category() {
	const { id } = useParams()
	const navigate = useNavigate()

	const categories = useSelector((state) => state.categories)

	let category = categories.find((category) => category.id == id)

	useEffect(() => {
		if (categories.length && !category) {
			navigate("/")
			alert("Collection not found, please try another !")
		}
	}, [categories])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			{category ? (
				<div className="categoryPage">
					<Directory directory={["store", category.name]} />
					{categories.length ? <Products categories={category} /> : ""}
				</div>
			) : (
				""
			)}
		</>
	)
}

export default Category
