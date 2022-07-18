import React, { useContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = props => {
    const{ store} = useContext(Context);
    const params = useParams();
    return (
        <Container fluid className="main">
            <div className="d-flex">
                <div>
                    <img className="charimage"
						src="https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785">
                    </img>
                </div>
                <div>
					<h1 className="display-4">{store.people[params.theid].name}</h1>
					<h4 className="chartext">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.{" "}
					</h4>
				</div>
                <hr className="horzline"/>
                <Container>
                    <Row>
                        <Col>Name</Col>
                        <Col>Birth Year</Col>
                        <Col>Gender</Col>
                        <Col>Height</Col>
                        <Col>Skin Color</Col>
                        <Col>Eye Color</Col>
                    </Row>
                    <Row>
                        <Col>{store.people[params.theid].name}</Col>
                        <Col>{store.people[params.theid].birth_year}</Col>
                        <Col>{store.people[params.theid].gender}</Col>
                        <Col>{store.people[params.theid].height}</Col>
                        <Col>{store.people[params.theid].skin_color || "NA"}</Col>
                        <Col>{store.people[params.theid].eye_color}</Col>
                    </Row>
                </Container>
            </div>
        </Container> 
    )
}