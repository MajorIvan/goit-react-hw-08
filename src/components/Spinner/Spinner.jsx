import css from "./Spinner.module.css";

export function Spinner({ message = "Loading..." }) {
  return (
    <div className={css.overlay}>
      <div className={css.spinner} />
      {message && <p className={css.text}>{message}</p>}
    </div>
  );
}
