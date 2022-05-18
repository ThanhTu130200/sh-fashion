import React from "react"
import { Container } from "react-bootstrap"
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
			</div>
		</DefaultLayout>
	)
}

export default Cart
