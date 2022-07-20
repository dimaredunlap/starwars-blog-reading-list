const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			favorites: [],
			image: null,
		},
		actions: {
			getPeople: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://www.swapi.tech/api/people", requestOptions)
				  .then((res) => res.json())
				  .then((data) => setStore({ people: data }))
				  .catch((err) => console.error(err, error));
			},
			getVehicles: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://www.swapi.tech/api/vehicles", requestOptions)
				  .then((res) => res.json())
				  .then((data) => setStore({ vehicles: data }))
				  .catch((err) => console.error(err, error));
			},
			getPlanets: () => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://www.swapi.tech/api/planets", requestOptions)
				  .then((res) => res.json())
				  .then((data) => setStore({ planets: data }))
				  .catch((err) => console.error(err, error));
			},
		}
	};
};

export default getState;
