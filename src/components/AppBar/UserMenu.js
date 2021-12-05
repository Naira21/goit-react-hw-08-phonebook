import s from './AppBar.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { getUserName } from 'redux/auth/auth-selectors'
import { logoutThunk } from 'redux/auth/auth-thunks'
import Button from 'react-bootstrap/Button';


export default function UserMenu() {
    const name = useSelector(getUserName);
    const dispatch = useDispatch();
    const handleCLick = () => {
        dispatch(logoutThunk())
    }        

    return (
        <div className={s.authUser}>
            <p className={s.greetings}>Welcome, {name}!</p>

            <Button
                variant="secondary"
                type="button"
                onClick={handleCLick}
                className={s.btnUser}
            >
                Logout
            </Button>
        </div>
    )
}
