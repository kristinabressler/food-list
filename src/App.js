import React, { Component } from "react";
import DishBox from "./components/DishBox/index";
import AddDish from "./components/AddDish/index";
import SearchBox from "./components/SearchBox/index";
import './App.css';
import fooddb from "../src/food-list.json";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: fooddb,
      filtered: fooddb,
      searchInput : ""
    }
  }

  searchChange = (filterText) => {
    this.setState({
      // filtered: newList,
      searchInput: filterText
    });
  }


  addDish = (newDish) => {
    console.log("newdish", newDish);
    newDish.ingredients = newDish.ingredients.split(", ");
    const dishsCopy = [...this.state.list];
    dishsCopy.push(newDish);
    this.setState({
      list: dishsCopy,
      filtered: dishsCopy
    })
  }

  showFood = () =>{

    this.props.filtered.map((eachFood, index) => {
      const lc = eachFood.ingredients.map(ingredient => ingredient.toLowerCase());
      const filter = this.state.searchInput.toLowerCase();

      if (this.state.searchInput === "") {
        return(
          <DishBox
          key={index}
          dish={eachFood.food}
          ingredients={eachFood.ingredients}
          clickToDelete={this.deleteDish.bind(index)}
          />
        );
      } else if(lc.includes(filter)) {
        return(
          <DishBox
          key={index}
          dish={eachFood.food}
          ingredients={eachFood.ingredients}
          clickToDelete={this.deleteDish.bind(index)}
          />
        );
      }
    });
  }

  deleteDish = (dishIndex) => {
    const dishsCopy = [...this.state.list];
    dishsCopy.splice(dishIndex, 1);
    this.setState({
      list: dishsCopy
    })
  }
 
  render() {
    // console.log("search term", this.state.searchInput);
    console.log("json db", this.state.list);
    return (
      <div className="App">
        <header className="App-header">
        <h1>Grand Food Tour</h1>
        </header>
        <div className="food-section">
          <div className="container">
          <SearchBox searchInput={this.state.searchInput} searchChange={this.searchChange}/>
          <div className="food-list">
            {this.showFood}
          </div>
          <AddDish addDish={this.addDish} />
          {/* {this.state.list.map((onedish, index) => (
                <DishBox
                  key={index}
                  dish={onedish.food}
                  ingredients={onedish.ingredients}
                  clickToDelete={this.deleteDish.bind(index)}
                />
              ))} */}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
