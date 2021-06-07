import React from 'react';
const ShowMyInput = (props) => {
    console.log('___Mes props__', props);
    return (
        <div>
            <h1>{props.inputValue}</h1>
        </div>
    );
}

export default ShowMyInput;