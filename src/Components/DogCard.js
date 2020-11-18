import React from "react";

class DogCard extends React.Component {
  state = {
    clicked: false
  }

  handleFavoriteDog = () => {
    this.setState({clicked: !this.state.clicked}, () => this.props.favoriteDog(this.props.dog, this.state.clicked))
  }

  render() {
    return (
    <div className="card">
      <span className="content">
        <h2 >{this.props.dog.name}</h2>
        <img alt={this.props.dog.name} src={this.props.dog.img} />
      </span>
      <span className="bark">
        <button onClick={this.handleFavoriteDog}>Favorite</button>
      </span>
      {this.state.clicked ? <h3>Bark</h3> : <h3>Love Me Plz</h3>}
    </div>
  );
  }
}

export default DogCard;
