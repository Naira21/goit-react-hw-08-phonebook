import s from './Filter.module.css';
import { filterContacts } from 'redux/contacts/action';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selectors';

function Filter({ id }) {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label htmlFor={id} className={s.labelText}>
      Find contacts by name
      <input
        id={id}
        type="text"
        name="name"
        value={value}
        onChange={e => dispatch(filterContacts(e.currentTarget.value))}
        className={s.filterBtn}
      />
    </label>
  );
}

export default Filter;

// Логика ванильного Redux (без Toolkit)

// const mapStateToProps = (state) => ({
//   value: state.filter,
// })

// const mapDispatchToProps = (dispatch)=>({
//   onChange: e=>dispatch(filterContacts(e.currentTarget.value)),
// })

//export default connect(mapStateToProps, mapDispatchToProps)(Filter);
