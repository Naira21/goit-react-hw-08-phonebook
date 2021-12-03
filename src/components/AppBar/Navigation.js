import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import s from './AppBar.module.css'
import { getIsLoggedIn } from "redux/auth/auth-selectors"

export default function Navigation() {
    // const isLoggedIn = useSelector(false);
    return (
        <>
            <NavLink to="/" exact className={s.authNav} >
                Home Page
            </NavLink>
            <NavLink to="/contacts"  className={s.authNav}>
                Phonebook
            </NavLink>

            
            {/* {isLoggedIn &&
                <NavLink to="/contacts"  >
                    Phonebook
                </NavLink>                
            } */}
        </>
    )
}