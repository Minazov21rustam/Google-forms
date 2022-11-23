import styles from "../styles/Home.module.css";
import Registration from "./registation";
import Header from "./header";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Main() {
  return (
    <div className={styles.main__container}>
        <Header />
        <div className={styles.main__autorisationBox}>
          <form type="submit">
            <label>
              Введите логин <br />
              <input type="text"></input> <br />
              Введите пароль <br />
              <input type="password"></input>
              <div className={styles.main__autorisationBox_flexBox}></div>
              <button>Войти</button>
              <Link to="/register">
                <button>Регистрация</button>
              </Link>
            </label>
          </form>
        </div>
    </div>
  );
}
