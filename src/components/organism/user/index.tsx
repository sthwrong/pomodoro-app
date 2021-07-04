import { useContext } from 'react';
import Popup from 'reactjs-popup';
import firebase from 'firebase/app';
import { AuthContext } from 'contexts/auth';
import './style.scss';
import { FaRocket, FaUserAlt } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { AiTwotoneDelete } from 'react-icons/ai';

const triggerModal = ({ photoURL, displayName }): JSX.Element => (
  <button className="header--button__user" type="button">
    <img src={photoURL} alt={displayName} />
  </button>
);

const UserModal = (): JSX.Element => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const { photoURL, displayName } = user as firebase.UserInfo;

  // const handleLoginGoogle = () => {
  //   try {
  //     getFirebaseAuth().then(({ auth, googleProvider }) => auth.signInWithPopup(googleProvider));
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <Popup
      trigger={triggerModal({ photoURL, displayName })}
      position="bottom right"
      closeOnDocumentClick
    >
      <div className="userModal--content">
        <div className="userModal--button">
          <button type="button">
            <FaUserAlt fontSize={14} className="userModal--icon" />
            <span>Profile</span>
          </button>
          <button type="button">
            <FaRocket fontSize={14} className="userModal--icon" />
            Subscription
          </button>
          <button type="button">
            <FiLogOut fontSize={14} className="userModal--icon" />
            Logout
          </button>
          <button type="button">
            <AiTwotoneDelete fontSize={16} className="userModal--icon" />
            Delete Account
          </button>
        </div>
      </div>
    </Popup>
  );
};

export default UserModal;
