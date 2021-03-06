import '../App.css';
import React from 'react';
import VideoList from './video-List';
import Video from '../composants/video';
import Search from '../composants/searchBar';
import axios from 'axios';
import VideoDetail from '../composants/video-detail';


const API_KEY = 'api_key=b1bb009f89a909c0ae0b65bc17104e0e';
const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: {},
            currentMovie: {}
        }
    }

    componentDidMount() {
        this.initMovies();
    }

    initMovies(){
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(res){
            this.setState({
                movieList: res.data.results.slice(1, 16),
                currentMovie: res.data.results[0]
            }, function(){
                this.applyCurrentVideo();
            });
        }.bind(this));        
    }

    applyCurrentVideo(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function (res){
            if (res.data.videos && res.data.videos.results[0]) {
                const youtubeKey = res.data.videos.results[0].key;
                let newCurrentMovieState = this.state.currentMovie;
                newCurrentMovieState.videoId = youtubeKey;
                this.setState({ currentMovie: newCurrentMovieState });
            }
        }.bind(this));
    }

    recevoirCallBack(movie){
        this.setState({currentMovie: movie}, ()=> {
            this.applyCurrentVideo();
            this.setRecommendation();
        });

    }

    setRecommendation(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`).then(function(res){
            this.setState({movieList: res.data.results.slice(0, 15)});
        }.bind(this));
    }

    onClickSearch(searchText){
        axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(function (res){
            console.log('----Movie search----' ,res);
            if (res.data && res.data.results[0]) {
                if (res.data.results[0].id !== this.state.currentMovie.id) {
                    this.setState({ currentMovie: res.data.results[0] }, () => {
                        this.applyCurrentVideo();
                        this.setRecommendation();
                    })
                }
            }
        }.bind(this));
    }

    render() {

        const renderVideoList = () => {
            if(this.state.movieList.length >= 15){
                return <VideoList movieList = {this.state.movieList} callback={this.recevoirCallBack.bind(this)}/>
            }
        }

        return (
            <div className="App container mx-auto justify-center ">
                <Search callback={this.onClickSearch.bind(this)}/>
                <div className="flex">
                    <div className="w-2/3">
                        <Video videoId = {this.state.currentMovie.videoId}/>
                        <VideoDetail title = {this.state.currentMovie.original_title} description = {this.state.currentMovie.overview} />
                    </div>
                    {renderVideoList()}
                </div>       
            </div>
        );
    }
};

export default App;