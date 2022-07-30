import React, { useState, useEffect, useContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Card1 = props => {
	const { store, actions } = useContext(Context);
	return (
		<Col>
			<Card className="bg-dark text-white">
				<Card.Img
					className="imagen"
					variant="top"
					src={store.image + props.uid + ".jpg"}
				/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Link to={"/people/" + props.uid}>
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
			<Card className="bg-dark text-white">
				<Card.Img
					className="imagen"
					variant="top"
					src={store.image + props.uid + ".jpg"}
				/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Link to={"/vehicles/" + props.uid}>
						<Button variant="primary">Learn More</Button>
					</Link>
					<Button className="heart" variant="warning">
						<i className="far fa-heart" onClick={() => actions.get(props.name)} />
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
			<Card className="bg-dark text-white">
				<Card.Img
					className="imagen"
					variant="top"
					src={store.image + props.uid + ".jpg"}
				/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Link to={"/planets/" + props.uid}>
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