import { Route, Routes } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';

import ContactsView from "views/ContactsView";
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';

import { currentThunk } from 'redux/auth/auth-thunks'

import AppBar from 'components/AppBar/AppBar'
import PrivateRoute from 'components/AppBar/PrivateRoute'
import PublicRoute from 'components/AppBar/PublicRoute'

// import {getRefreshing} from 'redux/auth/auth-selectors'

export default function App() {
  // const isRefreshing=useSelector(getRefreshing)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentThunk())
  }, [dispatch]
  )

  const isAuth = false;
  return (
     <>
      <AppBar />
      {/*{!isRefreshing &&*/}
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginView />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactsView />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}
