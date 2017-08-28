import React from 'react';
import ToolBar from './ToolBar';
import ListVideos from './ListVideos';
import DetailVideo from './DetailVideo';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			isDetailPage : false,
			videos : null,
			filters : null,
			videoDetail : null
		};
		
		this.getFilters();
		this.getVideos();
	}
	
	getVideos(){
		fetch('/api/GetVideos', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		})
		.then(r => r.json())
		.then(data => {
		  	this.setState({videos : data})
		})
		.catch(() => { 
			console.log('Can\'t get videos');
			this.setState({
				videos : [
					{
						id : 'S1Br9SRv3EA',
						author : "Auteur de la video",
						title : "Titre de la video",
						filters : ['filter1', 'filter2']
					},
					{
						id : 'S1Br9SRv3EA',
						author : "Auteur de la video2",
						title : "Titre de la video2",
						filters : ['filter2', 'filter3']
					},
					{
						id : 'S1Br9SRv3EA',
						author : "Auteur de la video3",
						title : "Titre de la video3",
						filters : ['filter1', 'filter3']
					}
				]
			});
		});
	}
	
	getFilters(){
		fetch('/api/GetFilters', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		})
		.then(r => r.json())
		.then(data => {
		  	this.setState({filters : data})
		})
		.catch(() => { 
			console.log('Can\'t get filters')
			this.setState({
				filters : ['filter1', 'filter2', 'filter3', 'filter4']
			});
		});
	}
	
	getVideo(id){
		return fetch('/api/GetVideo?id=' + id, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		})
		.then(r => r.json())
		.then(data => { this.setState({videoDetail : data}); })
		.catch(() => { 
			console.log('Can\'t get video ID ' + id);
			this.setState(
				{
					videoDetail : {
						'id' : 'S1Br9SRv3EA',
 						'author' : 'glenn',
						'title' : 'titre glenn',
						'filters' : ['filter1', 'filter2', 'filter3'],
						'description' : "Etenim si attendere diligenter, existimare vere de omni hac causa volueritis, sic constituetis, iudices, nec descensurum quemquam ad hanc accusationem fuisse, cui, utrum vellet, liceret, nec, cum descendisset, quicquam habiturum spei fuisse, nisi alicuius intolerabili libidine et nimis acerbo odio niteretur. Sed ego Atratino, humanissimo atque optimo adulescenti meo necessario, ignosco, qui habet excusationem vel pietatis vel necessitatis vel aetatis. Si voluit accusare, pietati tribuo, si iussus est, necessitati, si speravit aliquid, pueritiae. Ceteris non modo nihil ignoscendum, sed etiam acriter est resistendum."
					}
				}
			);
		});
	}
	
	goToDetail(id){
		this.setState({videoDetail : null, isDetailPage : true});
		
		this.getVideo(id);
	}
	
	goToListVideos(){
		this.getFilters();
		this.getVideos();
		
		this.setState({isDetailPage : false});
	}
	
	render(){
		
		return (
			<div>
				<ToolBar />
				{this.state.isDetailPage ? (
			        <DetailVideo
			        	detail={this.state.videoDetail}
			        	backButton={() => {this.goToListVideos()}}
			        />
				) : (
					<ListVideos
						videos={this.state.videos}
						onClick={(id) => {this.goToDetail(id)}}
						filters={this.state.filters}
					/>
			    )}
			</div>
		);
	}
}

export default App;