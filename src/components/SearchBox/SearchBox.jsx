import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { filterByContactsName } from "../../redux/filters/filtersSlice";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        id={searchId}
        onChange={(event) => dispatch(filterByContactsName(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
