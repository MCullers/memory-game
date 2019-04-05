import React, { Component } from 'react';
import './App.css';
import Header from "./Components/header";
import Game from "./Components/game";

class App extends Component {
  state = {
    score:0,
    topScore:0
  }
  updateScore = (finished => {
    console.log("updateScore",finished)
    if(finished){
     let newScore = this.state.topScore;
     if(this.state.score>newScore){
       newScore=this.state.score;
     }
     this.setState({topScore:newScore});
     this.setState({score:0});
    }
    else{
     let newScore = this.state.score + 1;
     this.setState({score:newScore});
    }
  })

  render() {
    return (
      <div className="App">
      <Header score = {this.state.score} topScore={this.state.topScore}></Header>
      <Game updateScore = {this.updateScore}></Game>
      </div>
    );
  }
}

export default App;