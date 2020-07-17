import React, { Component } from 'react'

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
     
    this.searchChange = this.searchChange.bind(this);
  }

  searchChange(e) {
    this.props.searchChange(e.target.value);
  }

  render() {
    return (
      <div className="search-area">
        <form>
        <div className="form-group">
          <input type="text" className="input search-bar form-control" name="search" placeholder="Search by ingredients..." value={this.props.searchInput} onChange={this.searchChange} />
        </div>
        </form>
      </div>
    )
  }
}
