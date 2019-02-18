import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 
			'Client-ID c54056e4d7b31746eedada1e0e7fe21d3793c2dc3aea63756ae188b8ddb0895a'
	}
});