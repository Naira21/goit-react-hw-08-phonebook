import s from './AppBar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getUserName } from 'redux/auth/auth-selectors'
import logo from './default/logo.png'
import { logOut } from 'redux/auth/auth-operations'
import { Link } from 'react-router-dom'

export default function UserMenu() {
    const name = useSelector(getUserName);
    const avatar = useSelector(logo);
    const dispatch = useDispatch();

    return (
        <Link>
            <div style={s.container}>
                <img src={avatar} alt="" width="32" style={s.avatar} />
                <span style={s.name}>Welcome, {name}</span>
                <button type="button" onClick={dispatch(logOut())}>
                    Logout
                </button>
            </div>
        </Link>
    )
}