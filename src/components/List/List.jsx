import { Button } from "../Button/Button";
import styles from "./List.module.css";

export function List({ recipes, onSelectRecipe }) {
  return (
    <div className={styles.nav}>
      <span className={styles.title}>Lista przepisów:</span>
      <ul className={styles.list}>
        {recipes.map(({ name, id }) => (
          <li key={id} className={styles.item}>
            <Button onClick={() => onSelectRecipe(id)}>{name}</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
