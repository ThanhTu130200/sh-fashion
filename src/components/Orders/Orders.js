import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import convertCurrency from "../../function/convertCurrency"

import "./Order.scss"

function Orders({ orderHistory }) {
	return (
		<Container className="orderHistoryComponent">
			<Row className="border-bottom header">
				{/* Hide on mobile */}
				<Col sm={2} className="text-muted text-start fs_10 d-none d-sm-block">
					ORDER NO
				</Col>

				<Col sm={2} xs={3} className="text-muted text-start fs_10">
					ORDER DATE
				</Col>
				<Col xs={5} className="text-muted text-start fs_10">
					PRODUCTS
				</Col>
				<Col sm={1} xs={2} className="text-muted text-start fs_10">
					STATUS
				</Col>
				<Col xs={2} className="text-muted text-end fs_10">
					TOTAL AMOUNT
				</Col>
			</Row>
			{orderHistory.map((order, index) => (
				<div key={index} className="border-bottom order">
					<Row className="mb_24">
						{/* Hide on mobile */}
						<Col
							sm={2}
							className="text-start fs_10 align-items-center d-none d-sm-flex">
							#{order.id}
						</Col>

						<Col sm={2} xs={3} className="text-start fs_10 d-flex align-items-center">
							{order.date}
						</Col>
						<Col xs={5} className="text-start fs_10">
							<Row className="g-2 item">
								<Col sm={2} className="d-flex align-items-center">
									<div
										className="img border"
										style={{
											backgroundImage: `url(${order.items[0].image})`,
										}}
									/>
								</Col>
								<Col sm={10} className="d-flex align-items-center">
									<div className="content">
										<h2 className="text-start fs_10 m-0 fw-bold">
											{order.items[0].name.toUpperCase()}
										</h2>
										<p className="text-muted">
											{"Article number: " + order.items[0].id}
										</p>
									</div>
								</Col>
							</Row>
						</Col>
						<Col sm={1} xs={2} className="text-start fs_10 d-flex align-items-center">
							OPEN
						</Col>
						<Col
							xs={2}
							className="text-end fs_10 d-flex align-items-center justify-content-end">
							{convertCurrency(order.total)}
						</Col>
					</Row>
					{order.items.length > 1
						? order.items.map(
								(item, index) =>
									index !== 0 && (
										<Row key={index} className="mb_24">
											<Col sm={2} className="d-none d-sm-block"></Col>
											<Col sm={2} xs={3}></Col>
											<Col xs={5}>
												<Row className="g-2 item">
													<Col
														sm={2}
														className="d-flex align-items-center">
														<div
															className="img border"
															style={{
																backgroundImage: `url(${item.image})`,
															}}
														/>
													</Col>
													<Col
														sm={10}
														className="d-flex align-items-center">
														<div className="content">
															<h2 className="text-start fs_10 m-0 fw-bold">
																{item.name.toUpperCase()}
															</h2>
															<p className="text-muted fs_10">
																{"Article number: " + item.id}
															</p>
														</div>
													</Col>
												</Row>
											</Col>
											<Col sm={1} xs={2}></Col>
											<Col xs={2}></Col>
										</Row>
									)
						  )
						: ""}
				</div>
			))}
		</Container>
	)
}

export default Orders
