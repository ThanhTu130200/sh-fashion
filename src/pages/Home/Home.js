import React, { useEffect } from "react"
import NewArrivals from "../../components/NewArrivals/NewArrivals"
import Newsletter from "../../components/Newsletter/Newsletter"
import QuotesArea from "../../components/QuotesArea/QuotesArea"

import "./Home.scss"

function Home() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className="homePage text-center">
			<NewArrivals />
			<QuotesArea />
			<Newsletter />
		</div>
	)
}

export default Home
