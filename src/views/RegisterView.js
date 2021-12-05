import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/auth-thunks';
import s from './Views.module.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    <div className={s.registerSection}>
      <h1 className={s.registerTitle}> Let's register and join our team</h1>
      <Form onSubmit={handleSubmit} className={s.registerForm}>
        <Form.Group className="mb-3" controlId="formBasicName" >
        <Form.Label>
          Name
          </Form.Label>
            <Form.Control
            type="text"
            placeholder="Dumbledore"
            name="name"
            value={name}
            onChange={handleChange}/>      
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>
          Email
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="hogwarts-office@mail.com"
            name="email"
            value={email}
            onChange={handleChange}/>        
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>
          Password
          </Form.Label>
            <Form.Control
            type="password"
            placeholder="ridiculus2021"
            name="password"
            value={password}
            onChange={handleChange}/>
        </Form.Group>
        
        <Button variant="secondary" type="submit" className={s.btnText}>
          Login
        </Button>

      </Form>
    </div>
  );
}
