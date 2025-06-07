import css from "./DeleteConfirm.module.css";

export const DeleteConfirm = ({ open, message, onConfirm, onCancel }) => {
  if (!open) return null;
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <p>{message}</p>
        <div className={css.actions}>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
};
