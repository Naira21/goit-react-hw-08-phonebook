import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css'

export default function AuthNav() {
    return (
        <div>
            <NavLink 
                to="/register"
                className={s.authNav}
            >
                Registrate to magic world
            </NavLink>
            <NavLink
                to="/login"
                className={s.authNav}
            >
                Login
            </NavLink>
        </div>
    )
}