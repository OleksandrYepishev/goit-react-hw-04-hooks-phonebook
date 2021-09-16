import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import initialContacts from '../../data/contacts.json';

import { Form } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container } from '../Container/Container';

import { Title } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');
  const isFirtRender = useRef(true);

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);

    parsedContacts && setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    if (isFirtRender.current) {
      isFirtRender.current = false;
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    const isDoubleContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isDoubleContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    return setContacts(prevContacs =>
      prevContacs.filter(contact => contact.id !== contactId),
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <Container>
      <Title>
        Phonebook
        <Form onSubmit={addContact} />
      </Title>
      <Title>
        Contacts
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getFilteredContacts}
          onDeleteContact={deleteContact}
        />
      </Title>
    </Container>
  );
};
