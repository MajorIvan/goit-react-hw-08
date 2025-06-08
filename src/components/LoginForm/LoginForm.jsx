import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { toast } from "react-hot-toast";
import { TextField, Button } from "@mui/material";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Login success!");
      })
      .catch(() => {
        toast.error("Login error...");
      });

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
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
        Log In
      </Button>
    </form>
  );
};
