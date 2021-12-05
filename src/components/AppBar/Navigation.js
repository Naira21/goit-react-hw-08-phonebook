import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';
import { getIsAuth } from 'redux/auth/auth-selectors';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Navigation() {
  const isAuth = useSelector(getIsAuth);
  return (

    <ButtonGroup>
      <NavLink to="/" className={s.authNav}>
        <Button variant="secondary" className={s.btnText}>
          Home Page
        </Button>
      </NavLink>
      {isAuth &&
        <NavLink to="contacts">
          <Button variant="secondary" className={s.btnText}>
          Phonebook
          </Button>
        </NavLink>
      }
    </ButtonGroup>
  );
}
 
