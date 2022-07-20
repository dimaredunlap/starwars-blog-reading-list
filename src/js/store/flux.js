const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			vehicles: [],
			planets: [],
			favorites: [],
			person: [],
			planet: [],
			image: "https://starwars-visualguide.com/assets/img/characters/",
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
			getPerson: async (uid) => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  await fetch(`https://www.swapi.tech/api/people/${uid}`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({ person: result}))
					.catch(error => console.log('error', error));
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
			planetData: async (uid) => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  await fetch(`https://www.swapi.tech/api/planets/${uid}`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({ planet: result}))
					.catch(error => console.log('error', error));
			},
		}
	};
};

export default getState;
