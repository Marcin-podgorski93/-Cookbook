import styles from "./App.module.css";
import { Cookbook } from "./components/CookBook/Cookbook";
import { List } from "./components/List/List";

function App() {
  return (
    <>
      <div className={styles.box}>
        <List />
        <Cookbook />
      </div>
    </>
  );
}

export default App;
