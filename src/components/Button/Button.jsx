import styles from "./Button.module.css";

export function Button({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${active ? styles.active : ""}`}
    >
      {children}
    </button>
  );
}
