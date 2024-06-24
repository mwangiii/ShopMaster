import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBox,faHeart,faLocationDot,faCreditCard,faBell,faGear} from '@fortawesome/free-solid-svg-icons';
const UserDetails = () => {
  return(
    <div className="user-profile">
      <div className="user-details">
        <img src="" alt="" />
        <div className="user-name"></div>
        <div className="names">
          <div className="first-name"></div>
          <div className="second-name"></div>
        </div>
        <div className="user-controls">
          <div className="personal-info flex"><div className="user-icons"><FontAwesomeIcon icon={faUser} /></div><span>personal information</span></div>
          <div className="my-orders flex"><div className="user-icons"><FontAwesomeIcon icon={faBox} /></div><span>My orders</span></div>
          <div className="my-wishlists flex"><div className="user-icons"><FontAwesomeIcon icon={faHeart} /></div><span>My Wishlists</span></div>
          <div className="manage addresses flex"><div className="user-icons"><FontAwesomeIcon icon={faLocationDot} /></div><span>My Address</span></div>
          <div className="saved-cards flex"><div className="user-icons"><FontAwesomeIcon icon={faCreditCard} /></div><span>Saved Cards</span></div>
          <div className="Notifications flex"><div className="user-icons"><FontAwesomeIcon icon={faBell} /></div><span>Notifications</span></div>
          <div className="settings flex"><div className="user-icons"><FontAwesomeIcon icon={faGear} /></div><span>Settings</span></div>
        </div>
      </div>
    </div>
  )
};
export default UserDetails;