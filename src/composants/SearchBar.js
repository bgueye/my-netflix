import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Recherchez un film",
      inputValue: "",
    };
    console.log("this.state", this.state);
  }

  handleChange(event) {
    console.log("this.state", this.state);
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
        <div className="bg-gray-300 mb-4 py-4">
            <input className="rounded-2xl px-2" type="text" placeholder={this.state.placeholder}
            onChange={this.handleChange.bind(this)}/>
            <button className="bg-gray-400 hover:bg-gray-700 text-white hover:font-bold px-4 rounded-full" 
            onClick={this.hendleClick.bind(this)}> Serch </button>  
        </div>
    );
  }

  hendleClick() {
    console.log("click");
    this.props.callback(this.state.inputValue);
  }
}

export default Search;





/*   
import React { Component } from 'react';

class Search extands Component {
    return (
        <div className="bg-gray-300 mb-4 py-4">
            <input className="rounded-2xl px-2" type="text" placeholder="Recherchez un film"/>
            <button className="bg-gray-400 hover:bg-gray-700 text-white hover:font-bold px-4 rounded-full" 
            onclick={this.handleClick}> Serch </button>  
        </div>
    )

    handleClick() {
        console.log('click');
        this.props.callback(this.st)
    }
}

export default Search;

cc */