const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [

			],
			vehicles: [

			],
			planets: [

			],
			favorites: [
				
			],
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
				  
				  fetch("https://www.swapi.tech/api/planet", requestOptions)
				  .then((res) => res.json())
				  .then((data) => setStore({ planets: data }))
				  .catch((err) => console.error(err, error));
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
