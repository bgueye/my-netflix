import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: "Recherchez un film",
      inputValue: "",
    };
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
        <div className="bg-gray-200 mb-4 py-4">
            <input className="rounded-2xl px-2" type="text" placeholder={this.state.placeholder}
            onChange={this.handleChange.bind(this)}/>
            <button className="bg-gray-400 hover:bg-gray-700 text-white hover:font-bold px-4 hover:rounded-full rounded-full" 
            onClick={this.handleClick.bind(this)}> Search </button>  
        </div>
    );
  }

  handleClick() {
    this.props.callback(this.state.inputValue);
  }
}

export default Search;