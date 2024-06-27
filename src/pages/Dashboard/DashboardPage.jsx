import { useState } from 'react';
import './DashboardPage.css';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Orders from "./components/Orders";
import PersonalInfo from './components/PersonalInfo';
import Wishlist from './components/Wishlist';
import Addresses from './components/Addresses';
import SavedCards from './components/SavedCards';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import SideBar from './components/SideBar';

const DashboardPage = () => {
  const [selectedSection, setSelectedSection] = useState('PersonalInfo');
  return (
    <div className="Dashboard-page">
      <div className="profile-title flex">
        <h3>My Profile</h3>
        <div className="search-bar">
          <button>Filter<FontAwesomeIcon icon={faSliders} /></button>
        </div>
      </div>
      <div className="sections flex px-30 h-screen p-40">
        <section className="user-details w-1/5 mr-20">
          <SideBar setSelectedSection={setSelectedSection} />
        </section>
        <section className="user-section w-3/5">
          {selectedSection === 'Orders' && <Orders />}
          {selectedSection === 'PersonalInfo' && <PersonalInfo />}
          {selectedSection === 'Wishlist' && <Wishlist />}
          {selectedSection === 'Addresses' && <Addresses />}
          {selectedSection === 'SavedCards' && <SavedCards />}
          {selectedSection === 'Notifications' && <Notifications />}
          {selectedSection === 'Settings' && <Settings />}
        </section>
      </div>
    </div>
  )
};

export default DashboardPage;
