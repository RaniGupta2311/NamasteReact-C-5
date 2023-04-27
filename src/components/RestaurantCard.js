//now we want to map all restaurant
//you can use for loop also
// map is the best way in functional programming
//always use unique key in list
const RestaurantCard = ({ cloudinaryImageId,name,cuisines,deliveryTime }) => {
    return (
      <div className="card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+cloudinaryImageId} alt="restro_image" />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

export default RestaurantCard;