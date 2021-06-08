import React from 'react';

const Search = () => {
    return (
        <div>
            <h2 class="text-sm font-medium text-gray-900">Search by Component</h2>
            <input type="text" name="search1" class="focus:ring-indigo-500 focus:border-indigo-500 rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Search by component"/>
            <button class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Serch </button>  
        </div>
    );
}

export default Search;