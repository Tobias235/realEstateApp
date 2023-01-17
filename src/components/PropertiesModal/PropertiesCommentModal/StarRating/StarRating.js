import { Fragment, useEffect, useState } from "react";
import styles from "./StarRating.module.scss";
import { ReactComponent as Star } from "../../../../assets/images/star.svg";

const StarRating = (props) => {
  const [percentValue, setPercentValue] = useState();
  const [hover, setHover] = useState(0);

  useEffect(() => {
    if (props.rating) {
      const ratingPercent = (props.rating / 5) * 100;
      const percentValue = 100 - ratingPercent;
      setPercentValue(percentValue);
    }
  }, [props.rating]);

  return (
    <div className={`${styles.stars} ${props.className}`}>
      {Array(5)
        .fill()
        .map((_, i) => {
          i += 1;
          return (
            <Fragment key={i}>
              {props.isHoverable && props.isClickable ? (
                <Star
                  className={
                    i <= (hover || props.starRating)
                      ? styles.active
                      : styles.inactive
                  }
                  name={props.name}
                  onClick={() => {
                    props.onClick(i);
                  }}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(props.starRating)}
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
