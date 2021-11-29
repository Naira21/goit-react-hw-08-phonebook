import AuthNav from 'components/AppBar/AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu'

export default function AppBar({isAuthenticated}) {
    return (
        <header>
            <Navigation />
            {isAuthenticated ? <UserMenu /> : <AuthNav />}
        </header>
    )
}