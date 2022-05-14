import React from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"

import "./QuotesArea.scss"

function QuotesArea() {
	return (
		<div className="quotesArea pt-2">
			<div className="quotesArea__desktop d-none d-sm-block">
				<div className="quote img_1-1">
					<div className="content">
						<h1>Heather grey basics</h1>
						<p>New Arrival</p>
					</div>
				</div>
				<div className="quote img_1-2">
					<div className="content">
						<h1>Heather grey basics</h1>
						<p>New Arrival</p>
					</div>
				</div>
				<div className="quote img_1-3">
					<div className="content">
						<h1>Heather grey basics</h1>
						<p>New Arrival</p>
					</div>
				</div>
				<div className="quote img_2-1">
					<div className="content">
						<h1>Heather grey basics</h1>
						<p>New Arrival</p>
					</div>
				</div>

				<div className="quote img_2-2">
					<div className="content">
						<h1>Heather grey basics</h1>
						<p>New Arrival</p>
					</div>
				</div>
				<div className="quote img_3-2">
					<div className="content">
						<h1>Heather grey basics</h1>
						<p>New Arrival</p>
					</div>
				</div>
				<div className="quote img_3-2">
					<div className="content">
						<h1>Heather grey basics</h1>
						<p>New Arrival</p>
					</div>
				</div>
				<div className="quote img_2-2">
					<div className="content">
						<h1>Heather grey basics</h1>
						<p>New Arrival</p>
					</div>
				</div>
				<div className="quote img_2-2">
					<div className="content">
						<h1>Heather grey basics</h1>
						<p>New Arrival</p>
					</div>
				</div>
				<div className="quote img_2-2">
					<div className="content">
						<h1>Heather grey basics</h1>
						<p>New Arrival</p>
					</div>
				</div>
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
