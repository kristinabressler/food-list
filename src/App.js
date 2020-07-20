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
    let currentArr = [...this.state.filtered];

    const filter = this.state.searchInput.toLowerCase();
    
    if(filter !== "") {
       currentArr = currentArr.filter((d) => {
        let lc = d.ingredients.map((ing) => ing.toLowerCase());
        return lc.includes(filter)
      })
    }

    return currentArr.map((eachFood, index) => {
        return(
          <DishBox
          key={index}
          id={index}
          dish={eachFood.food}
          ingredients={eachFood.ingredients}
          updateDish={this.updateDish}
          // onChange={(e) => this.handleUpdate(e, index)}
          clickToDelete={this.deleteDish.bind(index)}
          // clickToCancel={this.cancel(index)}
          />
        );
    });
  }

  updateDish = (i, food, ingredients) => {

    console.log("updatedIng", typeof ingredients);

    const filteredCopy = [...this.state.filtered];
    filteredCopy[i].food = food;

    if(typeof ingredients === "string") {
      filteredCopy[i].ingredients = ingredients.split(",");
    } else {
      filteredCopy[i].ingredients = ingredients;
    }
    
    this.setState({
      list: filteredCopy,
      filtered: filteredCopy
    });

  }


  deleteDish = (dishIndex) => {
    const dishsCopy = [...this.state.list];
    dishsCopy.splice(dishIndex, 1);
    this.setState({
      list: dishsCopy,
      filtered: dishsCopy
    })
  }
 
  render() {
    // console.log("search term", this.state.searchInput);
    console.log("json db", this.state.filtered);
    return (
      <div className="App">
        <header className="App-header">
        <h1>Grand Food Tour</h1>
        </header>
        <div className="food-section">
          <div className="container">
          <SearchBox searchInput={this.state.searchInput} searchChange={this.searchChange}/>
          <div className="food-list">
            {this.showFood()}
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
