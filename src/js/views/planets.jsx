import React, { useContext, useEffect} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
    useEffect(() => {
        actions.getPlanet(theid)
    },[]);
	return (
		<div>
            {store.planet.result ?(
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
					<Col>Name: {store.planet.result.properties.name}</Col>
					<Col>Diameter: {store.planet.result.properties.diameter}</Col>
					<Col>Rotation Period: {store.planet.result.properties.rotation_period}</Col>
					<Col>Orbital Period: {store.planet.result.properties.orbital_period}</Col>
					<Col>Gravity: {store.planet.result.properties.gravity}</Col>
					<Col>Population: {store.planet.result.properties.population}</Col>
                    <Col>Terrain: {store.planet.result.properties.terrain}</Col>
                    <Col>Surface Water: {store.planet.result.properties.surface_water}</Col>
                    <Col>Climate: {store.planet.result.properties.climate}</Col>
				</Row>
			</Container>
		</Container>
		 ) : (
			<h1>Loading</h1>
		)}
	</div>
	)
}
