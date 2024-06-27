import '../DashboardPage.css'
const  PersonalInfo = (user) => {
  return(
    <div className="personal-info ">
      <div className="image-button flex">
        <img src="" alt="user Image" />
        <button>Edit Profile</button>
      </div>
      <div className="user-info">
        <div className="names flex  w-80% items-center p-10 ">
          <h6>First name</h6>
          <div className="first-name w-2/5 ml-20 mr-20 h-16 rounded-b-md rounded-r-md">{user.firstName}</div>
          <h6>Last name</h6>
          <div className="second-name w-2/5 h-16 rounded-b-md rounded-r-md">{user.second}</div>
        </div>
        <div className="contacts flex w-80% items-center p-10">
          <h6>Phone number</h6>
          <div className="phone-number w-2/5 ml-20 mr-20 h-16 rounded-b-md rounded-r-md">{user.phoneNumber}</div>
          <h6>Email</h6>
          <div className="email w-2/5 h-16 rounded-b-md rounded-r-md">{user.email}</div>
        </div>
        <h6>Address</h6>
        <div className="address w-70% h-16 m-20 rounded-b-md rounded-r-md">{user.address}</div>
      </div>
    </div>
  )
};
export default PersonalInfo;