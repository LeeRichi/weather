export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3a3f4b611msh94fa3d116beb296p180df0jsnb5738dabf27b',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

// export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions'
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = '5cc7690a886767b4a2adb9b766603186';


// fetch(GEO_API_URL, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));