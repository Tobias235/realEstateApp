export const CurrentDate = () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const date = today.getDate().toString().padStart(2, "0");
  const year = today.getFullYear().toString();

  return { month, date, year };
};
