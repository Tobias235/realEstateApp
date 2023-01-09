import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../../../../actions/Actions";
import styles from "./StarRating.module.scss";

const StarRating = () => {
  const [hover, setHover] = useState(0);
  const rating = useSelector((state) => state.rating);

  const dispatch = useDispatch();

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, i) => {
        i += 1;
        return (
          <button
            key={i}
            className={i <= (hover || rating) ? styles.active : styles.inactive}
            onClick={() => {
              dispatch(setRating(i));
            }}
            onDoubleClick={() => {
              dispatch(setRating(0));
              setHover(0);
            }}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(rating)}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
