import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";
import { TextField, Button } from "@mui/material";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "To short")
    .max(50, "To long")
    .required("This is a required field"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      {({ values, handleChange }) => (
        <Form className={css.form}>
          <div className={css.formGroup}>
            {/* <label htmlFor={nameId}>Name</label>
          <Field className={css.field} type="text" name="name" id={nameId} /> */}
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              type="text"
              size="small"
              htmlFor={nameId}
              id={nameId}
              value={values.name}
              onChange={handleChange}
              required
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.formGroup}>
            {/* <label htmlFor={numberId}>Number</label>
          <Field className={css.field} type="tel" name="number" id={numberId} /> */}
            <TextField
              label="Number"
              variant="outlined"
              name="number"
              type="tel"
              size="small"
              htmlFor={numberId}
              id={numberId}
              value={values.number}
              onChange={handleChange}
              required
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
          <Button variant="contained" type="submit">
            Add contact
          </Button>
        </Form>
      )}
    </Formik>
  );
}
