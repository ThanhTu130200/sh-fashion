import React, { useEffect, useState } from "react"
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { useNavigate } from "react-router-dom"

import convertCurrency from "../../function/convertCurrency"

import DefaultLayout from "../../layouts/DefaultLayout"
import { order } from "../../redux/actions"

import "./Order.scss"

function Order() {
	const cart = useSelector((state) => state.cart)
	const total = cart.reduce((total, item) => total + +item.price * +item.quantity, 0)
	const [validated, setValidated] = useState(false)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubmit = (event) => {
		const form = event.currentTarget
		event.preventDefault()
		event.stopPropagation()
		if (form.checkValidity() === false) {
		} else {
			navigate("/")
			dispatch(order())
		}
		setValidated(true)
	}

	useEffect(() => {
		if (cart.length < 1) {
			navigate("/cart")
		}
	})

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<DefaultLayout>
			<div className="orderPage">
				<Form
					noValidate
					validated={validated}
					onSubmit={handleSubmit}
					className="text-center">
					<div className="orderPage__header">
						<h1 className="fw-bold title">SHIPPING ADDRESS</h1>
						<p className="text-muted fst-italic">All fields are required</p>
					</div>
					<Row className="mx-0" xs={1}>
						<Form.Label className="fs_10 text-start p-0 deliveryMethod">
							DELIVERY METHOD
						</Form.Label>
						<Form.Select className="col">
							<option>Ship COD - $2</option>
						</Form.Select>
					</Row>

					{/* First name + Last name */}
					<Row>
						<Col>
							<Form.Group
								as={Col}
								controlId="validationCustomFirstName"
								className="text-start">
								<Form.Label className="fs_10">FIRST NAME</Form.Label>
								<InputGroup hasValidation>
									<Form.Control
										type="text"
										aria-describedby="inputGroupPrepend"
										required
									/>
									<Form.Control.Feedback className="fs_10" type="invalid">
										Please enter your first name.
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group
								as={Col}
								controlId="validationCustomLastName"
								className="text-start">
								<Form.Label className="fs_10">LAST NAME</Form.Label>
								<InputGroup hasValidation>
									<Form.Control
										type="text"
										aria-describedby="inputGroupPrepend"
										required
									/>
									<Form.Control.Feedback className="fs_10" type="invalid">
										Please enter your last name.
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
						</Col>
					</Row>

					{/* Address line 1 */}
					<Row className="mb-3" xs={1}>
						<Form.Group
							as={Col}
							controlId="validationCustomAddressLine1"
							className="text-start">
							<Form.Label className="fs_10">
								ADDRESS (<span className="fst-italic">line 1</span>)
							</Form.Label>
							<InputGroup hasValidation>
								<Form.Control
									type="text"
									aria-describedby="inputGroupPrepend"
									required
								/>
								<Form.Control.Feedback className="fs_10" type="invalid">
									Please enter your address.
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Row>

					{/* Address line 2 */}
					<Row className="mb-3" xs={1}>
						<Form.Group
							as={Col}
							controlId="validationCustomAddressLine2"
							className="text-start">
							<Form.Label className="fs_10">
								ADDRESS (<span className="fst-italic">line 2</span>)
							</Form.Label>
							<InputGroup hasValidation>
								<Form.Control
									type="text"
									aria-describedby="inputGroupPrepend"
									required
								/>
								<Form.Control.Feedback className="fs_10" type="invalid">
									Please enter your address.
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Row>

					{/* City + Postal code */}
					<Row>
						<Col>
							<Form.Group
								as={Col}
								controlId="validationCustomCity"
								className="text-start">
								<Form.Label className="fs_10">CITY</Form.Label>
								<InputGroup hasValidation>
									<Form.Control
										type="text"
										aria-describedby="inputGroupPrepend"
										required
									/>
									<Form.Control.Feedback className="fs_10" type="invalid">
										Please enter your city
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group
								as={Col}
								controlId="validationCustomPostalCode"
								className="text-start">
								<Form.Label className="fs_10">POSTAL CODE</Form.Label>
								<InputGroup hasValidation>
									<Form.Control
										type="text"
										aria-describedby="inputGroupPrepend"
										required
									/>
									<Form.Control.Feedback className="fs_10" type="invalid">
										Please enter your last postal code.
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
						</Col>
					</Row>

					{/* Phone number + email */}
					<Row>
						<Col>
							<Form.Group
								as={Col}
								controlId="validationCustomPhoneNumber"
								className="text-start">
								<Form.Label className="fs_10">PHONE NUMBER</Form.Label>
								<InputGroup hasValidation>
									<Form.Control
										type="text"
										aria-describedby="inputGroupPrepend"
										required
									/>
									<Form.Control.Feedback className="fs_10" type="invalid">
										Please enter your phone number
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group
								as={Col}
								controlId="validationCustomEmail"
								className="text-start">
								<Form.Label className="fs_10">EMAIL</Form.Label>
								<InputGroup hasValidation>
									<Form.Control
										type="text"
										aria-describedby="inputGroupPrepend"
										required
									/>
									<Form.Control.Feedback className="fs_10" type="invalid">
										Please enter your last email.
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
						</Col>
					</Row>

					<Row xs={2} className="fs_16 totalArea text-muted">
						<Col className="text-end">
							<p>Subtotal:</p>
						</Col>
						<Col>
							<p className="text-start fst-italic">{convertCurrency(total)}</p>
						</Col>
						<Col className="text-end">
							<p>Shipping:</p>
						</Col>
						<Col>
							<p className="text-start fst-italic">{convertCurrency(2)}</p>
						</Col>
						<Col className="text-end c_primary">
							<p>Total:</p>
						</Col>
						<Col>
							<p className="text-start c_primary fst-italic">
								{convertCurrency(total + 2)}
							</p>
						</Col>
					</Row>

					{/* Footer */}
					<Row className="mt-5 align-items-center">
						<Col className="text-start">
							<LinkContainer to="/cart">
								<p className="fs_10 text-decoration-underline cp">Back to cart</p>
							</LinkContainer>
						</Col>
						<Col className="text-end">
							<Button className="fs_10 px-5" type="submit">
								Order Now
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</DefaultLayout>
	)
}

export default Order
