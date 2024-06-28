import { useState } from 'react';
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
      <div className="sections flex px-30 h-screen p-40">
        <section className="user-details w-1/5 mr-20">
          <SideBar setSelectedSection={setSelectedSection} />
        </section>
        <section className="user-section w-3/5 h-full">
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
