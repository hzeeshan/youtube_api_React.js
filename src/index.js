import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCGSEtqER5i0iiqZISuws1P7e1j2iQZ48o';


class App extends Component  {

	constructor(props) {

		super(props);

		this.state = { videos: [] };

		YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) =>  {

		this.setState({ videos });
  // if  we have two same name values like { videos: videos } then we can also write { videos }

		});
	}


	render() {

		return (

		<div>
			<SearchBar />
			<VideoDetail video={this.state.videos[0]} />
			<VideoList videos={this.state.videos} />
		</div>

		);
	}
	
}

ReactDOM.render(<App />, document.querySelector('.container'));