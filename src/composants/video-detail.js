import React from 'react';
const VideoDetail = (props) => {
    return (
        <div className="bg-gray-300">
            <h1 className="text-4xl" >{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default VideoDetail;