import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';

import ContactsForm from './Components/ContactsForm';
import ContactList from './Components/ContactsList';
import Filter from './Components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { contacts } = this.state;
    if (contacts.find(({ name }) => name === data.name)) {
      alert(`${data.name} is already exist. Try another name`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: uuidv4(),
            name: data.name,
            number: data.number,
          },
        ],
      };
    });
  };

  changeFilter = filter => {
    this.setState({ filter });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const visibleContacts = this.filteredContacts();
    return (
      <div className={s.container}>
        <h1>phonebook</h1>
        <ContactsForm onContactFormSubmit={this.addContact} />
        <h2>contacts</h2>
        <Filter value={this.state.filter} onFilterChange={this.changeFilter} />
        <ContactList
          data={visibleContacts}
          onButtonClick={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
