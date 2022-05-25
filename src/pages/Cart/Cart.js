import React, { useEffect } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"

import CartItems from "../../components/CartItems/CartItems"

import "./Cart.scss"

function Cart() {
	const cart = useSelector((state) => state.cart)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="cartPage text-center">
			{cart.length > 0 ? (
				<>
					<div className="cartPage__header">
						<h1 className="fw-bold">YOUR SHOPPING BAG</h1>
						<p className="text-muted fst-italic">
							Items reserved for limited time only
						</p>
					</div>
					<CartItems />
					<Row className="mt-5 align-items-center">
						<Col className="text-start">
							<LinkContainer to="/store">
								<p className="fs_10 text-decoration-underline cp">
									Continue Shopping
								</p>
							</LinkContainer>
						</Col>
						<Col className="text-end">
							<LinkContainer to="/order">
								<Button className="fs_10 px-5 orderBtn">Order Now</Button>
							</LinkContainer>
						</Col>
					</Row>
				</>
			) : (
				<>
					<div className="cartPage__header empty">
						<h1 className="fw-bold">YOUR SHOPPING BAG IS EMPTY</h1>
						<LinkContainer to="/store">
							<p className="c_primary fst-italic text-decoration-underline cp">
								Keep shopping
							</p>
						</LinkContainer>
					</div>
				</>
			)}
		</div>
	)
}

export default Cart
