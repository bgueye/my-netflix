import React from 'react';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const VideoListItem = (props) => {
    let movie = props.movie;
    return (
          <div className="flex my-2 px-2 max-w-sm w-full lg:max-w-full lg:flex" onClick={handleClick}>
             <img width="75px" src={`${IMAGE_URL}${movie.poster_path}`} />
             <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between w-card">
                <h2>{movie.title}</h2>
                <p>Votes: {movie.vote_count}</p>
                <p>Moyenne: {movie.vote_average}</p>
             </div>
         </div>
    );

    function handleClick() {
        props.callback(movie);
    }
}

export default VideoListItem;

