
const Notifications = (notifications) => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-4 p-4 border h-28 border-gray-200">
        <img src="" alt="notification" className="w-12 h-12 rounded-full mr-4"/>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{notifications.title}</h3>
          <span className="text-gray-600">{notifications.message}</span>
          <small className="text-gray-400">{notifications.time}</small>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
