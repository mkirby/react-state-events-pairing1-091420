import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList'
import FavoriteList from './Containers/FavoriteList'

class App extends Component {

  state = {
    favoriteDogs: []
  }

  favoriteDog = (dogObj, condition) => {
    console.log(condition ? {favorited: dogObj.name} : {unfavorited: dogObj.name})
    if (condition) {
      this.setState({favoriteDogs: [...this.state.favoriteDogs, dogObj]})
    } else {
      const newFavoriteArray = this.state.favoriteDogs.filter(dog => dog.id !== dogObj.id)
      this.setState({favoriteDogs: newFavoriteArray})
    }
  }

  render() {
    return (
      <>
        <div className="app">
          <DogsList favoriteDog={this.favoriteDog} />
        </div>
        <FavoriteList favoriteDogs={this.state.favoriteDogs} />
      </>
      
    );
  }
}

export default App;
