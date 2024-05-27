import { Article } from "../Article/Article";
import styles from "./Cookbook.module.css";

export function Cookbook({ name, img, ingredients, description, country }) {
  return (
    <div className={styles.recipe}>
      <h1>Przepisy na smaczne rzeczy</h1>
      <Article
        name={name}
        country={country}
        ingredients={ingredients}
        description={description}
        img={img}
      />
    </div>
  );
}
