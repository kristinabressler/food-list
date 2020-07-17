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
    // return this.state.filtered.map((eachFood,index)=>{
    //     return(
    //     <DishBox
    //     key={index}
    //     dish={eachFood.food}
    //     ingredients={eachFood.ingredients}
    //     clickToDelete={this.deleteDish.bind(index)}
    //       />
    //     )
    // })

    // let currentList = [...this.state.list];
		
    // let newList = currentList.filter(item => {
    //   const lc = item.ingredients.map(ingredient => ingredient.toLowerCase());

    //   const filter = this.state.searchInput.toLowerCase();

    //   return lc.includes(filter);
    // });

    this.props.filtered.map((eachFood, index) => {
      const lc = eachFood.ingredients.map(ingredient => ingredient.toLowerCase());
      const filter = this.state.searchInput.toLowerCase();

      if (eachFood.lc.includes(filter) === -1) {
        return(
          <DishBox
          key={index}
          dish={eachFood.food}
          ingredients={eachFood.ingredients}
          clickToDelete={this.deleteDish.bind(index)}
          />
        );
      }
      // return (<DishBox className="food-item" item={item} key={Math.random()} />)
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
    console.log(this.state.list);
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
