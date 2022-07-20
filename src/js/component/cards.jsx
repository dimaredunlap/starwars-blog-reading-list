import React, { useState, useEffect, useContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/index.css";

// Card1.propTypes = {
// 	name: PropTypes.string,
// 	gender: PropTypes.string,
// 	hair_color: PropTypes.string,
// 	eye_color: PropTypes.string,
// 	i: PropTypes.string,
// 	source: PropTypes.string
// };
// Card2.propTypes = {
// 	name: PropTypes.string,
// 	i: PropTypes.string,
// 	source: PropTypes.string,
// 	model: PropTypes.string,
// 	length: PropTypes.string,
// 	cost_in_credits: PropTypes.string
// };
// Card3.propTypes = {
// 	name: PropTypes.string,
// 	i: PropTypes.string,
// 	source: PropTypes.string,
// 	terrain: PropTypes.string,
// 	population: PropTypes.string,
// 	climate: PropTypes.string
// };


export const Card1 = props => {
	const { store, actions } = useContext(Context);
	return (
		<Col>
			<Card className="bg-dark text-white" style={{ width: "30rem" }}>
				<Card.Img
					className="imagen"
					variant="top"
					src={store.image + props.uid + ".jpg"}
				/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text className="info">
						<Row>Gender: {props.gender}</Row> 
						<Row>Hair-Color: {props.hair_color}</Row>
						<Row>Eye-Color: {props.eye_color}</Row>
					</Card.Text>
					<Link to={"/people/" + props.i}>
						<Button variant="primary" onClick={() => actions.getPerson(props.uid)}>Learn More</Button>
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
					src={store.image + props.uid + ".jpg"}
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
					src={store.image + props.uid + ".jpg"}
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