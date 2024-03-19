import { useEffect,useState } from "react";




const Search = (props) => {
    
    const {restaurants} = props
    const [searchText,setSearchText] = useState("");
    //const [filteredPageData,setFilteredPageData] = useState[pageData];
    
    function changeValue(e){
        setSearchText(e.target.value);
    }

    function handleClick(e){
       
       const filteredByText = restaurants.filter((res) => res.info.name.includes(searchText));
       
       console.log(filteredByText);
    }

    return (
        <div className="flex justify-start gap-4 py-6">
           <h2>Search Bar</h2>
           <input className="border-2" 
                onChange={(e)=>changeValue(e)} 
                value={searchText} 
                placeholder="search here"
            ></input>
           <button className="bg-blue-300 px-4 py-2"
               onClick={(e)=>handleClick(e)}
           >Search</button>
        </div>
    );
};

export default Search;