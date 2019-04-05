
import React, { Component } from "react";
import Data from "../friends.json";
import "./game.css";

class Game extends Component {

  state = {
    data: Data,
    score: 0,
    topScore: 0,
  }
  componentDidMount() {
    this.setState({ data:Data });
  }

  handleClick(index){
    console.log(index);
    let newData=this.state.data;
    let gameOver=false;
    if(newData[index].clicked){
      gameOver=true;
      console.log("*****Double clicked");
    }
    newData[index].clicked=true;
 
    if(gameOver){

      for(var i=0;i<newData.length;i++){
        newData[i].clicked=false;
      }
    }
    this.setState({ data:newData.sort(()=>  0.5 - Math.random()) });
    this.props.updateScore(gameOver);
  }

  render() {  
    return (
      <div className = "row">
        {this.state.data.map((item, index) =>
            <div className = "col-3">
            <div className = "card">
              <div className = "img-container">
                <img src={item.image} key={index} className="im-thumbnail" alt="friends" height="200" width="200" onClick={() => this.handleClick(index) } />
              </div>
            </div>
            </div>)
        }cd 
      </div>
    )
  }
}

export default Game;