import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContactsName } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name or number</label>
      <input
        type="text"
        id={searchId}
        value={filter}
        onChange={(event) => dispatch(filterByContactsName(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
