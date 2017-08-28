import React from 'react';
import VideoLink from './VideoLink';

class Container extends React.Component {
	render() {
		let onClick= this.props.onClick;
		const videoLinks = this.props.videos.map((videoDesc, index) =>
			<VideoLink 
				url={videoDesc.url}
				title={videoDesc.title}
				author={videoDesc.author}
				onClick={() => {onClick(videoDesc.id)}}
			
			/>
		);
		return (
			<div className="container">
				<div className='row'>
					<div className="col-lg-12">
						<div id="videos-container">
							{videoLinks}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Container;