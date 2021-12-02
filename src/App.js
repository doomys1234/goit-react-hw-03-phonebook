import React from 'react';
import Phonebook from './components/Phonebook/Phonebook';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';
import shortid from 'shortid';
import s from './App.module.scss';
class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already exists`);
      return;
    }

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  filterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  deleteContact = numId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== numId),
    }));
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();

    const filteredItem = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <Phonebook onSubmit={this.addContact} />
        <h2 className={s.contacts}>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.filterChange} />
        <Contacts contacts={filteredItem} onClick={this.deleteContact} />
      </div>
    );
  }
}

export default App;
