import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);



  return (
      <input
        className={css.input}
        placeholder="Who are you looking for?"
        type="text"
        value={nameFilter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
  );
}

export default SearchBox;
