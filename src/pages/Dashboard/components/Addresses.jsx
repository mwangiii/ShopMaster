import { FaPhone, FaEdit, FaTrash } from 'react-icons/fa';

const Addresses = (address) => {
  return (
    <div className="address">
      <div className="addAddress flex justify-end">
        <button className="add-address-button bg-black text-white py-2 px-4 rounded-lg mb-4 w-56 ">+ Add New Address</button>
      </div>
      <div className="address-card border border-gray-200 p-4 rounded-lg mb-4">
        <h3 className="font-semibold mb-2">{address.name}</h3>
        <span className="address-area text-gray-600 mb-1 block">
          {address.street}, {address.area}, {address.state}, {address.pinCode}
        </span>
        <div className="phone-number flex items-center text-gray-600 mb-3">
          <FaPhone className="mr-2" />
          <span>{address.phoneNumber}</span>
        </div>
        <div className="flex justify-end space-x-2">
          <button className="edit-button bg-gray-100 text-black px-3 py-1 rounded flex items-center">
            <FaEdit className="mr-1" /> Edit
          </button>
          <button className="delete-button bg-red-100 text-red-600 px-3 py-1 rounded flex items-center">
            <FaTrash className="mr-1" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
