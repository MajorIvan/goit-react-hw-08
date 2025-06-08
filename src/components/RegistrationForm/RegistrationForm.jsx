import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { TextField, Button } from "@mui/material";

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // const { name, email, password } = form.elements;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      {/* <label className={css.label}>
        Username
        <input type="text" name="name" />
      </label> */}
      <TextField
        className={css.label}
        label="Username"
        variant="outlined"
        type="text"
        name="name"
        size="small"
        required
      />
      {/* <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label> */}
      <TextField
        className={css.label}
        label="Email"
        variant="outlined"
        type="email"
        name="email"
        size="small"
        required
      />
      {/* <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label> */}
      <TextField
        className={css.label}
        label="Password"
        variant="outlined"
        type="password"
        name="password"
        size="small"
        required
      />
      <Button variant="contained" color="primary" type="submit">
        Register
      </Button>
    </form>
  );
};
