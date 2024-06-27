
const Addresses = (address) => {
  return (
    <div className="address">
      <button>+ add new address</button>
      <div className="address-card">
        <h3>{address.name}</h3>
        <span className="address-area">{address.street},{address.area},{address.state},{address.pinCode}</span>
        <div className="phoneNumber flex">
          phone Icon
          <span className="phoneNumber">04049w964</span>
        </div>
      </div>
    
    </div>
  );
};

export default Addresses;