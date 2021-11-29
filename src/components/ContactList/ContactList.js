import ContactElement from './ContactElement';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from 'redux/contacts/operations';
import { filteredContacts } from 'redux/contacts/selectors';
export default function ContactList() {
  const contacts = useSelector(filteredContacts);
  const dispatch = useDispatch();

  return (
    <ol className={s.list}>
      {contacts.map(contact => (
        <ContactElement
          contact={contact}
          onDeleteContact={() => dispatch(deleteContactThunk(contact.id))}
          key={contact.id}
        />
      ))}
    </ol>
  );
}

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      number: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
