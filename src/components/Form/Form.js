import { useState, useRef } from 'react';
import s from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/operations';
import { filteredContacts } from 'redux/contacts/selectors';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactIdName = useRef(() => {
    uuidv4();
  });
  const contactIdNumber = useRef(() => {
    uuidv4();
  });
  const contacts = useSelector(filteredContacts);
  const dispatch = useDispatch();

   const handleSubmit = e => {
    e.preventDefault();
    const obj = {
      name,
      number,
      id: uuidv4(),
    };
     const duplicateContact = contacts.find(
      contact => contact.name === obj.name,
      );
      if (duplicateContact) {
        alert(`${obj.name} is already in contacts`);
        return;
      };
      dispatch(addContactThunk(obj));    
      
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit} className={s.formStyle}>
      <Form.Group  className="mb-3" >
        <Form.Label column sm="2" htmlFor={contactIdName} >
        Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            onChange={handleChange}
            value={name} />
        </Col>
        <Form.Text className="text-muted">
          The name can only consist of letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc.
        </Form.Text>
      </Form.Group>
      

      <Form.Group  className="mb-3" >
        <Form.Label column sm="2" htmlFor={contactIdName} >
        Number
        </Form.Label>
        <Col sm="10">
          <Form.Control
            id={contactIdNumber}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
            onChange={handleChange}
            value={number} />
        </Col>
        <Form.Text className="text-muted">
          Phone number must be digits and can contain spaces, dashes, parentheses and can start with +
        </Form.Text>
      </Form.Group>

      <Button variant="secondary" type="submit" className={s.addBtn}>
        Add contact
      </Button>
    </Form>
  );
}