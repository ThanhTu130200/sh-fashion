import React from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import convertCurrency from "../../../function/convertCurrency"
import { decreaseItem, increaseItem } from "../../../redux/actions"

import "./CartItemMobile.scss"

function CartItemMobile({ item }) {
	const dispatch = useDispatch()
	return (
		<Row className="cartItemMobile border-bottom">
			<LinkContainer to={`/store/product-details-${item.id}`}>
				<Col xs={3}>
					<div
						className="img border cp"
						style={{ backgroundImage: `url(${item.image})` }}
					/>
				</Col>
			</LinkContainer>

			<Col className="d-flex flex-column justify-content-evenly">
				<h1 className="fs_14 fw-bold text-start p-0 m-0">{item.name}</h1>
				<p className="text-muted fs_12 text-start p-0 m-0">
					{"Article number: " + item.id}
				</p>
				<p className="fs_14 text-start p-0 m-0">
					{"Price: " + convertCurrency(item.price)}
				</p>
				<div className="quantityAndPrice d-flex justify-content-between">
					<div className="fs_14 d-flex align-items-center">
						Quantity: <span className="ms-1 fw-bold">{item.quantity}</span>
						<div className="plusAndMinus d-flex flex-column">
							<p
								className="cp ms-2 plus"
								onClick={() => {
									dispatch(increaseItem(item))
								}}>
								+
							</p>
							<p
								className="cp ms-2 minus"
								onClick={() => {
									dispatch(decreaseItem(item))
								}}>
								-
							</p>
						</div>
					</div>
					<p className="fs_14 d-flex align-items-center">
						Total:
						<span className="ms-1 fw-bold">
							{convertCurrency(item.price * item.quantity)}
						</span>
					</p>
				</div>
			</Col>
		</Row>
	)
}

export default CartItemMobile
