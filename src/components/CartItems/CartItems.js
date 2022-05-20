import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import convertCurrency from "../../function/convertCurrency"

import CartItem from "./CartItem/CartItem"
import CartItemMobile from "./CartItemMobile/CartItemMobile"

import "./CartItems.scss"

function CartItems() {
	const cart = useSelector((state) => state.cart)
	const total = cart.reduce((total, item) => total + +item.price * +item.quantity, 0)

	return (
		<div className="cartItems">
			{/* MD */}
			<Container className="d-none d-md-block">
				<Row className="border-bottom cartItems__header">
					<Col xs={2} className="text-muted fs_10 text-start">
						PRODUCT
					</Col>
					<Col xs={4} className="text-muted fs_10 text-start">
						DESCRIPTION
					</Col>
					<Col xs={2} className="text-muted fs_10 text-center">
						QTY
					</Col>
					<Col xs={2} className="text-muted fs_10 text-center">
						AMOUNT
					</Col>
					<Col xs={2} className="text-muted fs_10 text-end">
						DELETE
					</Col>
				</Row>
				{cart.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
				<Row className="subtotal">
					<Col xs={{ span: 2, offset: 6 }} className="fw-bold fs_10">
						Subtotal:
					</Col>
					<Col xs={2} className="c_primary fw-bold fs_10">
						{convertCurrency(total)}
					</Col>
				</Row>
			</Container>

			{/* SX and SM */}
			<Container className="d-md-none">
				<Row className="border-bottom" />
				<CartItemMobile />
			</Container>
		</div>
	)
}

export default CartItems
