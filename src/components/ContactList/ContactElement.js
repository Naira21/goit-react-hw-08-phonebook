import s from './Contact.module.css';

function ContactElement({ contact, onDeleteContact }) {
  return (
    <li key={contact.id}>
      {contact.name}: {contact.phone}
      <button className={s.deleteBtn} type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
}

export default ContactElement;
