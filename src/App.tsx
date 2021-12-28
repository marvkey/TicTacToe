import React, { useState,Component } from 'react';
import tictactoeBoard from "./TictacToeBoard"
import "./Grid.css"


let Board = new tictactoeBoard();

class App extends React.Component{
  
  render(){
    const operationOnClick =(e:number) => {
      let accept= Board.input(e);
      if(accept){
        this.forceUpdate()
        if(Board.isWon("X")){
            console.log("X WON")
        }
        else if(Board.isWon("O")){
          console.log("O WON")
        }
      }
    }
  return (
    <div className="grid">
          <button onClick ={() => operationOnClick(0)}>{Board.GetElement(0).GetState()}</button>
          <button onClick ={() => operationOnClick(1)}>{Board.GetElement(1).GetState()}</button>
          <button onClick ={() => operationOnClick(2)}>{Board.GetElement(2).GetState()}</button>
          <button onClick ={() => operationOnClick(3)}>{Board.GetElement(3).GetState()}</button>
          <button onClick ={() => operationOnClick(4)}>{Board.GetElement(4).GetState()}</button>
          <button onClick ={() => operationOnClick(5)}>{Board.GetElement(5).GetState()}</button>
          <button onClick ={() => operationOnClick(6)}>{Board.GetElement(6).GetState()}</button>
          <button onClick ={() => operationOnClick(7)}>{Board.GetElement(7).GetState()}</button>
          <button onClick ={() => operationOnClick(8)}>{Board.GetElement(8).GetState()}</button>
    </div>
  );
  }
}

export default App;
