import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Orders = (product) => {
  return (
    <div className="user-orders">
        <div className="search-bar flex justify-end m-3">
          <button className='p-4 text-center bg-black text-white w-36 h-16 rounded-2xl'>Filter <FontAwesomeIcon className='ml-2'icon={faSliders} /></button>
      </div>
      <div className="user-order-card flex flex-col border border-gray-200 p-4 rounded-lg mb-4">
        <h4 className="font-semibold mb-2">{product.name}</h4>
        <span className="text-gray-600 mb-1">Size: {product.size}</span>
        <span className="text-gray-600 mb-3">Qty: {product.quantity}</span>
        <div className="flex justify-between items-center">
          <span className={`status ${product.status} px-2 py-1 rounded-full text-white`}>{product.status}</span>
          <div className="buttons flex">
            <button className="view-order-button bg-gray-100 text-black px-3 py-1 rounded mr-2">View Order</button>
            {product.status === 'Delivered' ? (
              <button className="write-review-button bg-gray-100 text-black px-3 py-1 rounded">Write A Review</button>
            ) : (
              <button className="cancel-order-button bg-red-100 text-red-600 px-3 py-1 rounded">Cancel Order</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
