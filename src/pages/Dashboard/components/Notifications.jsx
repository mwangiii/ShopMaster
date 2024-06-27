
const Notifications = (notifications) => {
  return (
    <div className="notifications flex"> 
      <img src={notifications.image} alt="loading image....."/>
      <div className="notification-span">
        <h1>{notifications.title}</h1>
        <span>{notifications.message}</span>
      </div>
    </div>
  );
};

export default Notifications;