import { Tab } from "bootstrap"
import React from "react"
import { Col, Nav, Row } from "react-bootstrap"
import { useSelector } from "react-redux"

import Orders from "../../components/Orders/Orders"

import "./OrderHistory.scss"

function OrderHistory() {
	const orderHistory = useSelector((state) => state.orderHistory)
	return (
		<div className="orderHistoryPage">
			<h1 className="text-center fs_26 fw-bold orderHistoryPage__header">
				THIS IS YOUR ORDER HISTORY
			</h1>
			<Orders orderHistory={orderHistory.slice(0, 3)} />
		</div>
	)
}

export default OrderHistory
