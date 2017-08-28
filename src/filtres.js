import React from 'react';

class Filters extends React.Component {
	constructor() {
		super();
		this.state = {
			filters : ['Filtre1', 'Filtre2', 'Filtre3'],
			filtersActives : ['Filtre4']
		};
	}
	
	render() {
		const filtersList = this.state.filters.map((filter) =>
			<option>
				{filter}
			</option>
		);
		return (
			<div className="input-group" id='filter-form-toolbar'>
				<span className="input-group-addon">Filtres</span>
				<select className="selectpicker form-control">
					{filtersList}
				</select>
				<span className="input-group-btn">
					<button className="btn btn-default" type="button">Ajouter</button>
				</span>
			</div>
		);
	}
}

export default ListVideos;