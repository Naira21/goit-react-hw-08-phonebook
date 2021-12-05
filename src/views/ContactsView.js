import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Form from 'components/Form';
import { useDispatch } from 'react-redux';
import { fetchContactThunk } from 'redux/contacts/operations';

function ContactsView() {
  const dispatch = useDispatch();
  dispatch(fetchContactThunk());

  return (
    <div>
      <h1>Have you had Harry Potter's phone? Please do it know</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsView;
