import { Article } from "../Article/Article";
import styles from "./Cookbook.module.css";

export function Cookbook({ name, img, ingredients, description }) {
  return (
    <div className={styles.recipe}>
      <h1>Przepisy na smaczne rzeczy</h1>
      <Article
        name={name}
        ingredients={ingredients}
        description={description}
        img={img}
      />
    </div>
  );
}
