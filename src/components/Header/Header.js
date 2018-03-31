import React from "react";
import { Col, Row, Container } from "../Grid";

const Header = props => (
	<div>
		<Row>
			<Col size="lg-3 md-3 sm-6 xs-12">
				<img src="./img/logo.png" className="img img-responsive center-block" />
			</Col>
			<Col size="lg-3 md-3 sm-6 xs-12">
				<h2>{props.message}</h2>
			</Col>
			<Col size="lg-3 md-3 sm-6 xs-12">
				<h2>Best: {props.hiscore}</h2>
			</Col>
			<Col size="lg-3 md-3 sm-6 xs-12">
				<h2>Score: {props.score}</h2>
			</Col>
		</Row>
		<Row>
			<Col size="lg-12 md-12 sm-12 xs-12">
				<p class="text-center">Click on a Veggie Friend to play, but don't click the same one twice! How many can you get without repeating yourself?</p>
			</Col>
		</Row>
	</div>
);

export default Header;
