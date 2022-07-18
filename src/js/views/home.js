import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/Cards";
import { Card2 } from "../component/Cards";
import { Card3 } from "../component/Cards";
import { useContext } from "react";
import { Col, Container } from "react-bootstrap";
import { Context } from "../store/appContext";



export const Home = props => {
	const { store, actions } = useContext(Context);
	return (
		<Container fluid>
			<h1 className="home">Characters</h1>
			<Col className="scroll">
				{store.people.map((person, i) => {
					return (
						<Card
							key={i}
							name={person.name}
							hair_color={person.hair_color}
							eye_color={person.eye_color}
							gender={person.gender}
							i={i}
						/>
					);
				})}
			</Col>
			<h1 className="home">Vehicles</h1>
			<Col className="scroll">
				{store.vehicles.map((vehicles, i) => {
					return (
						<Card2
							key={i}
							name={vehicles.name}
							i={i}
							model={vehicles.model}
							length={vehicles.length}
							cost_in_credits={vehicles.cost_in_credits}
						/>
					);
				})}
			</Col>
			<h1 className="home">Planets</h1>
			<Col className="scroll">
				{store.planets.map((planets, i) => {
					return (
						<Card3
							key={i}
							name={planets.name}
							i={i}
							diameter={planets.diameter}
							rotation_period={planets.rotation_period}
							orbital_period={planets.orbital_period}
							gravity={planets.gravity}
							population={planets.population}
							terrain={planets.terrain}
							surface_water={planets.surface_water}
							climate={planets.climate}
						/>
					);
				})}
			</Col>
		</Container>
	);
};

