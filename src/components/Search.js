import { startTransition, useEffect,useState } from "react";
import { MOCK_DATA } from "../utils/mockData";
const Search = () => {
    
    
    const [searchText,setSearchText] = useState("");
    
    function changeValue(e){
        setSearchText(e.target.value);
    }

    function handleClick(e){
       console.log(searchText)
       const filteredByText = MOCK_DATA.filter(x=>x.r===searchText);
       console.log(filteredByText)
    }

    return (
        <div className="search-bar-container">
           <h2>Search Bar</h2>
           <input 
                onChange={(e)=>changeValue(e)} 
                value={searchText} 
                placeholder="search here"
            ></input>
           <button
               onClick={(e)=>handleClick(e)}
           >Search</button>
        </div>
    );
};

export default Search;