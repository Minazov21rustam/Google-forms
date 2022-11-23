import styles from "../styles/Home.module.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
// import Header from "./header";
import Main from "./main";
import Registration from "./registation";

export default function Home() {
  return (
    <Router>
      <div className={styles.container}>
        <Route path='/register' exact component={Registration}/>
        <Main />
      </div>
    </Router>
  );
}