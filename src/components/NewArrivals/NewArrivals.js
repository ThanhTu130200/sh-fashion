import React from "react"
import { useSelector } from "react-redux"

import { LinkContainer } from "react-router-bootstrap"
import { Card, Button } from "react-bootstrap"

import "./NewArrivals.scss"

function NewArrivals() {
	const categories = useSelector((state) => state.categories)
	let newestItem

	if (categories.length !== 0) {
		newestItem = categories[3].items[categories[0].items.length - 1]
	}

	return (
		<Card
			className="text-center newArrivalsComponents border-0 position-relative"
			style={{
				backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${
					newestItem ? newestItem.image : ""
				})`,
			}}>
			{newestItem ? (
				<Card.Body>
					<Card.Title>{newestItem.name}</Card.Title>
					<Card.Text className="second_font">{newestItem.description}</Card.Text>
					<LinkContainer to={`store/item-${newestItem.id}`}>
						<Button variant="secondary" className="fs_10">
							Check new arrivals
						</Button>
					</LinkContainer>
				</Card.Body>
			) : (
				""
			)}
		</Card>
	)
}

export default NewArrivals
