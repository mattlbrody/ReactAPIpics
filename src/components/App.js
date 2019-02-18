import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {

	onSearchSubmit(term) {
		axios.get('https://api.unsplash.com/search/photos', {
			params: { query: term },
			headers: {
				Authorization: 'Client-ID c54056e4d7b31746eedada1e0e7fe21d3793c2dc3aea63756ae188b8ddb0895a'
			}
		});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit}/>
			</div>
		);
	}
};

export default App;