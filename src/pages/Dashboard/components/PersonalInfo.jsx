import '../DashboardPage.css';
import { useState } from 'react';

const PersonalInfo = (user) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="personal-info flex flex-col ">
      <div className="image-button flex justify-between p-2">
        <img src="https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg" alt="{user} profile" className="w-20 h-20 rounded-full mr-4 "/>
        <button onClick={handleEditClick} className="edit-profile-button p-4 text-center bg-black text-white  w-48 h-16 rounded-2xl"> {isEditing ? 'Save Profile' : 'Edit Profile'}</button>
      </div>
      <div className="user-info w-full mt-4">
        <div className="names flex items-center justify-between mb-4">
          <div className="firstName flex flex-col w-1/2 pr-2 p-2">
            <h6>First Name</h6>
            <div className="first-name w-full h-16 rounded-md border border-black p-2">
              {isEditing ? (
                <input 
                  type="text" 
                  defaultValue={user.firstName || ''} 
                  className="w-full h-full rounded-md border-none focus:outline-none"
                />
              ) : (
                user.firstName || 'N/A'
              )}
            </div>
          </div>
          <div className="secondName flex flex-col w-1/2 pr-2 p-2">
            <h6>Last Name</h6>
            <div className="second-name w-full h-16 rounded-md border border-black p-2">
              {isEditing ? (
                <input 
                  type="text" 
                  defaultValue={user.lastName || ''} 
                  className="w-full h-full rounded-md border-none focus:outline-none"
                />
              ) : (
                user.lastName || 'N/A'
              )}
            </div>
          </div>
        </div>

        <div className="contacts flex mb-4">
          <div className="phoneNumber flex flex-col w-1/2 pr-2 p-2">
            <h6>Phone Number</h6>
            <div className="phone-number w-full h-16 rounded-md border border-black p-2">
              {isEditing ? (
                <input 
                  type="text" 
                  defaultValue={user.phoneNumber || ''} 
                  className="w-full h-full rounded-md border-none focus:outline-none"
                />
              ) : (
                user.phoneNumber || 'N/A'
              )}
            </div>
          </div>
          <div className="Email flex flex-col w-1/2 pl-2 p-2">
            <h6>Email</h6>
            <div className="email w-full h-16 rounded-md border border-black p-2">
              {isEditing ? (
                <input 
                  type="email" 
                  defaultValue={user.email || ''} 
                  className="w-full h-full rounded-md border-none focus:outline-none"
                />
              ) : (
                user.email || 'N/A'
              )}
            </div>
          </div>
        </div>

        <div className="Address flex flex-col mb-4 p-2">
          <h6>Address</h6>
          <div className="address w-full h-16 rounded-md border border-black p-2">
            {isEditing ? (
              <input 
                type="text" 
                defaultValue={user.address || ''} 
                className="w-full h-full rounded-md border-none focus:outline-none"
              />
            ) : (
              user.address || 'N/A'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
