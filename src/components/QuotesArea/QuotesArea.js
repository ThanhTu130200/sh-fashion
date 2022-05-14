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
						<Col
							className="quote"
							style={{
								backgroundImage:
									"url('https://media.voguebusiness.com/photos/621e06bf17b9c2e9b062bc0b/master/pass/reliance-acquisition-voguebus-full-getty-credit-mar-22-story.jpg')",
							}}>
							<div className="content">
								<h1>Heather grey basics</h1>
								<p>New Arrival</p>
							</div>
						</Col>
						<Col
							className="quote"
							style={{
								backgroundImage:
									"url('https://cdnimg.vietnamplus.vn/t1200/Uploaded/fsmsr/2022_03_07/hoa_hau_luong_thuy_linh_8.png')",
							}}>
							<div className="content">
								<h1>Heather grey basics</h1>
								<p>New Arrival</p>
							</div>
						</Col>
						<Col
							className="quote"
							style={{
								backgroundImage:
									"url('https://media.voguebusiness.com/photos/621e06bf17b9c2e9b062bc0b/master/pass/reliance-acquisition-voguebus-full-getty-credit-mar-22-story.jpg')",
							}}>
							<div className="content">
								<h1>Heather grey basics</h1>
								<p>New Arrival</p>
							</div>
						</Col>
						<Col
							className="quote"
							style={{
								backgroundImage:
									"url('https://cdnimg.vietnamplus.vn/t1200/Uploaded/fsmsr/2022_03_07/hoa_hau_luong_thuy_linh_8.png')",
							}}>
							<div className="content">
								<h1>Heather grey basics</h1>
								<p>New Arrival</p>
							</div>
						</Col>
						<Col
							className="quote"
							style={{
								backgroundImage:
									"url('https://media.voguebusiness.com/photos/621e06bf17b9c2e9b062bc0b/master/pass/reliance-acquisition-voguebus-full-getty-credit-mar-22-story.jpg')",
							}}>
							<div className="content">
								<h1>Heather grey basics</h1>
								<p>New Arrival</p>
							</div>
						</Col>
						<Col
							className="quote"
							style={{
								backgroundImage:
									"url('https://cdnimg.vietnamplus.vn/t1200/Uploaded/fsmsr/2022_03_07/hoa_hau_luong_thuy_linh_8.png')",
							}}>
							<div className="content">
								<h1>Heather grey basics</h1>
								<p>New Arrival</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default QuotesArea
