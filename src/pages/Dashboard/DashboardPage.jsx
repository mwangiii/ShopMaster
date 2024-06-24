import './DashboardPage.css'
import UserOrders from "./components/UserOrders";
import UserDetails from "./components/UserDetails";
import { faSliders} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PersonalInfo from './components/PersonalInfo';
const DashboardPage = () => {
  return(
    <div className="Dashboard-page">
      <div className="profile-title flex">
        <h3>My Profile</h3>
      <div className="search-bar">
        <button>Filter<FontAwesomeIcon icon={faSliders} /></button>
      </div>
      </div>
    <div className="sections flex px-30 h-screen p-40">
      <section className="user-details w-1/5 mr-20"><UserDetails/></section>
      {/* <section className="user-orders w-3/5 "><UserOrders/></section> */}
      <section className="user-section w-3/5"><PersonalInfo/></section>
    </div>
    </div>
  )
};

export default DashboardPage;