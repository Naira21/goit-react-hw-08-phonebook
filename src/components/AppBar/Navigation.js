import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import s from './AppBar.module.css'
import { getIsLoggedIn } from "redux/auth/auth-selectors"

export default function Navigation() {
    const isLoggedIn = useSelector(state => state.state)
    return (
        <>
            <NavLink to="/" exact className={s.authNav} >
                Home Page
            </NavLink>

            {isLoggedIn &&
                <NavLink to="/contacts"  >
                    Phonebook
                </NavLink>                
            }
        </>
    )
}