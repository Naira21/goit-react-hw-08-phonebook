import { useSelector, useDispatch } from 'react-redux'
import { getUserName } from 'redux/auth/auth-selectors'
import { logoutThunk } from 'redux/auth/auth-thunks'


export default function UserMenu() {
    const name = useSelector(getUserName);
    const dispatch = useDispatch();
    const handleCLick = () => {
        dispatch(logoutThunk())
    }        

    return (
        <div>
            <p>Welcome, {name}</p>
            <button
                type="button"
                onClick={handleCLick}              
            >
                Logout
            </button>
        </div>
    )
}