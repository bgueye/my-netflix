import '../App.css';
import React from 'react';
import VideoList from './video-List';
import Video from '../composants/video';
import Search from '../composants/searchBar';
import axios from 'axios';
import VideoDetail from '../composants/video-detail';


const API_KEY = 'api_key=b1bb009f89a909c0ae0b65bc17104e0e';
const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieList: {},
            currentMovie: {}
        }
    }

    componentWillMount() {
        this.initMovies();
    }

    initMovies(){
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(res){
            this.setState({
                movieList: res.data.results.slice(1, 6),
                currentMovie: res.data.results[0]
            }, function(){
                this.applyCurrentVideo();
            });
        }.bind(this));        
    }

    applyCurrentVideo(){
        axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function(res){
            console.log('------Movie Current------', res);
            const youtubeKey = res.data.videos.results[0].key;
            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.videoId = youtubeKey;
            this.setState({ currentMovie: newCurrentMovieState });
        }.bind(this));
    }

    recevoirCallBack(movie){
        this.setState({currentMovie: movie}, ()=> {
            this.applyCurrentVideo();
        });

    }

    render() {

        const renderVideoList = () => {
            if(this.state.movieList.length >= 5){
                return <VideoList movieList = {this.state.movieList} callback={this.recevoirCallBack.bind(this)}/>
            }
        }

        return (
            <div className="App container mx-auto justify-center ">
                <Search />
                <div className="grid gap-2 grid-cols-4 ">
                    <div className="col-span-3 text-center">
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