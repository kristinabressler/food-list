import React, { Component } from 'react';

export default class DishBox extends Component {
  render() {
    return (
      <div className="dish-box">
        <div className="food-title"><h2>{dish}</h2></div>
      </div>
    )
  }
}
