import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    return (
      <div className="restaurant-list">
        {
            restaurantList.map((res)=>{
                return <RestaurantCard key={res.data.data.id} {...res.data.data}/>
            })
        }
      </div>
    );
  };
  export default Body;