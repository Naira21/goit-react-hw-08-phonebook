import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import ContactsForm from 'components/Form';
import { useDispatch } from 'react-redux';
import { fetchContactThunk } from 'redux/contacts/operations';
import s from './Views.module.css'

function ContactsView() {
  const dispatch = useDispatch();
  dispatch(fetchContactThunk());

  return (
    <div className={s.contactsView}>
      <h1 className={s.titleContView}>
        Have you had Harry Potter's phone? <br/> Please note it now
      </h1>
      <section className={s.contactsSection}>
        <ContactsForm />
        <div className={s.contactsList}>
        <Filter />
        <ContactList />          
      </div>
      </section>
    </div>
  );
}

export default ContactsView;
