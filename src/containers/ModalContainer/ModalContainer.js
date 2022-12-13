import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMobileMenu,
  setShowAddComment,
  setShowDetails,
  setShowLoginModal,
  setShowMobileNavOptions,
  setShowPropertiesModal,
} from "../../actions/Actions";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Modal from "./../../components/UI/Modal/Modal";
import LoginModal from "../../components/LoginComponent/LoginModal/LoginModal";
import PropertiesModal from "../../components/PropertiesModal/PropertiesModal";
import UploadPropertiesModal from "../../components/UploadPropertiesModal/UploadPropertiesModal";
import Loader from "../../components/UI/Loader/Loader";
import styles from "./ModalContainer.module.scss";

const ModalContainer = () => {
  const [modal, setModal] = useState([]);
  const dispatch = useDispatch();
  const login_modal = useSelector((state) => state.login_modal);
  const show_properties_modal = useSelector(
    (state) => state.show_properties_modal
  );
  const show_details = useSelector((state) => state.show_details);
  const loading = useSelector((state) => state.loading);
  const upload_status = useSelector((state) => state.uploading_status);

  useEffect(() => {
    let stateArray = [];
    stateArray.push(login_modal, show_properties_modal, show_details);
    setModal(stateArray.some((val) => val === true));
  }, [login_modal, show_properties_modal, show_details]);

  const onClose = () => {
    if (loading) return;

    dispatch(setShowLoginModal(false));
    dispatch(setShowDetails(false));
    dispatch(setShowAddComment(false));
    dispatch(setShowPropertiesModal(false));
    dispatch(setMobileMenu(false));
    dispatch(setShowMobileNavOptions(false));
  };

  return (
    <>
      {modal && !loading && <Backdrop onClick={onClose} />}
      {modal && loading && (
        <Backdrop className={styles.backdropLoader} onClick={onClose}>
          <Loader>{upload_status}</Loader>
        </Backdrop>
      )}
      {modal && (
        <Modal>
          {login_modal && <LoginModal />}
          {show_details && <PropertiesModal />}
          {show_properties_modal && <UploadPropertiesModal />}
        </Modal>
      )}
    </>
  );
};

export default ModalContainer;
