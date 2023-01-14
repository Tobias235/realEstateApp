import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "../../../../actions/Actions";
import styles from "./StarRating.module.scss";
import { ReactComponent as Star } from "../../../../assets/images/star.svg";

const StarRating = ({ rating, className, isHoverable, isClickable }) => {
  const [percentValue, setPercentValue] = useState();
  const [hover, setHover] = useState(0);

  const ratingValue = useSelector((state) => state.rating);

  const dispatch = useDispatch();

  useEffect(() => {
    if (rating) {
      const ratingPercent = (rating / 5) * 100;
      const percentValue = 100 - ratingPercent;
      setPercentValue(percentValue);
    }
  }, [rating]);

  return (
    <div className={`${styles.stars} ${className}`}>
      {Array(5)
        .fill()
        .map((_, i) => {
          i += 1;
          return (
            <Fragment key={i}>
              {isHoverable && isClickable ? (
                <Star
                  className={
                    i <= (hover || ratingValue)
                      ? styles.active
                      : styles.inactive
                  }
                  onClick={() => {
                    dispatch(setRating(i));
                  }}
                  onDoubleClick={() => {
                    dispatch(setRating(0));
                    setHover(0);
                  }}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(ratingValue)}
                />
              ) : (
                <Star />
              )}
            </Fragment>
          );
        })}
      <div className={styles.coverContainer}>
        <span className={styles.cover} style={{ width: percentValue }}></span>
      </div>
    </div>
  );
};

export default StarRating;
