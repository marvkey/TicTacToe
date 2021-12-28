import ticElement from './BoardElement';

export default class tictactoeBoard{
    private m_Grid:ticElement[];
    private m_CurrentTurn  = "X"
    constructor(){
      this.m_Grid = [];
      for(var i=0; i<9; i++){
        this.m_Grid.push(new ticElement(i))
      }
    }
    reset(){
      this.m_Grid.forEach((element) => {
        element.reset()
      })
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
    isGameTie(): boolean {  
      this.m_Grid.forEach(element =>{
        if(element.GetState() =="")
          return false
      })
      return true
      /*
      return this.m_Grid
          .map((element) => element.GetState() === "")
          .filter(element => element === false) !== []
          */
    }
    isWon(player:string): boolean{
      // Checking for each row
      
      let possible = true
      for(let i = 0; i < 3;i++){
        if(this.m_Grid[i].GetState() !==player){
          possible = false
          break
        }
        possible = true
      }
      if(possible) return possible;
      for(let i = 3; i < 6;i++){
       if(this.m_Grid[i].GetState() !==player){
        possible = false
         break
       }
       possible = true
     }
     if(possible) return possible;
  
     for(let i = 6; i < 9;i++){
      if(this.m_Grid[i].GetState() !==player){
        possible = false
        break
      }
      possible = true
    }
    if(possible) return possible;
    // checking column 
    for(let i = 0; i <7;i+=3){
      if(this.m_Grid[i].GetState() !==player){
        possible = false
        break
      }
      possible = true
    }
    if(possible) return possible;
  
    for(let i = 1; i <8;i+=3){
      if(this.m_Grid[i].GetState() !==player){
        possible = false
        break
      }
      possible = true
    }
    if(possible) return possible;
  
    for(let i = 2; i <9;i+=3){
      if(this.m_Grid[i].GetState() !==player){
        possible = false
        break
      }
      possible = true
    }
    if(possible) return possible;
  
    //checking diagonal
    for(let i = 0; i < 9; i+=4){
      if(this.m_Grid[i].GetState() !==player){
        possible = false
        break
      }
      possible = true
    }
    if(possible) return possible;
  
    for(let i = 2; i < 7; i+=2){
      if(this.m_Grid[i].GetState() !==player){
        possible = false
        break
      }
      possible = true
    }
    return possible
    }
  } 