import React from 'react'
import DogCard from '../Components/DogCard'

class FavoriteList extends React.Component {

  renderDogs = () => {
    return this.props.favoriteDogs.map((dogObj) => <DogCard key={dogObj.id} dog={dogObj} />)
  }

  render() {
    return (
      <>
        <h2>Favorite List</h2>
        <div>
          {this.renderDogs()}
        </div>
        
      </>
    )
  }
}

export default FavoriteList