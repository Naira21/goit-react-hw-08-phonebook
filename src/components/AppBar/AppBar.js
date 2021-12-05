import AuthNav from 'components/AppBar/AuthNav';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import { getIsAuth } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import s from 'components/AppBar/AppBar.module.css'

export default function AppBar() {
  const isAuth = useSelector(getIsAuth);
  return (
    <header >
      <section className={s.bg}>
        <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
      </section>
      
    </header>
  );
}
