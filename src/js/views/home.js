import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card1 } from "../component/cards.jsx";
import { Card2 } from "../component/cards.jsx";
import { Card3 } from "../component/cards.jsx";
import { useContext } from "react";
import { Col, Container } from "react-bootstrap";
import { Context } from "../store/appContext";



export const Home = props => {
	const { store, actions } = useContext(Context);
	// console.log("show",store);
	return (
		<Container fluid>
			<h1 className="home">Characters</h1>
			<Col className="scroll">
				{store.people.results && store.people.results.map((person, i) => {
					return (
						<Card1
							uid= {person.uid}
							key={i}
							name={person.name}
							i={i}
						/>
					);
				})}
			</Col>
			<h1 className="home">Vehicles</h1>
			<Col className="scroll">
			{store.vehicles.results && store.vehicles.results.map((vehicles, i) => {
					return (
						<Card2
							uid= {vehicles.uid}
							key={i}
							name={vehicles.name}
							i={i}
						/>
					);
				})}
			</Col>
			<h1 className="home">Planets</h1>
			<Col className="scroll">
			{store.planets.results && store.planets.results.map((planets, i) => {
					return (
						<Card3
							uid= {planets.uid}
							key={i}
							name={planets.name}
							i={i}
						/>
					);
				})}
			</Col>
		</Container>
	);
};

