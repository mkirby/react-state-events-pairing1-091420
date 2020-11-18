import React from "react";

class DogCard extends React.Component {
  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState({clicked: !this.state.clicked}, () => console.log("barked"))
  }

  render() {
    return (
    <div className="card">
      <span className="content">
        <h2 >{this.props.dog.name}</h2>
        <img alt={this.props.dog.name} src={this.props.dog.img} />
      </span>
      <span className="bark">
        <button onClick={this.clickHandler}>Bark</button>
      </span>
      {this.state.clicked ? <h3>Bark</h3> : null}
    </div>
  );
  }
  
}

export default DogCard;
