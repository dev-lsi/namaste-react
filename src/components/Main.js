import Search from "./Search";
import ListContainer from "./ListContainer";
import { MOCK_DATA } from "../utils/mockData.js";
import { useState, useEffect } from "react";

const Main = () => {

  const [pageData, setPageData] = useState([]);

  const swiggyURL =
    "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const restaurantCard="https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=129351929&lng=7762448069999999&restaurantId=425&submitAction=ENTER";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await fetch(swiggyURL);
    const dataObj = await res.json();
    const restaurantsArr = dataObj.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    setPageData(restaurantsArr);
    
  }

  if (pageData.length === 0) {

    return <h1>Loading.....</h1>;

  }

  return (
    <div className="main">
      <Search restaurants = {pageData}/>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = pageData.filter((res) => true);

            setPageData(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <ListContainer restaurants = {pageData} />
    </div>
  );
};

export default Main;
