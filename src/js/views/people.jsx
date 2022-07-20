import React, { useContext} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = props => {
    const{ store, actions } = useContext(Context);
    const params = useParams();
    console.log("person", store);
    return (
        <div>
            {store.person.result ?(
        <Container fluid className="main">
            <div className="d-flex">
                <div>
                    <img className="charimage"
						src={store.image + props.uid + ".jpg"}>
                    </img>
                </div>
                <div>
					{/* <h1 className="display-4">{store.people[params.theid].name}</h1> */}
					<p className="chartext">
                        {store.person.result.description}
					</p>
				</div>
                <hr className="horzline"/>
                <Container>
                    <Row>
                        <Col>Name: {store.person.result.properties.name}</Col>
                        <Col>Birth Year : {store.person.result.properties.birth_year}</Col>
                        <Col>Gender: {store.person.result.properties.gender}</Col>
                        <Col>Height: {store.person.result.properties.height}</Col>
                        <Col>Skin Color: {store.person.result.properties.skin_color}</Col>
                        <Col>Eye Color: {store.person.result.properties.eye_color}</Col>
                    </Row>
                </Container>
            </div>
        </Container> 
            ) : (
                <h1>Loading</h1>
            )}
        </div>
    )
}