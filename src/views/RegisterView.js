import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth-thunks';
import s from './Views.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk({ name, email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
    setName('');
  };
  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.target.value);
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      default:
        return;
    }
  };

  return (
    <div className={s.section}>
      <h1> Let's register and become a part of our miraculous team</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Dumbledore"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Email
          <input
            type="mail"
            name="email"
            value={email}
            placeholder="hogwarts-office@gmail.com"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            placeholder="ridiculus2021"
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
