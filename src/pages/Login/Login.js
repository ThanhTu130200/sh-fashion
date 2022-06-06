import React, { useEffect, useState } from "react"
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { useNavigate } from "react-router-dom"
import { loggingIn } from "../../redux/actions"

// ========= Using redux-thunk ==========
// import { loginUser } from "../../redux/thunks"

import "./Login.scss"

function Login() {
	const [validated, setValidated] = useState(false)

	const user = useSelector((state) => state.user)
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSubmit = (event) => {
		event.preventDefault()
		event.stopPropagation()

		const form = event.currentTarget
		const username = event.target[0].value
		const password = event.target[1].value

		if (form.checkValidity() === true) {
			// =========== Using redux-saga ==========
			dispatch(loggingIn({ username, password }))

			// ============ Using redux-thunk ===========
			// loginUser(dispatch, { username, password })
		}

		setValidated(true)
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		if (user) navigate("/")
	}, [user])

	return (
		<div className="loginPage">
			<Form noValidate validated={validated} onSubmit={handleSubmit} className="text-center">
				<h1 className="fw-bold title">SIGN IN</h1>
				<p id="loginFeedback"></p>
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
							<Form.Control.Feedback type="invalid" className="text-start">
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
	)
}

export default Login
