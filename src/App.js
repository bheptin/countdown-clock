import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import Notes from './Notes';
import List from './List';
import base from './Rebase';

const deadline = 'April 1, 2018';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      nameInputValue: '',
      noteInputValue: ''
    }
    this.addNote = this.addNote.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
  }


  handleNameChange(event) {
    const nameInputValue = event.target.value;
    this.setState({nameInputValue})
  }

  handleNoteChange(event) {
    const noteInputValue = event.target.value;
    this.setState({noteInputValue})
  }

  addNote(event) {
      if (this.state.nameInputValue === '' || this.state.noteInputValue === '') {
        return  console.error("nopeRope")
      } else {
          console.log("Hi", this.state);
          const newNote = {
            name: this.state.nameInputValue,
            message: this.state.noteInputValue,
            UID: new Date().getTime("")
          }
         this.setState({notes: [...this.state.notes, newNote]})

    };
}

  render() {

    return (
<div className="App">
        <div className="App-title">
          Countdown to {deadline}
        </div>
        <Clock
          deadline={deadline}
          />
        <Notes addNote={this.addNote}
               handleNameChange={this.handleNameChange}
               handleNoteChange={this.handleNoteChange}
           />
         <List notes={this.state.notes} />

      </div>
    );
  }
 }



export default App;
