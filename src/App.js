import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
      this.state ={
        
      };
      this.addWorkout = this.addWorkout.bind(this);
    }

    addWorkout(e){
      e.preventDefault()
      console.log('YAY I can see you');
      
    }
  render() {
    return (
    <form onSubmit={this.addWorkout}>  
      <div>
        <h1>My work out app</h1>
        <div>
          <input type="text" onChange={this.addWorkout} />
          <div>
            <button type="submit" >+</button>
          </div>
        </div>
      </div>
     </form> 
    );
  }
}

export default App;
