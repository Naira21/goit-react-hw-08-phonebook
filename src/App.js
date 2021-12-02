import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import ContactsView from "views/ContactsView";
import HomeView from 'views/HomeView';
import RefisterView from 'views/RefisterView';
import AppBar from 'components/AppBar/AppBar'
import LoginView from 'views/LoginView';
import { fetchCurrentUser } from 'redux/auth/auth-operations'
import PrivateRoute from 'components/AppBar/PrivateRoute'
import PublicRoute from 'components/AppBar/PublicRoute'
import {getRefreshing} from 'redux/auth/auth-selectors'

export default function App() {
  const isRefreshing=useSelector(getRefreshing)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])
  return (
    <>
      <AppBar />
      {!isRefreshing &&
        <Routes>
        {/* <Route path='/' element={<HomeView/>} /> */}
        {/* <Route path='/register' element={<RefisterView/>} />
        <Route path='/login' element={<LoginView />} /> */}
        <PublicRoute exact path='/'>
          <HomeView/>
        </PublicRoute>

        <PublicRoute path='/register' restricted>
          <RefisterView/>
        </PublicRoute>

          <PublicRoute path='/login' restricted redirectTo='/contacts'>
          <LoginView/>
        </PublicRoute>


        <PrivateRoute path='/contacts'>
          <ContactsView/>
        </PrivateRoute>
        {/* <Route path='/contacts' element={<ContactsView />} />         */}
      </Routes>
      }
    </>
  )
}
