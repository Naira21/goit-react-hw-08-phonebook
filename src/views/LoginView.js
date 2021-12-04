import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth-thunks'
import s from './Views.module.css'

export default function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        reset();
        dispatch(loginThunk({email, password}))
    }
    const handleChange = (e) => {
        switch (e.target.name) {
            case 'email':
                return setEmail(e.target.value);
            case 'password':
                return setPassword(e.target.value);
            default:
                return;
        }
    }
      const reset = () => {
        setEmail('');
        setPassword('');
    }
    
    return (
        <div className={s.section}>
            <h1> We know you, dear charmer! </h1>
            <h2>Please, say "ALOHOMORA" and login</h2>
            <form onSubmit={handleSubmit}>               
                <label>
                    Email
                    <input
                        type='mail'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    >                    
                    </input>
                </label>
                  <label>
                    Password
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                    >                    
                    </input>
                </label>
                <button type='submit'>Login</button>                
            </form>
        </div>
    )      
}