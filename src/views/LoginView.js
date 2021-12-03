import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-thunks'
import s from './Views.module.css'

export default function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        //dispatch(login({email, password}))
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
        <div className={s.section}>
            <h1> We know you, dear charmer! </h1>
            <h2>Please, say "ALOHOMORA" and login</h2>
            <form onSubmit={handleSubmit}>               
                <label>
                    Email
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                    >                    
                    </input>
                </label>
                  <label>
                    Password
                    <input
                        type='Password'
                        name='Password'
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