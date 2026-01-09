'use client';

import { LoginForm } from '../../components/LoginForm'
import { SignUpForm } from '../../components/SignUpForm';
import { useState } from 'react';

export default function Login (){
    const [isLogin, setIsLogin] = useState(true);
    return ( 
        <div>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Register' : 'Login'}
            </button>
            {isLogin ? <LoginForm /> : <SignUpForm />}
        </div>
    )
}