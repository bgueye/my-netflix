import React from 'react';
import ShowMyInput from './showMyInput';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            placeholder: 'Tapez le titre de votre film',
            inputValue: '',
        };
        console.log('___this.state___', this.state.placeholder);
    }

    handleChange(event){
        this.setState({inputValue: event.target.value })
    }
  
    render(){
        return (
            <div>
                <h1 class="text-sm font-medium text-gray-900">Component class</h1>
                    <input type="text"
                        placeholder={this.state.placeholder}
                        onChange={this.handleChange.bind(this)}    
                    />
                    <button class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send</button>
                    <ShowMyInput inputValue={this.state.inputValue}/>
                
            </div>  
            
        )
    }
}

export default SearchBar;