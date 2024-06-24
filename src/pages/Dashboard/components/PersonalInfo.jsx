const  PersonalInfo = (user) => {
  return(
    <div className="personal-info">
      <div className="image-button flex">
        <img src="" alt="user Image" />
        <button>Edit Profile</button>
      </div>
      <div className="user-info">
        <div className="names flex ">
          <div className="first-name w-10 h-10">{user.firstName}</div>
          <div className="second-name w-50% h-1 0">{user.second}</div>
        </div>
        <div className="contacts flex ">
          <div className="phone-number w-10 h-10">{user.phoneNumber}</div>
          <div className="email w-10 h-10">{user.email}</div>
        </div>
        <div className="address w-10 h-10">{user.address}</div>
      </div>
    </div>
  )
};
export default PersonalInfo;