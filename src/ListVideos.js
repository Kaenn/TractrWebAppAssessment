import React from 'react';
import VideoLink from './VideoLink';
import Filters from './Filters';

class ListVideos extends React.Component {
	constructor() {
		super();
		this.state = {
			filtersActive : []
		};
	}
	
	haveCommonFilters(filtersA, filtersB){
	  for(var keyA in filtersA){
		  for(var keyB in filtersB){
			  if(filtersA[keyA] === filtersB[keyB]){
				  return true;
			  }
		  }
	  }

	  return false;
	}
	
	updateFilter(filtersActive){
		this.setState({filtersActive : filtersActive});
	}
	
	render() {
		let onClick= this.props.onClick;
		let videos = this.props.videos;
		if(videos === null)
			videos = [];
		
		const videoLinks = videos.filter((videoDesc) => {
			if(this.state.filtersActive.length > 0){
				if(this.haveCommonFilters(this.state.filtersActive, videoDesc.filters))
					return videoDesc;
			}else
				return videoDesc;
		  }).map((videoDesc) => {
			return <VideoLink 
				url={videoDesc.url}
				title={videoDesc.title}
				author={videoDesc.author}
				onClick={() => {onClick(videoDesc.id)}}
			/>
		});

		return (
			<div className="container">
				<div className="page-header">
				  <h1>Vidéos</h1>
				</div>
				
				{this.props.filters !== null ? (
					<Filters 
						onChange={(filters) => {this.updateFilter(filters)}}
						filters={this.props.filters}
					/>
				) : (
					<span>Filtres en chargement...</span>
				)}	
				
				<div className='row'>
					<div className="col-lg-12">
						<div id="videos-container">
						{this.props.videos !== null && videoLinks.length > 0 ? (
							videoLinks
						) : this.props.videos !== null ? (
							<span>Aucune vidéo ne correspond au filtre</span>	
						) : (
							<span>Liste en chargement...</span>
						)}
						
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ListVideos;