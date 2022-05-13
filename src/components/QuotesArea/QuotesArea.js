import React from "react"
import { Col, Container, Row } from "react-bootstrap"

import "./QuotesArea.scss"

function QuotesArea() {
	return (
		<div className="quotesArea pt-2">
			<div className="quotesArea__desktop d-none d-sm-block">
				<div class="rectangle img_1-1"></div>
				<div class="square img_1-2"></div>
				<div class="square img_1-3"></div>
				<div class="square img_2-1"></div>

				<div class="square img_2-2"></div>
				<div class="square img_3-2"></div>
				<div class="rectangle img_3-2"></div>
				<div class="square img_2-2" style={{ marginTop: "-25%" }}></div>
				<div class="square img_2-2" style={{ marginTop: "-25%", marginLeft: "25%" }}></div>
				<div class="square img_2-2" style={{ marginTop: "-25%", marginLeft: "50%" }}></div>
			</div>
			<div class="quotesArea__mobile d-block d-sm-none">123</div>
		</div>
	)
}

export default QuotesArea
