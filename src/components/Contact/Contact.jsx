import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { DeleteConfirm } from "../DeleteConfirm/DeleteConfirm";
import css from "./Contact.module.css";
import { TextField, Button } from "@mui/material";

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

  // const handleUpdate = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await dispatch(updateContact({ id, ...values })).unwrap();
  //     setIsEditing(false);
  //   } catch (error) {
  //     console.error("Error updating contact:", error);
  //   }
  // };

  if (isEditing) {
    return (
      <li className={css.item}>
        {/* <form onSubmit={handleUpdate} className={css.form}>
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
        </form> */}
        <form onSubmit={handleUpdate} className={css.confirm}>
          <div className={css.editLeft}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={values.name}
              onChange={handleChange}
              size="small"
              required
            />
            <TextField
              label="Number"
              variant="outlined"
              name="number"
              value={values.number}
              onChange={handleChange}
              size="small"
              required
            />
          </div>
          <div className={css.editRight}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              type="button"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
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
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsEditing(true)}
        >
          Amend
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setConfirmOpen(true)}
        >
          Delete
        </Button>
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
