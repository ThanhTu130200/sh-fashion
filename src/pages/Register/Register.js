import React, { useEffect, useState } from "react"
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { useNavigate } from "react-router-dom"

import DefaultLayout from "../../layouts/DefaultLayout"

import { registerUser } from "../../redux/thunks"

import "./Register.scss"

function Register() {
	const [validated, setValidated] = useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const user = useSelector((state) => state.user)

	const handleSubmit = (event) => {
		const form = event.currentTarget
		const username = event.target[0].value
		const password = event.target[1].value
		const confirmPassword = event.target[2].value

		const confirmPasswordFeedback = document.querySelector(".confirmPasswordFeedback")
		confirmPasswordFeedback.innerHTML = "Please confirm your password"
		confirmPasswordFeedback.classList.remove("d-block")

		event.preventDefault()
		event.stopPropagation()
		if (form.checkValidity() === false) {
		} else if (password !== confirmPassword) {
			confirmPasswordFeedback.innerHTML = "Your password and confirm password does not match"
			confirmPasswordFeedback.classList.add("d-block")
			event.target[2].classList.add("invalid")
		} else {
			registerUser(dispatch, { username, password })
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
		<DefaultLayout>
			<div className="registerPage">
				<Form
					noValidate
					validated={validated}
					onSubmit={handleSubmit}
					className="text-center">
					<h1 className="fw-bold title">SIGN IN</h1>
					<Row className="mb-3" xs={1}>
						<Form.Group as={Col} controlId="validationUsername" className="text-start">
							<Form.Label className="fs_10">USERNAME</Form.Label>
							<InputGroup hasValidation>
								<Form.Control
									type="text"
									aria-describedby="inputGroupPrepend"
									required
								/>
								<Form.Control.Feedback
									type="invalid"
									className="fs_10 usernameFeedback">
									Please choose a username
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Row>
					<Row className="mb-3" xs={1}>
						<Form.Group as={Col} controlId="validationPassword" className="text-start">
							<Form.Label className="fs_10">PASSWORD</Form.Label>
							<InputGroup hasValidation>
								<Form.Control
									type="password"
									aria-describedby="inputGroupPrepend"
									required
								/>
								<Form.Control.Feedback type="invalid" className="fs_10">
									Please choose a password
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Row>
					<Row className="mb-3" xs={1}>
						<Form.Group
							as={Col}
							controlId="validationConfirmPassword"
							className="text-start">
							<Form.Label className="fs_10">CONFIRM PASSWORD</Form.Label>
							<InputGroup hasValidation>
								<Form.Control
									type="password"
									aria-describedby="inputGroupPrepend"
									required
								/>
								<Form.Control.Feedback
									type="invalid"
									className="fs_10 confirmPasswordFeedback">
									Please confirm your password
								</Form.Control.Feedback>
							</InputGroup>
						</Form.Group>
					</Row>
					<Button type="submit">Register</Button>
					<LinkContainer to="/login">
						<p className="c_primary fs_12 fst-italic cp">I do have and account</p>
					</LinkContainer>
				</Form>
			</div>
		</DefaultLayout>
	)
}

export default Register
