import { auth } from "../../../../../Firebase";
import Button from "../../../../UI/Button/Button";

const DeleteAccountButton = () => {
  const handleDeleteAccount = () => {
    auth.currentUser
      .delete()
      .then(function () {
        console.log("deleted");
      })
      .catch(function (error) {
        console.log(error, error.message);
      });
  };

  return <Button text="delete account" onClick={handleDeleteAccount} />;
};

export default DeleteAccountButton;
