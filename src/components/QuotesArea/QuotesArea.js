import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"

import convertCurrency from "../../function/convertCurrency"

import "./QuotesArea.scss"

function QuotesArea() {
	const categories = useSelector((state) => state.categories)

	let visibleItems = categories.map((category) => category.items.map((item) => item))

	visibleItems = [].concat.apply([], visibleItems).splice(0, 10)

	return (
		<div className="quotesArea pt-2">
			<div className="quotesArea__desktop d-none d-sm-block">
				{visibleItems
					? visibleItems.map((item, index) => (
							<LinkContainer
								key={index}
								to={`store/item-${item.id}`}
								style={{ backgroundImage: `url(${item.image})` }}>
								<div className="quote">
									<div key={index} className="content">
										<h1 className="name">{item.name}</h1>
										<p className="description">{item.description}</p>
										<p className="newArrival">New Arrival</p>
										<p className="price">{convertCurrency(item.price)}</p>
									</div>
								</div>
							</LinkContainer>
					  ))
					: ""}
			</div>
			<div className="quotesArea__mobile d-block d-sm-none">
				<Container>
					<Row xs={1}>
						{visibleItems
							? visibleItems.map((item, index) => (
									<LinkContainer
										key={index}
										to={`store/item-${item.id}`}
										style={{
											backgroundImage: `url(${item.image})`,
										}}>
										<Col className="quote">
											<div className="content">
												<h1 className="name">{item.name}</h1>
												<p className="price">
													{convertCurrency(item.price)}
												</p>
											</div>
										</Col>
									</LinkContainer>
							  ))
							: ""}
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default QuotesArea
