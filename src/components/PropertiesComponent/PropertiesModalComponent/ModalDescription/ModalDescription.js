import styles from "./ModalDescription.module.scss";

const ModalDescription = () => {
  return (
    <div className={styles.modalDescription}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        vehicula auctor erat vitae elementum. Morbi dapibus risus et augue
        posuere, vel lacinia lectus placerat. Vestibulum eu turpis neque.
        Phasellus porttitor purus eget elit egestas, eget tincidunt mauris
        porta. Integer diam dolor, pharetra egestas porta dictum, sodales sed
        ante. Cras at cursus quam. Mauris euismod felis lectus, vel fermentum ex
        luctus lobortis. Mauris nec volutpat augue. Ut eu dapibus odio.
      </p>
      <span>Location: Pasig</span>
      <span>Bedrooms: 3</span>
      <span>Bathrooms: 2</span>
      <span>Size: 100sqm</span>
      <span>Price: 2.000.000</span>
    </div>
  );
};

export default ModalDescription;
