import React from 'react';

function VideoLink(props) {
	let url = "http://img.youtube.com/vi/" + props.id + "/0.jpg";
	return (
		<div className='miniature-video' onClick={() => {props.onClick(props.id)}}>
			<img width="240" height="180" src={url} />
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