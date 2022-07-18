import React, { useState, useEffect, useContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import { Col, Row } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Card1 = props => {
	const { store, actions } = useContext(Context);
	return (
		<Col>
			<Card className="bg-dark text-white" style={{ width: "30rem" }}>
				<Card.Img
					className="imagen"
					variant="top"
					src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_86916bb6.jpeg?region=304%2C0%2C1778%2C1000&width=1536"
				/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text className="info">
						<Row>Gender: {props.gender}</Row> 
						<Row>Hair-Color: {props.hair_color}</Row>
						<Row>Eye-Color: {props.eye_color}</Row>
					</Card.Text>
					<Link to={"/people/" + props.i}>
						<Button variant="primary">Learn More</Button>
					</Link>
					<Button className="heart" variant="warning" onClick={() => actions.favoritesInfo(props.name)}>
						<i className="far fa-heart" />
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};
export const Card2 = props => {
	const { store, actions } = useContext(Context);
	return (
		<Col>
			<Card className="bg-dark text-white" style={{ width: "30rem" }}>
				<Card.Img
					className="imagen"
					variant="top"
					src="https://starwarsblog.starwars.com/wp-content/uploads/2020/12/hans-speeder-main-b_e7ca0176.jpg"
				/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text>
						<tr>Model: {props.model}</tr>
						<tr>Length: {props.length}</tr>
						<tr>Cost: {props.cost_in_credits}</tr>
					</Card.Text>
					<Link to={"/vehicles/" + props.i}>
						<Button variant="primary">Learn More</Button>
					</Link>
					<Button className="heart" variant="warning">
						<i className="far fa-heart" onClick={() => actions.favoritesInfo(props.name)} />
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};
export const Card3 = props => {
	const { store, actions } = useContext(Context);
	return (
		<Col>
			<Card className="bg-dark text-white" style={{ width: "30rem" }}>
				<Card.Img
					className="imagen"
					variant="top"
					src="https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C720"
				/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text>
						<tr>Terrain: {props.terrain}</tr>
						<tr>Population: {props.population}</tr>
						<tr>Climate: {props.climate}</tr>
					</Card.Text>
					<Link to={"/planets/" + props.i}>
						<Button variant="primary">Learn More</Button>
					</Link>
					<Button className="heart" variant="warning">
						<i className="far fa-heart" onClick={() => actions.favoritesInfo(props.name)} />
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

Card1.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string
};
Card2.propTypes = {
	name: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string,
	model: PropTypes.string,
	length: PropTypes.string,
	cost_in_credits: PropTypes.string
};
Card3.propTypes = {
	name: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string,
	terrain: PropTypes.string,
	population: PropTypes.string,
	climate: PropTypes.string
};
// Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
