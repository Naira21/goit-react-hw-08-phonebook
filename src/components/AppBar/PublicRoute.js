import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth/auth-selectors';

export default function PublicRoute({ children }) {
  const isLoggedIn = useSelector(getIsAuth);

  return <>{isLoggedIn ? <Navigate to="/contacts" /> : children}</>;
}
