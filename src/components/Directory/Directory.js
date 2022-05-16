import React from "react"
import { LinkContainer } from "react-router-bootstrap"

import "./Directory.scss"

function Directory({ directory }) {
	return (
		<div className="directory d-flex">
			<LinkContainer to="/">
				<p className="fs_10 me-3 cp text-muted">HOME</p>
			</LinkContainer>
			{directory.map((path) => (
				<div key={path} className="d-flex">
					<p className="fs_10 me-3 text-muted">/</p>
					<LinkContainer to={`/${path}`}>
						<p className="fs_10 me-3 cp text-muted">{path.toUpperCase()}</p>
					</LinkContainer>
				</div>
			))}
		</div>
	)
}

export default Directory
