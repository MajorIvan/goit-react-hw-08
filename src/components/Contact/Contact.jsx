import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { DeleteConfirm } from "../DeleteConfirm/DeleteConfirm";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState({ name, number });
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    setValues({ name, number });
  }, [name, number]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateContact({ id, ...values }));
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li className={css.item}>
        <form onSubmit={handleUpdate} className={css.form}>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
          <input
            name="number"
            value={values.number}
            onChange={handleChange}
            required
          />
        </form>
        <div className={css.confirm}>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      </li>
    );
  }
  return (
    <li className={css.item}>
      <div className={css.txt}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <div className={css.edit}>
        <button onClick={() => setIsEditing(true)}>Amend</button>
        <button onClick={() => setConfirmOpen(true)}>Delete</button>
      </div>

      <DeleteConfirm
        open={confirmOpen}
        message={`Are you sure you want to delete "${name}"?`}
        onConfirm={() => {
          dispatch(deleteContact(id));
          setConfirmOpen(false);
        }}
        onCancel={() => setConfirmOpen(false)}
      />
    </li>
  );
}
