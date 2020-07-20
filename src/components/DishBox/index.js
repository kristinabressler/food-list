import React, { Component } from 'react';

export default class DishBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: this.props.ingredients,
      isEditing: false
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate = () => {
    // this.props.editDish(this.indexNum, this.food.value, this.ingredients.value);
    this.setState(state => ({ isEditing: !state.isEditing }));

  }

  render() {
    const { isEditing, index } = this.state;
    return (



      
        <div className="dish-box">
        <div className="left-flex">
          <div className="food-title">
          {isEditing ? (<input type="text" value={this.props.dish} onChange={event => this.props.onChange(event, index)}  />) : (<h2>{this.props.dish}</h2>)}
          </div>
          {isEditing ? (<textarea value={this.props.ingredients} onChange={event => this.props.onChange(event, index)} ></textarea>) : (<p>{this.state.ingredients.join(", ")}</p>)}
        </div>
        <div className="right-flex">
          <button type="button" className="btn btn-success" onClick={this.handleUpdate} >{isEditing ? "Save" : "Edit"}</button>
          {isEditing ? (<button type="button" className="btn btn-danger" onClick={this.cancel}>Cancel</button>) 
          : (<button type="button" className="btn btn-danger" onClick={this.props.clickToDelete}>Delete</button>)}
        </div>
      </div>
    )
  }
}
