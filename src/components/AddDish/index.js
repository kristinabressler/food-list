import React, { Component } from 'react'

export default class AddDish extends Component {
   constructor(props) {
    super(props);
    this.state = {
        dish: ""
    };
     
    this.addDishItem = this.addDishItem.bind(this);
  }

  onChange = (event) => {
    this.setState({ dish: event.target.value });
  }
       
  addDishItem = (event) => {
    event.preventDefault();
    this.props.addDish(this.state);   
    this.setState({
      dish: ""
    })
  }

     
  render() {
    return (
      <div>
      <form onSubmit={this.addDishItem}>
        <input placeholder="Enter Dish" value={this.state.dish} onChange={this.onChange} />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      </div>
    )
  }
}
