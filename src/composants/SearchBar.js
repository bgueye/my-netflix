  
import React from 'react';

const Search = () => {
    return (
        <div className="bg-gray-300 mb-4 py-4">
            <input className="rounded-2xl px-2" type="text" placeholder="Recherchez un film"/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white hover:font-bold px-4 rounded-full"> Serch </button>  
        </div>
    );
}

export default Search;