import styles from "./List.module.css";

export function List() {
  return (
    <div className={styles.list}>
      <p>Lista przepisów:</p>
      <br />
      <ul>
        <li>Patas Bravas</li>
        <li>Carbonara</li>
        <li>Ratatouille</li>
        <li>Sushu Nigiri</li>
      </ul>
    </div>
  );
}
