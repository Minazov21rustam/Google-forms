import Header from "../components/Header"
import Footer from "../components/Footer"
import React, {useState} from 'react';
// import Layout from "../layouts/Layout";
// import {useRouter} from "next/router";

const Register = () => {
    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const arrRegist = []

    
    const show = () => {
        console.log(email,password)
        arrRegist.push(email)
        console.log(arrRegist)
    }
    const submit = (e) => {
        e.preventDefault()
    }

    return (

    <>
        <form onSubmit={submit}>
            <p>Ввдетие логин</p>
            <input onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" id="1"/> 
            <p>Ввдетие пароль</p>
            <input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" id="2"/>
            <button onClick={show()} type='submit'>Войти</button>
        </form>
    </>
  )}
  export default Register 