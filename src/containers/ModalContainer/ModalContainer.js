import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Modal from "./../../components/UI/Modal/Modal";
import LoginModal from "../../components/LoginComponent/LoginModal/LoginModal";
import PropertiesModal from "../../components/PropertiesModal/PropertiesModal";
import UploadPropertiesModal from "../../components/UploadPropertiesModal/UploadPropertiesModal";
import MobileNavContainer from "../NavbarContainer/MobileNavContainer";
import ErrorModal from "../../components/UI/ErrorModal/ErrorModal";
import ProfileModal from "../../components/LoginComponent/ProfileModal/ProfileModal";
import Loader from "../../components/UI/Loader/Loader";
import {
  setModalName,
  setShowAddReview,
  setShowDetails,
  setShowLoginModal,
  setShowProfile,
  setShowUploadPropertiesModal,
} from "../../actions/ModalActions";
import {
  setCurrentProperty,
  setCurrentPropertyData,
} from "../../actions/PropertyActions";
import {
  setMobileMenu,
  setShowMobileUserDropdown,
} from "../../actions/MobileActions";
import { setError } from "../../actions/LoadingActions";
import styles from "./ModalContainer.module.scss";

const ModalContainer = () => {
  const [modal, setModal] = useState([]);
  const dispatch = useDispatch();

  const { login_modal, show_details, show_profile, modal_name } = useSelector(
    (state) => state.modalReducer
  );

  const { error, loading, upload_status } = useSelector(
    (state) => state.loadingReducer
  );

  const show_upload_properties_modal = useSelector(
    (state) => state.modalReducer.show_upload_properties_modal
  );
  const mobile_menu = useSelector((state) => state.mobileReducer.mobile_menu);

  useEffect(() => {
    let stateArray = [];
    stateArray.push(
      login_modal,
      show_upload_properties_modal,
      show_details,
      show_profile,
      mobile_menu
    );
    setModal(stateArray.some((val) => val === true));
  }, [
    login_modal,
    show_upload_properties_modal,
    show_details,
    show_profile,
    mobile_menu,
  ]);

  const onClose = () => {
    if (loading) return;

    if (modal_name !== "" && modal_name !== "comment") {
      dispatch(setModalName(null));
    }

    switch (modal_name) {
      case "login":
        dispatch(setShowLoginModal(false));
        break;
      case "details":
        dispatch(setShowDetails(false));
        dispatch(setCurrentProperty(null));
        dispatch(setCurrentPropertyData(null));
        break;
      case "upload":
        dispatch(setShowUploadPropertiesModal(false));
        dispatch(setCurrentProperty(null));
        dispatch(setCurrentPropertyData(null));
        break;
      case "review":
        dispatch(setShowAddReview(false));
        dispatch(setModalName("details"));
        break;
      case "mobile":
        dispatch(setMobileMenu(false));
        dispatch(setShowMobileUserDropdown(false));
        break;
      case "profile":
        dispatch(setShowProfile(false));
        break;
      default:
        return;
    }
  };

  return (
    <>
      {mobile_menu && <MobileNavContainer />}
      {modal && loading && (
        <Backdrop className={styles.backdropLoader} onClick={onClose}>
          <Loader>{upload_status}</Loader>
        </Backdrop>
      )}
      {modal && !loading && <Backdrop onClick={onClose} />}
      {modal && (
        <Modal>
          {login_modal && <LoginModal />}
          {show_details && <PropertiesModal />}
          {show_upload_properties_modal && <UploadPropertiesModal />}
          {show_profile && <ProfileModal />}
        </Modal>
      )}

      {error && <ErrorModal onClick={() => dispatch(setError(null))} />}
    </>
  );
};

export default ModalContainer;
