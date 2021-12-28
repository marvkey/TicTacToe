export default class ticElement{
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