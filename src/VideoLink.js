import React from 'react';

function VideoLink(props) {
	return (
		<div className='miniature-video' onClick={props.onClick}>
			<img width="240" height="180" src={props.url} />
			<div class="video-title">
				<span>{props.title}</span>
			</div>
			
			<div className='video-author'>
				<span>{props.author}</span>
			</div>
		</div>
	);
}

export default VideoLink;