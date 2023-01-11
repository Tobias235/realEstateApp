export const RatingCalculator = (commentsArray) => {
  if (!commentsArray) return;
  const commentValues = Object.values(commentsArray);
  const totalRating = commentValues.reduce(
    (acc, comment) => acc + (comment.rating || 0),
    0
  );
  const commentLength = commentValues.length;
  return totalRating / commentLength;
};
