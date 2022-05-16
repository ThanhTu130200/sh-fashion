import React from "react"

import { Card } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import convertCurrency from "../../../function/convertCurrency"

import "./Product.scss"

function Product({ product }) {
	return (
		<LinkContainer to={`/store/product-details-${product.id}`}>
			<Card className="product border-0 cp">
				<Card.Img className="product__img border" variant="top" src={product.image} />
				<Card.Body>
					<Card.Title>{product.name}</Card.Title>
					<Card.Text>{convertCurrency(product.price)}</Card.Text>
				</Card.Body>
			</Card>
		</LinkContainer>
	)
}

export default Product
