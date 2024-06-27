import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBox, faHeart, faLocationDot, faCreditCard, faBell, faGear } from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ setSelectedSection }) => {
  return (
    <div className="side-bar flex flex-col h-full">
      <div className="user-details flex border-gray-500 border-solid border">
        <img className="profile-image rounded-full h-28 w-28 p-3" src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg" alt="loading...." />
        <div className="greetings">
          <h2 className="user-greetings  mt-7 mr-0.5 font-bold text-2xl p-1.5">Hello</h2>
          <div className="names flex "> 
            <div className="first-name mr-3 w-fit">first name</div>
            <div className="second-name w-fit "> second name</div>
         </div>
        </div>
        </div>
  
        <div className="user-controls border-gray-500 border-solid border">
          <div className="personal-info flex p-6 justify-items-start items-start" onClick={() => setSelectedSection('PersonalInfo')}>
            <div className="user-icons mr-4"><FontAwesomeIcon icon={faUser} /></div><span>personal information</span>
          </div>
          <div className="my-orders flex border-gray-500 border-solid border p-6 justify-items-start items-start " onClick={() => setSelectedSection('Orders')}>
            <div className="user-icons mr-4"><FontAwesomeIcon icon={faBox} /></div><span>My orders</span>
          </div>
          <div className="my-wishlists flex border-gray-500 border-solid border p-6 justify-items-start items-start " onClick={() => setSelectedSection('Wishlist')}>
            <div className="user-icons mr-4"><FontAwesomeIcon icon={faHeart} /></div><span>My Wishlists</span>
          </div>
          <div className="manage addresses flex border-gray-500 border-solid border p-6 justify-items-start items-start " onClick={() => setSelectedSection('Addresses')}>
            <div className="user-icons mr-4"><FontAwesomeIcon icon={faLocationDot} /></div><span>My Address</span>
          </div>
          <div className="saved-cards flex p-6 justify-items-start items-start" onClick={() => setSelectedSection('SavedCards')}>
            <div className="user-icons mr-4"><FontAwesomeIcon icon={faCreditCard} /></div><span>Saved Cards</span>
          </div>
          <div className="Notifications flex border-gray-500 border-solid border p-6 justify-items-start items-start" onClick={() => setSelectedSection('Notifications')}>
            <div className="user-icons mr-4"><FontAwesomeIcon icon={faBell} /></div><span>Notifications</span>
          </div>
          <div className="settings flex border-gray-500 border-solid border p-6 justify-items-start items-start" onClick={() => setSelectedSection('Settings')}>
            <div className="user-icons mr-4"><FontAwesomeIcon icon={faGear} /></div><span>Settings</span>
          </div>
      </div>
    </div>
  );
};

export default SideBar;
