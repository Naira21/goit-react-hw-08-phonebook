//import s from './App.module.css';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Form from 'components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactThunk } from 'redux/contacts/operations';

function ContactsView() {
  const dispatch = useDispatch();
  dispatch(fetchContactThunk());

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>

  );
}

export default ContactsView;

      