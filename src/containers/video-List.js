import React from 'react';
import VideoListItem from '../composants/video-List-item';

const VideoList = (props) => {
    let movieList = props.movieList
    return (
        <div className="w-full bg-gray-300 m-2">
            <h1>POPULAIRE</h1>
            <div  className="overflow-scroll h-screen" >
                
                <ul>
                    {
                        movieList = props.movieList.map(movie => {
                            return (
                                <li>
                                    <VideoListItem movie = {movie} callback={recevoirCallBack}/>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );

    function recevoirCallBack(movie) {
        console.log('je reçois le movie :', movie);
        props.callback(movie);
    }
}

export default VideoList;