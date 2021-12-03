import AuthNav from 'components/AppBar/AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu'
import s from './AppBar.module.css'
import { getIsLoggedIn } from 'redux/auth/auth-selectors'
import { useSelector } from 'react-redux';
import ContactsView from 'views/ContactsView';


export default function AppBar( ) {
    // const isLoggedIn = useSelector(getIsLoggedIn) 
    return (
        <header>
            <Navigation />
            <AuthNav />
            {/*<UserMenu />*/}

            {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
        </header>
    )
}