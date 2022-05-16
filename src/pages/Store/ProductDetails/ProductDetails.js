import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { Button, Card } from "react-bootstrap"

import Directory from "../../../components/Directory/Directory"
import DefaultLayout from "../../../layouts/DefaultLayout"

import "./ProductDetails.scss"
import convertCurrency from "../../../function/convertCurrency"

function ItemDetails() {
	const { id } = useParams()
	const navigate = useNavigate()

	const categories = useSelector((state) => state.categories)

	let allProducts = categories.map((category) => category.items)
	allProducts = [].concat.apply([], allProducts)
	const product = allProducts.find((product) => product.id == id)
	useEffect(() => {
		if (categories.length && !product) {
			navigate("/")
			alert("Product not found, please try another !")
		}
	}, [categories])

	return (
		<DefaultLayout>
			<div className="productDetailsPage text-center">
				{product ? (
					<>
						<Directory directory={["store", product.name]} />{" "}
						<Card className="border-0">
							<Card.Img variant="top" src={product.image} className="img" />
							<Card.Body className="content">
								<Card.Title className="title fw-bold">
									{product.name.toUpperCase()}
								</Card.Title>
								<Card.Text className="articleNumber">{`Article number: ${product.id}`}</Card.Text>
								<Card.Text className="price second_font">
									{convertCurrency(product.price)}
								</Card.Text>
								<Card.Text className="description">{product.description}</Card.Text>
								<Button className="fs_12 px-5" variant="primary">
									ADD TO CART
								</Button>
							</Card.Body>
						</Card>
					</>
				) : (
					""
				)}
			</div>
		</DefaultLayout>
	)
}

export default ItemDetails
