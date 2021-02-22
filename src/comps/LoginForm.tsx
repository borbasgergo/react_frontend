import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { logInUser } from '../redux/actions/user';

export const LoginForm: React.FC = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [uname, setUname] = useState<string>("")

    const [pw, setPw] = useState<string>("")

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={(e) => { 
                dispatch(logInUser(e, navigate, uname, pw))
                setUname("")
                setPw("")
            }}>
                <input type="text" value={uname} onChange={(e) => setUname(e.target.value)} placeholder="username" />
                <input type="text" value={pw} onChange={(e) => setPw(e.target.value)} placeholder="password" />
                <input type="submit" name="submit" value="Log In"/>
            </form>
        </div>
    )
}