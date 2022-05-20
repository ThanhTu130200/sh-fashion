import React from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch } from "react-redux"

import { decreaseItem, increaseItem, removeItem } from "../../../redux/actions"

import convertCurrency from "../../../function/convertCurrency"

import "./CartItem.scss"

function CartItem({ item }) {
	const dispatch = useDispatch()

	return (
		<Row className="cartItem border-bottom">
			<Col
				xs={2}
				className="fs_10 text-start d-flex align-items-center justify-content-center">
				<div className="img border" style={{ backgroundImage: `url(${item.image})` }} />
			</Col>
			<Col
				xs={4}
				className="fs_10 text-start d-flex align-items-center justify-content-start">
				<div>
					<p className="text-uppercase fw-bold">{item.name}</p>
					<p className="text-muted">{"Article number: " + item.id}</p>
				</div>
			</Col>
			<Col xs={2} className="fs_10 d-flex align-items-center justify-content-center">
				{item.quantity}
				<div className="plusAndMinus d-flex flex-column">
					<p
						onClick={() => {
							dispatch(increaseItem(item))
						}}>
						+
					</p>
					<p
						onClick={() => {
							dispatch(decreaseItem(item))
						}}>
						-
					</p>
				</div>
			</Col>
			<Col xs={2} className="fs_10 d-flex align-items-center justify-content-center">
				{convertCurrency(item.price * item.quantity)}
			</Col>
			<Col xs={2} className="fs_10 d-flex align-items-center justify-content-end">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-x-lg me-2 cp"
					viewBox="0 0 16 16"
					onClick={() => {
						dispatch(removeItem(item))
					}}>
					<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
				</svg>
			</Col>
		</Row>
	)
}

export default CartItem
