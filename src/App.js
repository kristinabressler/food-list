import React, { Component } from "react";
import DishBox from "./components/DishBox/index";
import AddDish from "./components/AddDish/index"
import './App.css';
import fooddb from "../src/food-list.json";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: fooddb,
    }
  }

  addDish = newDish => {
    this.setState(prevState => ({
      list: [...prevState.list, { ...newDish}]
    }));
  };

  addDish = (newDish) => {
    const dishsCopy = [...this.state.list];
    dishsCopy.push(newDish);
    this.setState({
      list: dishsCopy
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Grand Food Tour</h1>
        </header>
        <div className="food-list">
          <div className="container">
          <AddDish addDish={this.addDish} />
          {this.state.list.map((onedish, index) => (
                <DishBox
                  key={index}
                  dish={onedish.food}
                  // clickToDelete={this.deleteDish.bind(this, index)}
                />
              ))}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
