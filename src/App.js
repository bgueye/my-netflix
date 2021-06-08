import './App.css';
import SearchBar from './composants/search-barClass';
import Search from './composants/SearchBar';
import Image from './composants/image';

function App() {
    return (

        <div className="App text-gray-500">
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="col-auto h-4 bg-teal-400">
                    <Image />
                </div>
                <div className="col-auto h-4 bg-teal-400">
                    <Search />
                </div>
                <div className="col-auto h-4 bg-teal-400">
                    <SearchBar />
                </div>
            </div>
        </div>
    );
};

export default App;