import AuthNav from 'components/AppBar/AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu'
import s from './AppBar.module.css'
import { getIsAuth } from 'redux/auth/auth-selectors'
import { useSelector} from 'react-redux'



export default function AppBar( ) {
    const  isAuth= useSelector(getIsAuth) 
    return (
        <header>
           <Navigation/>

            {isAuth ? <UserMenu /> :<AuthNav/>}
        </header>
    )
}