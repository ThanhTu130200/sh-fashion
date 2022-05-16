import React, { useEffect, useState } from "react"
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import DefaultLayout from "../../layouts/DefaultLayout"

import "./Login.scss"

function Login() {
	const [validated, setValidated] = useState(false)
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const handleSubmit = (event) => {
		const form = event.currentTarget
		if (form.checkValidity() === false) {
			event.preventDefault()
			event.stopPropagation()
		}

		setValidated(true)
	}
	return (
		<DefaultLayout>
			<div className="loginPage">
				<Form
					noValidate
					validated={validated}
					onSubmit={handleSubmit}
					className="text-center">
					<h1 className="fw-bold title">SIGN IN</h1>
					<Row className="mb-3" xs={1}>
						<Form.Group
							as={Col}
							controlId="validationCustomUsername"
							className="text-start">
							<Form.Label className="fs_10">USERNAME</Form.Label>
							<InputGroup hasValidation>
								<Form.Control
									type="text"
									aria-describedby="inputGroupPrepend"
									required
								/>
								<Form.Control.Feedback type="invalid">
									Please enter your username.
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Row>
					<Row className="mb-3" xs={1}>
						<Form.Group as={Col} controlId="validationCustomPassword">
							<div className="d-flex justify-content-between">
								<Form.Label className="fs_10">PASSWORD</Form.Label>
								<p className="c_primary fs_12 second_font forgotPassword">
									forgot your password
								</p>
							</div>
							<InputGroup hasValidation>
								<Form.Control
									type="password"
									aria-describedby="inputGroupPrepend"
									required
								/>
								<Form.Control.Feedback type="invalid">
									Please enter a valid password.
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Row>
					<Button type="submit">LOGIN</Button>
					<LinkContainer to="/register">
						<p className="c_primary fs_12 fst-italic cp">I don't have and account</p>
					</LinkContainer>
				</Form>
			</div>
		</DefaultLayout>
	)
}

export default Login
