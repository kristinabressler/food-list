import React, { Component } from 'react';

export default class DishBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: this.props.ingredients
    }
  }
  render() {
    console.log(this.props.dish);
    return (
      <div className="dish-box">
        <div className="left-flex">
          <div className="food-title"><h2>{this.props.dish}</h2></div>
          <p>{this.state.ingredients.join(", ")}</p>
        </div>
        <div className="right-flex">
          <button type="button" className="btn btn-danger" onClick={this.props.clickToDelete}>Delete</button>
        </div>
      </div>
    )
  }
}
