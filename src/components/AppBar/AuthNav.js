import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function AuthNav() {
    return (
        <ButtonGroup>
            <NavLink 
                to="/register"
                className={s.authNav}
            > 
                <Button variant="secondary" className={s.btnText}>
                    Registrate to magic world
                </Button>
            </NavLink>
            <NavLink
                to="/login"
                className={s.authNav}
            >
                <Button variant="secondary" className={s.btnText}>
                    Login
                </Button>
            </NavLink>
        </ButtonGroup>
    )
}
