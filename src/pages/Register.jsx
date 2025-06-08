import DocumentTitle from "../components/DocumentTitle";
import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm";
import "../components/RegistrationForm/RegistrationForm.module.css";

export default function Register() {
  return (
    <div>
      <DocumentTitle>Register • Contact Book</DocumentTitle>
      <RegistrationForm />
    </div>
  );
}
