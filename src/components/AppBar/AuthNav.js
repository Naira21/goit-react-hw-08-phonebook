import { NavLink } from 'react-router-dom';

export default function AuthNav() {
    return (
        <div>
            <NavLink
                to="/register"
            >
                Registrate to magic world
            </NavLink>
            <NavLink
                to="/login"
            >
                Login
            </NavLink>
        </div>
    )
}