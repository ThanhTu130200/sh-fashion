import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"

import Directory from "../../components/Directory/Directory"
import DefaultLayout from "../../layouts/DefaultLayout"

import "./About.scss"

function About() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<DefaultLayout>
			<div className="aboutPage">
				<Directory directory={["about"]} />
				<div className="header text-center">
					<h1 className="fw-bold fs_26">ABOUT</h1>
					<p className="text-muted fs_14 fst-italic">
						Lorem ipsum dolor sit amet enim. Etiam ullamcorp uspendisse a pellentesque.
					</p>
				</div>

				<Container className="content">
					<Row xs={1} md={2}>
						<Col>
							<img
								src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
								alt="fashion-img"
							/>
							<h2 className="fs_18 fw-bold">WHO WE ARE ?</h2>
							<p className="text-muted fs_10">
								Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
								pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
								malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies
								porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet
								enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla
								imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada
								fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing
								wisi. Aliquam erat ac ipsum. Integer aliquam purus.
							</p>
							<br />
							<p className="text-muted fs_10">
								Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla
								imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada
								fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing
								wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem
								tortor fringilla sed, vestibulum id, eleifend justo vel bibendum
								sapien massa ac turpis faucibus orci luctus non, consectetuer
								lobortis quis, varius in, purus. Integer ultrices posuere cubilia
								Curae, Nulla ipsum dolor lacus, suscipit adipiscing.
							</p>
						</Col>
						<Col>
							<img src="https://images.pexels.com/photos/6344637/pexels-photo-6344637.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
							<h2 className="fs_18 fw-bold">WHAT ARE WE DOING ?</h2>
							<p className="text-muted fs_10">
								Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus,
								suscipit adipiscing. Cum sociis natoque penatibus et ultrices
								volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante
								sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies
								eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget,
								bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer.
								Quisque cursus et, porttitor risus. Aliquam sem. In hendrerit nulla
								quam nunc, accumsan congue. Lorem ipsum primis in nibh vel risus.
								Sed vel lectus. Ut sagittis, ipsum dolor quam.
							</p>
							<br />
							<p className="text-muted fs_10">
								Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi
								ultricies a, gravida vitae, dapibus risus ante sodales lectus
								blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus
								quis, porttitor eros cursus lectus, pellentesque eget, bibendum a,
								gravida ullamcorper quam. Nullam viverra consectetuer. Quisque
								cursus et, porttitor risus. Aliquam sem. In hendrerit nulla quam
								nunc, accumsan congue. Lorem ipsum primis in nibh vel risus. Sed vel
								lectus. Ut sagittis, ipsum dolor quam.
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		</DefaultLayout>
	)
}

export default About
