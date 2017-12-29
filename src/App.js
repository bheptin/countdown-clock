import React, { Component } from 'react';
import './App.css';
import Clock from './clock';
import Notes from './notes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        deadline: 'April 1, 2018'
  }
}


  render() {

    return (

      <div className="App">
        <div className="App-title">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
          />
        <Notes />
      </div>
    );
  }
 }



export default App;
