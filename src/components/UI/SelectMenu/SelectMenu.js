import styles from "./SelectMenu.module.scss";

const SelectMenu = (props) => {
  return (
    <select
      className={`${styles.selectMenu} ${props.className}`}
      defaultValue="default"
      onChange={props.onChange}
    >
      {props.children}
    </select>
  );
};

export default SelectMenu;
