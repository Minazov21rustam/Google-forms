import React, { useState} from 'react';
// import Layout from "../Layout";
import Head from "next/head";
import {useRouter} from "next/router";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();

        // await fetch('http://localhost:8000/api/login', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     credentials: 'include',
        //     body: JSON.stringify({
        //         email,
        //         password
        //     })
        // });

        // await router.push('/');
    }

    return (
            <form onSubmit={submit}>
                <p>Ввдетие логин</p>
                <input type="email" className="form-control" placeholder="Email" required
                       onChange={e => setEmail(e.target.value)}
                />
                <p>Ввдетие пароль</p>
                <input type="password" className="form-control" placeholder="Password" required
                       onChange={e => setPassword(e.target.value)}
                />

                <button type="submit">Войти</button>
            </form>
    );
};

export default Login;
