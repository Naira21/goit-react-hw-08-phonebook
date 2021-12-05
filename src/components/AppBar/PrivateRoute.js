import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'redux/auth/auth-selectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsAuth);
  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
}
