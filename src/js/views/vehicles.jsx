import React, { useContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div>
		{store.vehicle.result ?(
		<Container fluid className="main">
			<div className="d-flex">
				<div>
					<img
						className="charimage"
						src={store.image + props.uid + ".jpg"}					
						/>
				</div>
				<div>
				<p className="chartext">
                        {store.vehicle.result.description}
					</p>
				</div>
			</div>
			<hr className="line" />
			<Container>
				<Row>
					<Col>Name: {store.vehicle.result.properties.name}</Col>
					<Col>Model: {store.vehicle.result.properties.model}</Col>
					<Col>Length: {store.vehicle.result.properties.length}</Col>
					<Col>Cost in Credits: {store.vehicle.result.properties.cost_in_credits}</Col>
					<Col>Vehicle Class: {store.vehicle.result.properties.vehicle_class}</Col>
					<Col>Crew: {store.vehicle.result.properties.crew}</Col>
				</Row>
			</Container>
		</Container>
		) : (
			<h1>Loading</h1>
		)}
	</div>
	);
};
