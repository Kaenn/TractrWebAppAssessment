import React from 'react';

class Filters extends React.Component {
	constructor(props) {
		super();
		this.state = {
			filtersInactive : props.filters,
			filtersActives : []
		};
	}
	
	addFilter(filter, callback){
		var filtersActive = this.state.filtersActives;
		var filtersInactive = this.state.filtersInactive;
		
		var index = filtersInactive.indexOf(filter);
		if (index > -1) {
			filtersInactive.splice(index, 1);
			
			filtersActive.push(filter);
		}
		
		this.setState({
			filtersActives : filtersActive,
			filtersInactive : filtersInactive
		});
		
		callback(filtersActive);
	}
	
	removeFilter(filter, callback){
		var filtersActive = this.state.filtersActives;
		var filtersInactive = this.state.filtersInactive;
		
		var index = filtersActive.indexOf(filter);
		if (index > -1) {
			filtersActive.splice(index, 1);
			
			filtersInactive.push(filter);
		}
		
		this.setState({
			filtersActives : filtersActive,
			filtersInactive : filtersInactive
		});
		
		callback(filtersActive);
	}
    
	render() {
		const filtersList = this.state.filtersInactive.map((filter) =>
			<option>
				{filter}
			</option>
		);
		
		const filterActivesList = this.state.filtersActives.map((filter) =>
			<span className="label label-primary">
				{filter} 
				&nbsp;
				<span className="glyphicon glyphicon-remove remove-filter" aria-hidden="true" onClick={() => {this.removeFilter(filter, this.props.onChange); }}></span>
			</span>
		);
		
		return (
			<div>
				<div className='row'>
					<div className="col-lg-4">
						<div className="input-group" id='filter-form-toolbar'>
							<span className="input-group-addon">Filtres</span>
							<select className="selectpicker form-control" ref = {(input)=> this.filtersMenu = input}>
								{filtersList}
							</select>
							<span className="input-group-btn">
								<button className="btn btn-default" type="button" onClick={() => {this.addFilter(this.filtersMenu.value, this.props.onChange)}}>Ajouter</button>
							</span>
						</div>
					</div>
				</div>
				
				<div className='row'>
					<div className="col-lg-12">
						<div id='filter-list-toolbar'>
							{filterActivesList}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Filters;