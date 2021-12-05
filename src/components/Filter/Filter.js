import { filterContacts } from 'redux/contacts/action';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


function Filter({ id }) {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-default">Find contacts</InputGroup.Text>
      <FormControl
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        id={id}
        type="text"
        name="name"
        value={value}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
      />
    </InputGroup>
  );
}

export default Filter;


