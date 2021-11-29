import { useState, useRef } from 'react';
import s from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/contacts/operations';
import { filteredContacts } from 'redux/contacts/selectors';

function Form() {
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
    resetForm();
    const duplicateContact = contacts.find(
      contact => contact.name === obj.name,
    );
    if (duplicateContact) {
      alert(`${obj.name} is already in contacts`);
      return;
    }

    dispatch(addContactThunk(obj));
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
    <form onSubmit={handleSubmit}>
      <label htmlFor={contactIdName} className={s.labelText}>
        Name
      </label>
      <input
        id={contactIdName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleChange}
        value={name}
      />

      <label htmlFor={contactIdNumber} className={s.labelText}>
        Number
      </label>
      <input
        id={contactIdNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleChange}
        value={number}
      />
      <button type="submit" className={s.addBtn}>
        Add contact
      </button>
    </form>
  );
}

export default Form;

// Логика ванильного Redux (без Toolkit)

// export default Form;
// const mapStateToProps = (state) => {
//   return {
//     baseContacts: state.contacts,
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (newContact) => dispatch(addContact(newContact)),
// })

//export default connect(null, mapDispatchToProps)(Form)
