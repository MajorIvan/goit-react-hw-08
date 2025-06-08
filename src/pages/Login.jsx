import DocumentTitle from "../components/DocumentTitle";
import { LoginForm } from "../components/LoginForm/LoginForm";
import "../components/LoginForm/LoginForm.module.css";

export default function Login() {
  return (
    <div>
      <DocumentTitle>Login • Contact Book</DocumentTitle>
      <LoginForm />
    </div>
  );
}
