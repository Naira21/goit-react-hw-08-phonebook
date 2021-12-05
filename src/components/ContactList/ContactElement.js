import s from './Contact.module.css';
import Button from 'react-bootstrap/Button';

export default function ContactElement({ contact, onDeleteContact }) {
  return (
    <li key={contact.id}>
      {contact.name}: <span className={s.contactNumber}>{contact.number}</span>
     <Button className={s.deleteBtn} type="button" onClick={onDeleteContact} variant="secondary" >
        Delete
      </Button>
    </li>
  );
}
   
