import React, { Component } from "react";
import "./App.css";
import { getWorkouts } from "./services";
import Workouts from "../mock/Workouts";

request("url", function(err, res, body) {});

class App extends Component {
  constructor() {
    super();
    this.state = {
      workoutToAdd: "",
      workouts: [],
      reps: 0,
      sets: 0
    };
    this.addWorkout = this.addWorkout.bind(this);
    this.updateWorkout = this.updateWorkout.bind(this);
    this.repsNumber = this.repsNumber.bind(this);
    this.setsNumber = this.setsNumber.bind(this);
  }
  updateWorkout(e) {
    e.preventDefault();
    this.setState({
      workoutToAdd: e.target.value
    });
  }

  addWorkout(e) {
    e.preventDefault();
    getWorkouts();
    
    this.setState({
      workouts: [...this.state.workouts, workout],
      workoutToAdd: ""
    });
  }

  repsNumber(e) {
    e.preventDefault();
    this.setState({
      reps: +e.target.value
    });
  }

  setsNumber(e) {
    e.preventDefault();
    this.setState({
      sets: +e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={e => this.addWorkout(e)}>
        <div className="container">
          <h1 className="head">My work out app</h1>

          <div>
            <input
              type="text"
              onChange={e => this.updateWorkout(e)}
              value={this.state.workoutToAdd}
            />

            <label>Rep's</label>
            <input
              type="number"
              onChange={e => this.repsNumber(e)}
              value={this.state.reps}
            />

            <label>Set's</label>
            <input
              type="number"
              onChange={e => this.setsNumber(e)}
              value={this.state.sets}
            />
          </div>
          <div>
            <button type="submit">+</button>
          </div>
        </div>
      </form>
    );
  }
}

export default App;
