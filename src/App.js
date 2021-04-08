
import { Component } from 'react';
import './App.css';
import Container from './Container/Container';
import Form from './Form/Form';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  formHandler = data => {
    console.log(data);
  };
  // удаляет контакт
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  // добавляет контакт
  addContact = newContact => {
    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts], }));
  }
 
  render() {
    const { contacts } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formHandler} />
        <h2>Contacts </h2>
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} title="Contacts" />
      </Container>
    );
  }
}

export default App;
