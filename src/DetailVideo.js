import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class DetailVideo extends React.Component {
	render() {
		let filters = [];
		let url = '';
		if(this.props.detail !== null){
			filters = this.props.detail.filters;
			url = "https://www.youtube.com/embed/" + this.props.detail.id;
		}
		
		const filtersList = filters.map((filter) =>
			<span className="label label-primary">
				{filter} 
			</span>
		);
		
		return (
			<div className="container">
				<Button onClick={this.props.backButton}>Back</Button>
				{this.props.detail === null ? (
				     <div>
				     	<span>Loading detail...</span> 
				     </div>
				) : (
					<div>
						<div className='row'>
							<div className="page-header">
							  <h1>{this.props.detail.title}</h1>
							</div>
						</div>
						
						<div className='row'>
							<iframe width="560" height="315" frameBorder="0" src={url} frameborder="0" allowfullscreen></iframe>
						</div>
						
						<div className='row'>
							<div className='video-author'>
								<span>{this.props.detail.author}</span>
							</div>
						</div>
						<div className='row'>
							<div id='filter-list-toolbar'>
								{filtersList}
							</div>
						</div>
						
						<div className='row'>
							<div className='video-description'>
								<span>{this.props.detail.description}</span>
							</div>
						</div>
					</div>
				)}
			</div>	
		);
	}
}

export default DetailVideo;