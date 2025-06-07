import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterByContactsName } from "../../redux/filters/slice";

const SearchBox = () => {
  const searchId = useId();
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

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
