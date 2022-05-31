import React from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch } from "react-redux"

import { decreaseItem, increaseItem, removeItem } from "../../../redux/actions"

import convertCurrency from "../../../function/convertCurrency"

import "./CartItem.scss"
import { LinkContainer } from "react-router-bootstrap"

function CartItem({ item }) {
	const dispatch = useDispatch()

	return (
		<>
			<Row className="cartItem border-bottom d-none d-md-flex">
				<LinkContainer to={`/store/product-details-${item.id}`}>
					<Col
						xs={2}
						className="fs_10 text-start d-flex align-items-center justify-content-center cp">
						<div
							className="img border"
							style={{ backgroundImage: `url(${item.image})` }}
						/>
					</Col>
				</LinkContainer>
				<Col
					xs={4}
					className="fs_10 text-start d-flex align-items-center justify-content-start">
					<div>
						<p className="text-uppercase fw-bold">{item.name}</p>
						<p className="text-muted">{"Article number: " + item.id}</p>
					</div>
				</Col>
				<Col xs={2} className="fs_10 d-flex align-items-center justify-content-end">
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
				<Col xs={2} className="fs_10 d-flex align-items-center justify-content-end">
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
			<Row className="cartItemMobile border-bottom d-md-none">
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
		</>
	)
}

export default CartItem
