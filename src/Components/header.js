import React, { Component } from "react";
import "./header.css";

class Header extends Component {

  render() {
    return (
     
    <div className = "jumbotron jumbotron-fluid">
      <div className = "container">
        <h1 className>CLICKY GAME</h1>
        <h2 className>Click an Image to begin!</h2>
        <div className = "row">
          <h3 className = "col-6">Score: {this.props.score} </h3>
          <h3 className = "col-6">Top Score: {this.props.topScore}</h3>
        </div>
      </div>
   </div>
    )
  }
}


export default Header;