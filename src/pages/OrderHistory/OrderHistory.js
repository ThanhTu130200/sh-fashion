import React, { useState } from "react"
import { useSelector } from "react-redux"

import Orders from "../../components/Orders/Orders"

import "./OrderHistory.scss"

function OrderHistory() {
	const orderHistory = useSelector((state) => state.orderHistory)
	const [show, setShow] = useState(false)

	return (
		<div className="orderHistoryPage">
			<h1 className="text-center fs_26 fw-bold orderHistoryPage__header">
				THIS IS YOUR 10 LAST ORDERS
			</h1>

			{show ? (
				<Orders orderHistory={orderHistory.slice(0, 10)} />
			) : (
				<Orders orderHistory={orderHistory.slice(0, 3)} />
			)}
			<div
				className="text-center fs_10 cp showMoreBtn"
				onClick={() => {
					setShow(!show)
				}}>
				{show ? "SHOW ME LESS ORDERS" : "SHOW ME MORE ORDERS"}
			</div>
		</div>
	)
}

export default OrderHistory
