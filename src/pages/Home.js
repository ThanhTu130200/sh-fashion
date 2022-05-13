import React from "react"
import NewArrivals from "../components/NewArrivals/NewArrivals"
import QuotesArea from "../components/QuotesArea/QuotesArea"

import DefaultLayout from "../layouts/DefaultLayout"

function Home() {
	return (
		<DefaultLayout>
			<div className="homePage text-center">
				<NewArrivals />
				<QuotesArea />
			</div>
		</DefaultLayout>
	)
}

export default Home
