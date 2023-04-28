import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData(sText,restaurants){
 const filteredData= restaurants.filter((rest)=>rest.data.data.name.includes(sText));
 return filteredData;
}
const Body = () => {
  //  let searchTxt="KFC";
  //searchText is a local state variable
  const [searchText,setSearchText]=useState();
  // const [searchClicked,setSearchedClicked]=useState("false");
  const [restaurants,setRestaurants]=useState(restaurantList);
  return (
    <>
     <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value)
            }}
        />
        <button className="search-btn" onClick={()=>{
            // need to filter the data
            // update the state variable
            const data=filterData(searchText,restaurants);
            setRestaurants(data);
        }}>search</button>
    
      </div>

      <div className="restaurant-list">
        {restaurants.map((res) => {
          return <RestaurantCard key={res.data.data.id} {...res.data.data} />;
        })}
      </div>
    </>
  );
};
export default Body;
