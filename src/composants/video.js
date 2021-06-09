import React from 'react';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const youtube = 'https://www.youtube.com/embed/';

const Video = (props) => {
    let videoId = props.videoId;
    return <iframe width="640"  height="400" src={`${youtube}${videoId}`}  />
    
}

export default Video;