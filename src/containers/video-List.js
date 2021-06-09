import React from 'react';
import VideoListItem from '../composants/video-List-item';

const VideoList = (props) => {
    let movieList = props.movieList
    return (
        <div className="w-1/3 w-full ml-2  hauteur">
            <div className="bg-gray-200"><h1>VIDEOS POPULAIRES</h1></div>
            <div  className="overscroll-x-none overflow-auto hauteur" >
                
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
        props.callback(movie);
    }
}

export default VideoList;