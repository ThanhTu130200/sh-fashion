import React from "react"
import { Navbar, Container, Form, FormControl, Button, Nav } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

import "./Nav.scss"

function NavComponent() {
	return (
		<Navbar
			fixed="top"
			bg="light"
			expand="lg"
			className="navComponent bg-white border-bottom fix_content">
			<Container fluid>
				<LinkContainer to="/">
					<Navbar.Brand
						href="#"
						className="navComponent__logo bg-black text-white text-center p-0 fs_12 fs_xs_20">
						<p className="m-0 p-0">SH</p>
					</Navbar.Brand>
				</LinkContainer>
				<LinkContainer to="/">
					<Nav.Link href="/" className="px-4 fs_12 fs_xs_20 d-flex text-black d-lg-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="34"
							height="34"
							fill="currentColor"
							className="bi bi-bag-check-fill"
							viewBox="0 0 16 16">
							<path
								fillRule="evenodd"
								d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
							/>
						</svg>
					</Nav.Link>
				</LinkContainer>
				<Navbar.Toggle aria-controls="navbarScroll">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						className="bi bi-list m-0 text-white"
						viewBox="0 0 16 16">
						<path
							fillRule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
				</Navbar.Toggle>
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto my-2 my-lg-0" navbarScroll>
						<LinkContainer to="/store">
							<Nav.Link href="/store" className="px-4 fs_12 fs_xs_20">
								Woman
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/">
							<Nav.Link href="/" className="px-4 fs_12 fs_xs_20">
								Men
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/">
							<Nav.Link href="/" className="px-4 fs_12 fs_xs_20">
								Kids
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/">
							<Nav.Link href="/" className="px-4 fs_12 fs_xs_20">
								Coming Soon
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/">
							<Nav.Link href="/" className="px-4 fs_12 fs_xs_20">
								About
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/">
							<Nav.Link href="/" className="px-4 fs_12 fs_xs_20 d-flex d-lg-none">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-person-fill mt-0"
									viewBox="0 0 16 16">
									<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
								</svg>
								<p className="mb-0">Login</p>
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
				<LinkContainer to="/">
					<Nav.Link
						href="/"
						className="px-4 fs_12 fs_xs_20 d-flex text-black d-none d-lg-flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							className="bi bi-bag-check-fill"
							viewBox="0 0 16 16">
							<path
								fillRule="evenodd"
								d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"
							/>
						</svg>
						<p className="mb-0">Basket</p>
					</Nav.Link>
				</LinkContainer>
				<LinkContainer to="/">
					<Nav.Link
						href="/"
						className="px-4 fs_12 fs_xs_20 d-flex text-black d-none d-lg-flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							className="bi bi-person-fill mr-2"
							viewBox="0 0 16 16">
							<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
						</svg>
						<p className="mb-0">Login</p>
					</Nav.Link>
				</LinkContainer>
			</Container>
		</Navbar>
	)
}

export default NavComponent
