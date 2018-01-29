import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class Notes extends Component {

  render() {

    return(
    <div>
      <Form inline>
      <FormControl
        className="Newnote-name"
        placeholder="Name"
        onChange={this.props.handleNameChange}
      />
        <FormControl
          className="Newnote-input"
          placeholder="Leave a note"
          onChange={this.props.handleNoteChange}
        />
      <Button onClick={this.props.addNote}>
        Submit
      </Button>
    </Form>
  </div>
    );
  }
}


export default Notes;
