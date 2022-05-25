import React, { useState } from "react"
import { useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"

import Orders from "../../components/Orders/Orders"

import "./OrderHistory.scss"

function OrderHistory() {
	const orderHistory = useSelector((state) => state.orderHistory)
	const [show, setShow] = useState(false)

	return (
		<div className="orderHistoryPage">
			{orderHistory.length > 0 ? (
				<>
					<div className="orderHistoryPage__header">
						<h1 className="text-center fs_26 fw-bold">THIS IS YOUR 10 LAST ORDERS</h1>
					</div>

					{show ? (
						<Orders orderHistory={orderHistory.slice(0, 10)} />
					) : (
						<Orders orderHistory={orderHistory.slice(0, 3)} />
					)}
					{orderHistory.length > 3 ? (
						<div
							className="text-center fs_10 cp showMoreBtn"
							onClick={() => {
								setShow(!show)
							}}>
							{show ? "SHOW ME LESS ORDERS" : "SHOW ME MORE ORDERS"}
						</div>
					) : (
						""
					)}
				</>
			) : (
				<div className="orderHistoryPage__header">
					<h1 className="text-center fs_26 fw-bold">YOUR ORDER HISTORY IS EMPTY</h1>
					<LinkContainer to="/store">
						<p className="text-center fst-italic text-decoration-underline cp c_primary keepShopping">
							Keep shopping
						</p>
					</LinkContainer>
				</div>
			)}
		</div>
	)
}

export default OrderHistory
