import React from "react"
import { Button, Col, Row } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import CartItems from "../../components/CartItems/CartItems"
import DefaultLayout from "../../layouts/DefaultLayout"

import "./Cart.scss"

function Cart() {
	return (
		<DefaultLayout>
			<div className="cartPage text-center">
				<div className="cartPage__header">
					<h1 className="fw-bold">YOUR SHOPPING BAG</h1>
					<p className="text-muted fst-italic">Items reserved for limited time only</p>
				</div>
				<CartItems />
				<Row className="mt-5">
					<Col className="text-start">
						<LinkContainer to="/store">
							<p className="fs_10 text-decoration-underline cp">Continue Shopping</p>
						</LinkContainer>
					</Col>
					<Col className="text-end">
						<LinkContainer to="/order">
							<Button className="fs_10 px-5">Order Now</Button>
						</LinkContainer>
					</Col>
				</Row>
			</div>
		</DefaultLayout>
	)
}

export default Cart
