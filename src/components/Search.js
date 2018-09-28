import React, { Component } from 'react';

class Search extends Component {
  render(){
    return(
      <div>
        <form className="search-form" onSubmit={this.props.handleSubmit}>
          <input  type="text" placeholder="Search for a city" value={this.props.search} onChange={this.props.handleChange}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default Search;

{/*   Responsibility
    1.  a class component
    2. contains a search form
    3. upon hitting submit it calls a function that handles the fetch with given input

    */}
