import React, { useState,Component } from 'react';
import "./Grid.css"
class ticElement{
  private m_BoardElement =-1
  private m_State:string = ""
  constructor(boardElement: number){
    this.m_BoardElement = boardElement
  }
  setState(state: string) : boolean{
    if((state === "O" || state === "X") && this.m_State === ""){
      this.m_State = state
      return true;
    }
    return false;
  }

  reset(){
    this.m_State ="";
  }
  GetState():string{
    return this.m_State
  }
}
class tictactoeBoard{
  private m_Grid:ticElement[];
  private m_CurrentTurn  = "X"
  constructor(){
    this.m_Grid = [];
    for(var i=0; i<9; i++){
      this.m_Grid.push(new ticElement(i))
    }
  }
  GetElement(index:number):ticElement{
    return this.m_Grid[index]
  }

  input(pos:number): boolean{
    let possible =this.m_Grid[pos].setState(this.m_CurrentTurn)
    if(possible ==false)return false

    if(this.m_CurrentTurn ==="X"){
      this.m_CurrentTurn = "O"
      return  true;
    }
    this.m_CurrentTurn = "X"
    return true
  }
} 
let Board = new tictactoeBoard();
class App extends React.Component{

  render(){
    const operationOnClick =(e:number) => {
      Board.input(e);
      this.forceUpdate()
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
