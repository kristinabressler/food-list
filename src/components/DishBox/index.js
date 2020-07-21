import React, { Component } from 'react';

export default class DishBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: this.props.dish,
      ingredients: this.props.ingredients.join(", "),
      indexNum: this.props.id,
      isEditing: false
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.pressEditBtn = this.pressEditBtn.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  onFoodChange = (event) => {
    event.preventDefault();
    console.log("foodchange", event.target.value);
    this.setState({ food: event.target.value });
  }

  onIngChange = (event) => {
    event.preventDefault();
    console.log("ingchange", event.target.value);
    this.setState({ ingredients: event.target.value});
  }

  pressEditBtn = () => {
    this.setState(state => ({ isEditing: !state.isEditing }));
  }

  cancel = () => {
    this.setState(state => ({ isEditing: !state.isEditing }));
  }

  handleUpdate = () => {
    // event.preventDefault();
    console.log("foodchange", this.state.food);
    console.log("ingchange", typeof this.state.ingredients);

    this.props.updateDish(this.state.indexNum, this.state.food, this.state.ingredients);
    this.setState(state => ({ isEditing: !state.isEditing }));
  }

  

  render() {
    const { isEditing, index } = this.state;
    return (

        <div className="dish-box">
        <div className="left-flex">
          <div className="food-title">
          {isEditing ? (<input type="text" name="food" value={this.state.food} onChange={event => this.onFoodChange(event, index)}  />) : (<h2>{this.props.dish}</h2>)}
          </div>
          {isEditing ? (<textarea name="ingredients" value={this.state.ingredients} onChange={event => this.onIngChange(event, index)} ></textarea>) : (<p>{this.state.ingredients}</p>)}
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
