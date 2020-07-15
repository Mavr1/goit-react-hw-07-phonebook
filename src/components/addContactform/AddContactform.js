import React, { Component } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';

const initialState = { name: '', number: '' };

class AddContactform extends Component {
  state = { name: '', number: '' };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      name: this.state.name,
      number: this.state.number,
    };
    if (this.state.name.trim()) {
      this.props.addContact(newContact);
    }
    this.setState(initialState);
  };

  render() {
    return (
      <form>
        <Input
          value={this.state.name}
          label="Name"
          name="name"
          onChange={this.handleInput}
        />
        <Input
          value={this.state.number}
          label="Number"
          name="number"
          onChange={this.handleInput}
        />
        <Button name="Add contact" type="submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch(addContact(contact)),
});

export default connect(null, mapDispatchToProps)(AddContactform);
