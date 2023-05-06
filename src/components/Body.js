import { useState, useEffect } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(sText, restaurants) {
  const filteredData = restaurants.filter((rest) =>
    rest?.data?.name?.toLowerCase().includes(sText.toLowerCase())
  );
  return filteredData;
}
const Body = () => {
  //  let searchTxt="KFC";
  //searchText is a local state variable
  // fetch("")
  const [searchText, setSearchText] = useState();
  // const [searchClicked,setSearchedClicked]=useState("false");
  // const [restaurants,setRestaurants]=useState(restaurantList);
  // const [restaurants,setRestaurants]=useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  // console.log("render()")
  // console.log(restaurants);

  // useEffect(()=>{
  //   console.log("call this when dependency is changed")
  // },[])
  // It will be called only once

  // useEffect(()=>{
  //   console.log("call this when dependency is changed")
  // },[searchText])
  // it will be called when searchText changed

  // useEffect(()=>{
  //      console.log("call this when dependency is changed")
  //    },[restaurants])

  // useEffect(()=>{
  //   console.log("useEffect")
  // },[])
  console.log("render");

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.748163724143655&lng=84.38034899532796&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // console.log(json.data.cards[0].data.data.cards)
    // optional chaining
    setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards);
  }

  // if my all restaurant is not there
  // this is called early return
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // need to filter the data
            // update the state variable
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restaurant-list">
        {/* JS expressions and statement, you can't use statement here */}
        {
          filteredRestaurants.length===0?<h2>Oops!!No Restaurant Found...</h2>:filteredRestaurants.map((res) => {
          return <RestaurantCard key={res.data.id} {...res.data} />;
        })}
      </div>
    </>
  );
};
export default Body;
