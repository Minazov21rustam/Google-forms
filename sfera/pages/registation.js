import styles from "../styles/Home.module.css";


export default function Registration() {
  return (
    <div className={styles.registration__container}>
      <div className={styles.main__autorisationBox}>
        <form type='submit'>
          <label>
            Придумайте логин <br />
            <input type="text"></input> <br />
            Придумайте пароль <br />
            <input type="password"></input>
            {/* <div className={styles.main__autorisationBox_flexBox}></div>
            <button >Войти</button>
            <button>Регистрация</button> */}
          </label>
        </form>
      </div>
    </div>
  );
}
