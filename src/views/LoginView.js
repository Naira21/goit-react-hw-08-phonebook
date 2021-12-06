import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth-thunks';
import s from './Views.module.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    reset();
    dispatch(loginThunk({ email, password }));
  };
  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        return setEmail(e.target.value);
      case 'password':
        return setPassword(e.target.value);
      default:
        return;
    }
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (    
    <div className={s.loginSection}>
      <section className={s.loginTitleSection}>
        <h1> We know you, dear charmer! </h1>
        <h2>Please, say "ALOHOMORA" and login</h2>
      </section>
      <Form onSubmit={handleSubmit} className={s.loginForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label className={s.loginLabelText}>
          Email address
          </Form.Label>    
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}/>        
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className={s.loginLabelText}>
          Password
          </Form.Label>                    
          <Form.Control
            type="password"
            placeholder="Password"
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
