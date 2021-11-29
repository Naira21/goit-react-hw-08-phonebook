import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {login} from 'redux/auth/auth-operations'

export default function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        dispatch(login({email, password}))
    }
    const handleChange = ({ name, value }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }
    
    return (
        <div>
            <h1> You are a part of our miraculous team! Let's login and open all your possibilities </h1>
            <form onSubmit={handleSubmit}>
                 
                <label>
                    Email
                    <input
                        type='email'
                        name='email'
                        value='email'
                        onChange={handleChange}
                    >                    
                    </input>
                </label>
                  <label>
                    Password
                    <input
                        type='Password'
                        name='Password'
                        value='Password'
                        onChange={handleChange}
                    >                    
                    </input>
                </label>
                <button type='submit'>Login</button>                
            </form>
        </div>
    )      
}