import s from './AppBar.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getUserName } from 'redux/auth/auth-selectors'
import logo from './default/logo.png'
import { logoutThunk } from 'redux/auth/auth-thunks'


export default function UserMenu() {
    // const name = useSelector(getUserName);
    // const avatar = useSelector(logo);
    const dispatch = useDispatch();
    const handleCLick = () => {
        dispatch(logoutThunk())
    }
        

    return (    
        // <div style={s.container}>
        //     {/* <img alt="" width="32" style={s.avatar} /> */}
        //     {/* src={avatar} */}
        //     {/* <span style={s.name}>Welcome, { name}</span> */}
        //     <button type="button" onClick={handleCLick}>
        //         Logout
        //     </button>
        // </div>
        

        <nav>
            <p className={s.title}>Welcome</p>
            <button
                type="button"
                onClick={handleCLick}              
            >
                Logout
            </button>
    </nav>
    )
}