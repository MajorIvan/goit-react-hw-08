import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContactsName } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";
import { TextField, Box } from "@mui/material";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.container}>
      {/* <label htmlFor={searchId}>Find contacts by name or number</label>
      <input
        type="text"
        id={searchId}
        value={filter}
        onChange={(event) => dispatch(filterByContactsName(event.target.value))}
      /> */}
      <TextField
        label="Filter by name or number"
        variant="outlined"
        id={searchId}
        value={filter}
        size="small"
        onChange={(event) => dispatch(filterByContactsName(event.target.value))}
      />
    </div>
    // <Box sx={{ display: "flex", gap: 2 }}>

    // </Box>
  );
};

export default SearchBox;
