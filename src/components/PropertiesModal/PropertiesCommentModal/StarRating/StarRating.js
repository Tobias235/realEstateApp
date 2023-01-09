import { useState } from "react";
import styles from "./StarRating.module.scss";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, i) => {
        i += 1;
        return (
          <button
            key={i}
            className={i <= (hover || rating) ? styles.active : styles.inactive}
            onClick={() => setRating(i)}
            onDoubleClick={() => {
              setRating(0);
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
