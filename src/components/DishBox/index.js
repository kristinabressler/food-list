import React, { Component } from 'react';

export default class DishBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: this.props.ingredients
    }
  }

  handleUpdate = () => {
    this.props.editDish(this.indexNum, this.food.value, this.ingredients.value);
  }

  render() {
    console.log(this.props.dish);
    return (
      {this.propbs.isEditing ===  true ? 
        <div className="dish-box">
        <div className="left-flex">
          <div className="food-title"><input type="text" ref={(val) => {this.props.dish = val}}  defaultValue={this.props.dish} /></div>
          <textarea ref={(val) => {this.ingredients = val}} defaultValue={this.props.ingredients}></textarea>
        </div>
        <div className="right-flex">
          <button type="button" className="btn" value="Update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}}>Save</button>
          <button type="button" className="btn btn-danger" onClick={this.props.clickToCancel}>Cancel</button>
        </div>
        </div>
        : 
        <div className="dish-box">
        <div className="left-flex">
          <div className="food-title"><h2>{this.props.dish}</h2></div>
          <p>{this.state.ingredients.join(", ")}</p>
        </div>
        <div className="right-flex">
          <button type="button" className="btn" onClick={() => pressEditBtn(index)}>Edit</button>
          <button type="button" className="btn btn-danger" onClick={this.props.clickToDelete}>Delete</button>
        </div>
      </div>
      }
    )
  }
}
