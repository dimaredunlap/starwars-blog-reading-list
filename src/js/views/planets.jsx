import React, { useContext} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	
	return (
		<div>
            {store.planets.result ?(
		<Container fluid className="main">
			<div className="d-flex">
				<div>
					<img
						className="charimage"
						src={store.image + props.uid + ".jpg"}
					/>
				</div>
				<div>
					<p  className="chartext">
					{store.planet.result.description}
					</p>
				</div>
			</div>
			<hr className="line" />
			<Container>
				<Row>
					<Col>Name: {store.planets.result.properties.name}</Col>
					<Col>Diameter: {store.planets.result.properties.diameter}</Col>
					<Col>Rotation Period: {store.planets.result.properties.rotation_period}</Col>
					<Col>Orbital Period: {store.planets.result.properties.orbital_period}</Col>
					<Col>Gravity: {store.planets.result.properties.gravity}</Col>
					<Col>Population: {store.planets.result.properties.population}</Col>
                    <Col>Terrain: {store.planets.result.properties.terrain}</Col>
                    <Col>Surface Water: {store.planets.result.properties.surface_water}</Col>
                    <Col>Climate: {store.planets.result.properties.climate}</Col>
				</Row>
			</Container>
		</Container>
		 ) : (
			<h1>Loading</h1>
		)}
	</div>
	)
}
