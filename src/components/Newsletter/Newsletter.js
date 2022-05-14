import React from "react"
import { Form, Button, Container, Col, Row } from "react-bootstrap"
import "./Newsletter.scss"

function Newsletter() {
	return (
		<div className="newsletter">
			<Container>
				<Row>
					<Col>
						<div className="newsletterContent">
							<h1>Subscribe to receive discounts & more!</h1>
							<p className="text-muted second_font">
								Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque
								penatibus et ultrices volutpat.
							</p>
							<div className="inputGroup">
								<Form.Control
									type="email"
									placeholder="Your-Email"
									className="fs_12 fst-italic"
								/>
								<Button className="fs_12">Subscribe</Button>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Newsletter
