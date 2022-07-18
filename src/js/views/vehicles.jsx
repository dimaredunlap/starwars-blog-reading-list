import React, { useContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<Container fluid className="main">
			<div className="d-flex">
				<div>
					<img
						className="charimage"
						src="https://lumiere-a.akamaihd.net/v1/images/juggernaut-transport-vehicle-main_09946f42.jpeg?region=329%2C0%2C951%2C536"
					/>
				</div>
				<div>
					<h1 className="display-4">{store.vehicles[params.theid].name}</h1>
					<h4 className="chartext">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.{" "}
					</h4>
				</div>
			</div>
			<hr className="line" />
			<Container>
				<Row>
					<Col>Name</Col>
					<Col>Model</Col>
					<Col>Length</Col>
					<Col>Cost in Credits</Col>
					<Col>Vehicle Class</Col>
					<Col>Crew</Col>
				</Row>
				<Row>
					<Col>{store.vehicles[params.theid].name}</Col>
					<Col>{store.vehicles[params.theid].model}</Col>
					<Col>{store.vehicles[params.theid].length}</Col>
					<Col>{store.vehicles[params.theid].cost_in_credits}</Col>
					<Col>{store.vehicles[params.theid].vehicle_class || "NA"}</Col>
					<Col>{store.vehicles[params.theid].crew}</Col>
				</Row>
			</Container>
		</Container>
	);
};
