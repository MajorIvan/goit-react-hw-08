import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, phone } }) {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <div>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
}
