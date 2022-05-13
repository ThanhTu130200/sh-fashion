import React from "react"

import { Card, Button } from "react-bootstrap"

import "./NewArrivals.scss"

function NewArrivals() {
	return (
		<Card
			className="text-center newArrivalsComponents border-0 position-relative"
			style={{
				backgroundImage:
					"linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url('https://www.celeb.vn/wp-content/uploads/2021/07/high-fashion-la-gi-1.jpg')",
			}}>
			<Card.Body>
				<Card.Title>Hazy Shade of spring</Card.Title>
				<Card.Text className="second_font">
					Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.
				</Card.Text>
				<Button variant="secondary" className="fs_10">
					Check new arrivals
				</Button>
			</Card.Body>
		</Card>
	)
}

export default NewArrivals
