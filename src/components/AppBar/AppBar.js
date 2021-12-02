import AuthNav from 'components/AppBar/AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu'
import s from './AppBar.module.css'
import { getIsLoggedIn } from 'redux/auth/auth-selectors'
import { useSelector } from 'react-redux';

export default function AppBar( ) {
    const isLoggedIn = useSelector(getIsLoggedIn) 
    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}