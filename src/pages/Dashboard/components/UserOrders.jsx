const  UserOrders = (product) => {
  return(
    <div className="user-orders">
      <div className="user-order-card">
        <h4>{product.name}</h4>
        <span>size:{product.size}</span>
        <span>Qyt:{product.quantity}</span>
        <div>
         <button></button>
        </div>
      </div>
    </div>
  )
};
export default UserOrders;