import { useSelector } from "react-redux";
import {
  selectContacts,
  selectVisibleContacts,
} from "../../redux/contacts/selectors";
import { selectFilters } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const allContacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilters).trim();

  if (!filter) {
    return (
      <>
        <p className={css.message}>
          Enter a name or number to search for contacts.
        </p>
        <ul className={css.list}>
          {allContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      </>
    );
  }

  if (visibleContacts.length === 0) {
    return (
      <p className={css.message}>No contacts found for query "{filter}".</p>
    );
  }

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
