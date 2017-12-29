import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import List from './list';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        newNote: '',
        UID: new Date().getTime("")

  };
  console.log('state', this.state);
}

  handleClick(event) {
      if (this.state.name === '' || this.state.newNote === '') {
        return console.error("nada");
      } else {
        console.log("Hi", this.state);
        this.setState({handleClick: this.state.handleClick})
    }
}
  render() {

    return(
    <div>
      <Form inline>
      <FormControl
        className="Newnote-name"
        placeholder="Name"
        onChange={event => this.setState({name: event.target.value})}
      />
        <FormControl
          className="Newnote-input"
          placeholder="Leave a note"
          onChange={event => this.setState({newNote: event.target.value})}
        />
      <Button onClick={this.handleClick.bind(this)}>

        Submit
      </Button>
    </Form>
    <List info={this.state.handleClick} />
  </div>
    );
  }
}


export default Notes;
