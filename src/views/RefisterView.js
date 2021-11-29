import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {register} from 'redux/auth/auth-operations'

export default function RefisterView() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        setPassword('');
        setName('')
        dispatch(register({name, email, password}))
    }

    const handleChange = ({target:{ name, value }}) => {
        switch (name) {
            case 'name':
                return setName(value);
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
            <h1> Let's register and become a part of our miraculous team</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type='name'
                        name='name'
                        value='name'
                        onChange={handleChange}
                    >                    
                    </input>
                </label>
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