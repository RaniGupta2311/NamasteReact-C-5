import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  //  let searchTxt="KFC";
  //searchText is a local state variable
  const [searchText,setSearchText]=useState();
  const [searchClicked,setSearchedClicked]=useState("false");
  return (
    <>
      {/* <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e)=>{
            searchTxt=e.target.value
          }}
        />
        <button className="search-btn">search</button>
      </div> */}


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
            if(searchClicked==="false")
            setSearchedClicked("true");
            else setSearchedClicked("false")
          
        }}>search</button>
        <h2>{searchText}</h2>
        <h3>{searchClicked}</h3>
      </div>

      <div className="restaurant-list">
        {restaurantList.map((res) => {
          return <RestaurantCard key={res.data.data.id} {...res.data.data} />;
        })}
      </div>
    </>
  );
};
export default Body;
