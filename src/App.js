import './App.css';
import SearchBar from './composants/search-barClass';
import Search from './composants/SearchBar';
import Image from './composants/image';

function App() {
    return (

        <div className="App">
            <div className="row">
                <div className="col-4">
                    <Image />
                </div>
                <div className="col-4">
                    <Search />
                </div>
                <div className="col-4">
                    <SearchBar />
                </div>
            </div>
        </div>
    );
};

export default App;