// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
   
   
   
   state ={
      timesClicked: 0

   }
   
   
  stateHandler=()=>{
      this.setState(previousState=> {
          
       return { timesClicked: previousState.timesClicked+1 }})
       }




   
   
    render() {
        return (
            <div>
               <button onClick={this.stateHandler}>
               {this.state.timesClicked}
               </button>
            </div>
        )
    }
}
