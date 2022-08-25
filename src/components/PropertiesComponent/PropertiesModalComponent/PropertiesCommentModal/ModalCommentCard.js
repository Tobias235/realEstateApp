import styles from "./ModalCommentCard.module.scss";

const ModalCommentCard = () => {
  return (
    <div className={styles.commentCard}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        vehicula auctor erat vitae elementum. Morbi dapibus risus et augue
        posuere, vel lacinia lectus placerat. Vestibulum eu turpis neque.
        <span>By: Tobias</span>
      </p>
    </div>
  );
};

export default ModalCommentCard;
