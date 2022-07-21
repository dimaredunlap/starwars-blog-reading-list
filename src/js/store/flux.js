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
				  .then((data) => setStore({ people: data.results }))
				  .catch((err) => console.error(err, error));
			},
			getPerson: async (uid) => {
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  await fetch(`https://www.swapi.tech/api/people/${uid}`, requestOptions)
					.then(response => response.json())
					.then(data => setStore({ person: data}))
					.catch(error => console.log('error', error));
			},
			getPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets");
					if (response.ok) {
						const data = await response.json();
						setStore({ planets:data.results })
					}
				} catch (error) {
					throw Error(error);
				}
			},

			getPlanet: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
					if (response.ok) {
						const data = await response.json();
						setStore({ planet:data})
					}
				} catch (error) {
					throw Error(error);
				}
			},
			getVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/starships");
					if (response.ok) {
						const data = await response.json();
						setStore({ vehicles:data.results })
					}
				} catch (error) {
					throw Error(error);
				}
			},

			getVehicle: async (uid) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/starships/${uid}`);
					if (response.ok) {
						const data = await response.json();
						setStore({ vehicle:data})
					}
				} catch (error) {
					throw Error(error);
				}
			},
		}
	};
};

export default getState;
