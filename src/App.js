// import s from './App.module.css';
// import Filter from './components/Filter';
// import ContactList from './components/ContactList';
// import Form from './components/Form';
// import { useDispatch } from 'react-redux';
// import { fetchContactThunk } from './redux/contacts/operations';

import { NavLink, Route, Routes } from 'react-router-dom'
import ContactsView from "views/ContactsView";
import HomeView from 'views/HomeView';
import RefisterView from 'views/RefisterView';
import AppBar from 'components/AppBar/AppBar'
import LoginView from 'views/LoginView'

export default function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path='/*' element={<HomeView/>} />
        <Route path='/register' element={<RefisterView/>} />
        <Route path='/login' element={<LoginView/>} />
        <Route path='/contacts' element={<ContactsView/>} />      
      </Routes>
    </>
  )


  
  
  // const dispatch = useDispatch();
  // dispatch(fetchContactThunk());
  // return (
  //   <div className={s.wrapper}>
  //     <h1 className={s.pageTitle}>Phonebook</h1>
  //     <Form />
  //     <h2>Contacts</h2>
  //     <Filter />
  //     <ContactList />
  //   </div>
  // );
}
