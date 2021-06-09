import React from 'react';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const VideoListItem = (props) => {
    let movie = props.movie;
    return (
        <li className="flex my-2 px-2" onClick={handleClick}>
            <img width="75px" src={`${IMAGE_URL}${movie.poster_path}`} />
            <h2>{movie.title}</h2>
        </li>
    );

    function handleClick() {
        console.log('Envois au parent : ', movie);
        props.callback(movie);
    }
}

export default VideoListItem;