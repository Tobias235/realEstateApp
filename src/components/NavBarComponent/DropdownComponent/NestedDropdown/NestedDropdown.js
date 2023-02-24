import { useDispatch, useSelector } from "react-redux";
import { setUpdateFilter } from "../../../../actions/FilterActions";
import styles from "./NestedDropdown.module.scss";

const NestedDropdown = (props) => {
  const dispatch = useDispatch();

  const { city, type } = useSelector((state) => state.filterReducer);

  return (
    <ul className={`${styles.secondList} ${props.className}`}>
      {props.items?.map((item) => {
        return (
          <li key={item}>
            <a
              href={`#properties`}
              data-value={item}
              onClick={(e) =>
                props.filterType === "type"
                  ? dispatch(setUpdateFilter(city, e.target.dataset.value))
                  : dispatch(setUpdateFilter(e.target.dataset.value, type))
              }
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NestedDropdown;
