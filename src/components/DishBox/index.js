import React, { Component } from 'react';

export default class DishBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: this.props.dish,
      ingredients: this.props.ingredients,
      indexNum: this.props.id,
      isEditing: false
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.pressEditBtn = this.pressEditBtn.bind(this);
  }

  onFoodChange = (event) => {
    this.setState({ food: event.target.value });
  }

  onIngChange = (event) => {
    this.setState({ ingredients: event.target.value});
  }

  pressEditBtn = () => {
    this.setState(state => ({ isEditing: !state.isEditing }));
  }

  handleUpdate = () => {
    // console.log("updateIndex", this.state.indexNum);
    this.props.updateDish(this.state.indexNum, this.onFoodChange, this.onIngChange);
    this.setState(state => ({ isEditing: !state.isEditing }));
  }

  

  render() {
    const { isEditing, index } = this.state;
    // console.log("index", this.props.id);
    return (



      
        <div className="dish-box">
        <div className="left-flex">
          <div className="food-title">
          {isEditing ? (<input type="text" name="food" value={this.props.dish} onChange={event => this.props.onFoodChange(event, index)}  />) : (<h2>{this.props.dish}</h2>)}
          </div>
          {isEditing ? (<textarea name="ingredients" value={this.props.ingredients} onChange={event => this.props.onIngChange(event, index)} ></textarea>) : (<p>{this.state.ingredients.join(", ")}</p>)}
        </div>
        <div className="right-flex">
          {isEditing ? (<button type="button" className="btn btn-success" onClick={this.handleUpdate} >Save</button>) 
          : (<button type="button" className="btn btn-success" onClick={this.pressEditBtn} >Edit</button>)}
          {isEditing ? (<button type="button" className="btn btn-danger" onClick={this.cancel}>Cancel</button>) 
          : (<button type="button" className="btn btn-danger" onClick={this.props.clickToDelete}>Delete</button>)}
        </div>
      </div>
    )
  }
}
