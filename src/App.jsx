import styles from "./App.module.css";
import { Cookbook } from "./components/CookBook/Cookbook";
import { List } from "./components/List/List";
import { recipes } from "./components/data/recipes";

function App() {
  return (
    <>
      <div className={styles.box}>
        <List recipes={recipes} onSelectRecipe={(id) => console.log(id)} />
        <Cookbook />
      </div>
    </>
  );
}

export default App;
