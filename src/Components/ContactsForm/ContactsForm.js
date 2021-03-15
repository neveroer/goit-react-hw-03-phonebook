import React, { Component } from 'react';
import s from './ContactsForm.module.css';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onContactFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit} className={s.form}>
          <label className={s.label} htmlFor="name">
            Name
          </label>
          <input
            className={s.input}
            type="text"
            value={name}
            onChange={this.onChange}
            name="name"
            placeholder="Enter Name"
          />
          <label className={s.label} htmlFor="number">
            Number
          </label>
          <input
            className={s.input}
            type="number"
            value={number}
            onChange={this.onChange}
            name="number"
            placeholder="Enter Phone Number"
          />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactsForm;
