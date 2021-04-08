import React from 'react';
import shortid from 'shortid';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
  <ul>
    {contacts.map(({ id, name, number }) => (
        <li key={ id}>
        <p>{name}: </p>
        <p>{number}</p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);
}
export default ContactList;