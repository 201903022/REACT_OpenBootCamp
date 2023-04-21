import React, { Component } from "react";
import PropTypes from "prop-types";

// rcpp, opcion #2
class Greeting extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      //componente puro no tiene states
      //informacion privada
      age: 29,
    };
  }

  birthday = () => { 
    this.setState({ age: this.state.age + 1 });
  }

  render() {
    return (
      <div>
        <h1>
          {" "}
          Name: {this.props.name} {this.props.lastName}
        </h1>
        <h2>Edad: {this.state.age}</h2>
        <button onClick={this.birthday}>Birthday</button>
      </div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Greeting;
