import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Backdrop from "../../components/utils/Backdrop/Backdrop";
import Modal from "../../components/utils/Modal/Modal";
import LoginModal from "../../components/LoginComponent/LoginModal/LoginModal";
import PropertiesModal from "../../components/PropertiesModal/PropertiesModal";
import AdminPropertiesModal from "../../components/PropertiesComponent/AdminPropertiesModal/AdminPropertiesModal";
// import styles from "./ModalContainer.module.scss";

const ModalContainer = () => {
  const [modal, setModal] = useState([]);
  const login_modal = useSelector((state) => state.login_modal);
  const show_properties_modal = useSelector(
    (state) => state.show_properties_modal
  );
  const show_details = useSelector((state) => state.show_details);

  useEffect(() => {
    let stateArray = [];
    stateArray.push(login_modal, show_properties_modal, show_details);
    setModal(stateArray.some((val) => val === true));
  }, [login_modal, show_properties_modal, show_details]);

  return (
    <>
      {modal && <Backdrop />}
      {modal && (
        <Modal>
          {login_modal && <LoginModal />}
          {show_details && <PropertiesModal />}
          {show_properties_modal && <AdminPropertiesModal />}
        </Modal>
      )}
    </>
  );
};

export default ModalContainer;
