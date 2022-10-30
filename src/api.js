export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b3a3f4b611msh94fa3d116beb296p180df0jsnb5738dabf27b',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions'


// fetch(GEO_API_URL, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));