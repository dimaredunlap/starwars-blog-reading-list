import React, { useContext} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
// import { Row, Col, Container } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<Container fluid className="main">
			<div className="d-flex">
				<div>
					<img
						className="charimage"
						src="https://starwars-visualguide.com/assets/img/planets/3.jpg"
					/>
				</div>
				<div>
					<h1 className="display-4">{store.planets[params.theid].name}</h1>
					<h4 className="chartext">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.{" "}
					</h4>
				</div>
			</div>
			<hr className="line" />
			<Container>
				<Row>
					<Col>Name</Col>
					<Col>Diameter</Col>
					<Col>Rotation Period</Col>
					<Col>Orbital Period</Col>
					<Col>Gravity</Col>
					<Col>Population</Col>
                    <Col>Terrain</Col>
                    <Col>Surface Water</Col>
                    <Col>Climate</Col>
				</Row>
				<Row>
					<Col>{store.planets[params.theid].name || "NA"}</Col>
					<Col>{store.planets[params.theid].diameter || "NA"}</Col>
					<Col>{store.planets[params.theid].rotation_period || "NA"}</Col>
					<Col>{store.planets[params.theid].orbital_period || "NA"}</Col>
					<Col>{store.planets[params.theid].gravity || "NA"}</Col>
					<Col>{store.planets[params.theid].population || "NA"}</Col>
                    <Col>{store.planets[params.theid].terrain || "NA"}</Col>
                    <Col>{store.planets[params.theid].surface_water || "NA"}</Col>
                    <Col>{store.planets[params.theid].climate || "NA"}</Col>
				</Row>
			</Container>
		</Container>
	);
};
