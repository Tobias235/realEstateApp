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

  const login_modal = useSelector((state) => state.modalReducer.login_modal);
  const show_upload_properties_modal = useSelector(
    (state) => state.modalReducer.show_upload_properties_modal
  );
  const show_details = useSelector((state) => state.modalReducer.show_details);
  const showProfile = useSelector((state) => state.modalReducer.show_profile);
  const modalName = useSelector((state) => state.modalReducer.modal_name);
  const mobile_menu = useSelector((state) => state.mobileReducer.mobile_menu);
  const error = useSelector((state) => state.loadingReducer.error);
  const loading = useSelector((state) => state.loadingReducer.loading);
  const upload_status = useSelector(
    (state) => state.loadingReducer.uploading_status
  );

  useEffect(() => {
    let stateArray = [];
    stateArray.push(
      login_modal,
      show_upload_properties_modal,
      show_details,
      showProfile,
      mobile_menu
    );
    setModal(stateArray.some((val) => val === true));
  }, [
    login_modal,
    show_upload_properties_modal,
    show_details,
    showProfile,
    mobile_menu,
  ]);

  const onClose = () => {
    if (loading) return;

    if (modalName !== "" && modalName !== "comment") {
      dispatch(setModalName(null));
    }

    switch (modalName) {
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
          {showProfile && <ProfileModal />}
        </Modal>
      )}

      {error && <ErrorModal onClick={() => dispatch(setError(null))} />}
    </>
  );
};

export default ModalContainer;
