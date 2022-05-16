import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

import Product from "./Product/Product"

import "./Products.scss"

function Products({ categories, numberOfProducts = null }) {
	return (
		<div className="products">
			{categories.length > 1 ? (
				categories.map((category) => (
					<div key={category.id} className="text-center category">
						<h1 className="fs-2 fw-bold categoryName">{category.name.toUpperCase()}</h1>
						<LinkContainer key={category.id} to={`/store/category-${category.id}`}>
							<p className="showMore fst-italic text-decoration-underline cp text-muted">
								Show more
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="8"
									height="8"
									fill="currentColor"
									className="bi bi-caret-right-fill ms-1"
									viewBox="0 0 16 16">
									<path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
								</svg>
							</p>
						</LinkContainer>
						<Container className="">
							<Row xs={2} sm={4}>
								{numberOfProducts
									? category.items.slice(-numberOfProducts).map((product) => (
											<Col key={product.id}>
												<Product product={product} />
											</Col>
									  ))
									: category.items.map((product) => (
											<Col key={product.id}>
												<Product product={product} />
											</Col>
									  ))}
							</Row>
						</Container>
					</div>
				))
			) : (
				<div className="text-center category">
					<h1 className="fs-2 fw-bold categoryName">{categories.name.toUpperCase()}</h1>
					<p className="showMore fst-italic text-muted">All products</p>
					<Container className="">
						<Row xs={2} sm={4}>
							{numberOfProducts
								? categories.items.slice(-numberOfProducts).map((product) => (
										<Col key={product.id}>
											<Product product={product} />
										</Col>
								  ))
								: categories.items.map((product) => (
										<Col key={product.id}>
											<Product product={product} />
										</Col>
								  ))}
						</Row>
					</Container>
				</div>
			)}
		</div>
	)
}

export default Products
