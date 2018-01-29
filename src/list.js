import React, { Component } from 'react';
import './App.css';


class List extends Component {

  render () {

    return(
    <div className="chatBox">
      <ul>
        {this.props.notes.map(note => {
          return <li key={note.UID} className="list">{note.name}: {note.message}</li>
        })}
      </ul>
    </div>

        );
      }
    }




export default List;
