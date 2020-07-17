import React, { Component } from 'react'

export default class AddDish extends Component {
   constructor(props) {
    super(props);
    this.state = {
        food: "",
        ingredients: []
    };
     
    this.addDishItem = this.addDishItem.bind(this);
  }

  onFoodChange = (event) => {
    this.setState({ food: event.target.value });
  }

  onIngChange = (event) => {
    this.setState({ ingredients: event.target.value});
  }
       
  addDishItem = (event) => {
    event.preventDefault();

    this.props.addDish(this.state);   
    this.setState({
      food: "",
      ingredients: []
    })
  }

     
  render() {
    // console.log("ingredents list", typeof this.state.ingredients);
    return (
      <div className="form-area">
      <form onSubmit={this.addDishItem}>
        <div className="form-group">
          <input className="form-control" placeholder="Enter Dish" value={this.state.food} onChange={this.onFoodChange} />
        </div>
        <div className="form-group">
          <textarea className="form-control" placeholder="please separate the ingredients by comma" value={this.state.ingredients} onChange={this.onIngChange}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      </div>
    )
  }
}
