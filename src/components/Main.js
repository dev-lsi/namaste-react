import Search from "./Search";
import ListContainer from "./ListContainer";
import { MOCK_DATA } from "../utils/mockData.js";
import { useState, useEffect } from "react";

const Main = () => {
  const [pageData, setPageData] = useState(MOCK_DATA);

  
  const swapi="https://swapi.dev/api/people/";
  

  useEffect(()=>{
    
    async function fetchData(){
        const data= await fetch(swapi);
        const list = await data.json();
    }
    fetchData();

    
  },[]);
  
  if(pageData.length===0){
    return <h1>Loading.....</h1>
  }
  
  return (
    <div className="main">
      <Search />
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            
            const filtered = pageData.filter((res) => res.r >= 5);
            
            setPageData(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <ListContainer restaurants={pageData} />
    </div>
  );
};

export default Main;
