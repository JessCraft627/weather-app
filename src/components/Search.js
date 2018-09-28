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
