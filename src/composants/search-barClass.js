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
                <h1>Component class</h1>
                    <input type="text"
                        placeholder={this.state.placeholder}
                        onChange={this.handleChange.bind(this)}    
                    />
                    <button>Send</button>
                    <ShowMyInput inputValue={this.state.inputValue}/>
                
            </div>  
            
        )
    }
}

export default SearchBar;