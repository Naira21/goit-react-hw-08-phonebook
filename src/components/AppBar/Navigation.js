import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';
import { getIsAuth } from 'redux/auth/auth-selectors';

export default function Navigation() {
  const isAuth = useSelector(getIsAuth);
  return (
    <>
      <NavLink to="/" className={s.authNav}>
        Home Page
      </NavLink>
      <NavLink to="contacts">
        Phonebook
      </NavLink>
      {/* {isAuth && <NavLink to="contacts">Phonebook</NavLink>} */}
    </>
  );
}
