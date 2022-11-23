import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__containerFlexBox}>
        <h1>Добро пожаловать!</h1>
        <select name="languages" id="lang">
          <option value="Rus">Русский</option>
          <option value="Eng">Englesh</option>
          <option value="Deu">Deauch</option>
        </select>
      </div>
    </div>
  );
}
