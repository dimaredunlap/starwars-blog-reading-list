import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../store/appContext";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


export const Nav = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<Navbar className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png" />
			</Link>
			<Dropdown>
				<Dropdown.Toggle className="toggle" variant="danger" id="dropdown-basic" size="lg">
					Favorites
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{store.favorites.length > 0 ? (
						store.favorites.map((favorites, i) => (
							<Dropdown.Item href="#/action-1" key={i}>
								{favorites}
								<Button variant="danger" onClick={() => actions.favoritesInfo(favorites, i)}>
									<i className="fas fa-trash-alt" />
								</Button>
							</Dropdown.Item>
						))
					) : (
						<DropdownItem>There are no favorites</DropdownItem>
					)}
				</Dropdown.Menu>
			</Dropdown>
		</Navbar>
	);
};
