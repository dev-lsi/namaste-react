import { useEffect,useState } from "react";
import ListContainer from "./ListContainer";



const Search = (props) => {
    
    const {restaurants} = props
    const [searchText,setSearchText] = useState("");
    //const [filteredPageData,setFilteredPageData] = useState[pageData];
    useEffect(goTo,[restaurants]);
    function goTo{
        
    }
    function changeValue(e){
        setSearchText(e.target.value);
    }

    function handleClick(e){
       
       const filteredByText = restaurants.filter((res) => res.info.name.includes(searchText));
       
       console.log(filteredByText);
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