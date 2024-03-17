import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants.js";

const RestaurantMenu=()=>{
   
    const {resId} = useParams();
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const restaurantURL= MENU_API + resId;

    console.log(resId)

    const fetchMenu =async ()=> { 
        const res = await fetch(restaurantURL);
        const data = await res.json();
        setResInfo(data);
    }

    if(resInfo===null){
        return <Shimmer></Shimmer>
    }

    const {name,avgRating,slugs } = resInfo.data.cards[0].card.card.info;
    
    
    const {item} = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    console.log(resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);

    return (
         <div className="restaurant">
             <h1 className="restaurant-name">{name}</h1>
             <h3>{"Rating " + avgRating}</h3>
             <h2>Menu</h2>
             <ul className="menu-list">
                {item ? item.map((i)=><li>{i.card.info.name}</li>):<p></p>}
             </ul>
         </div>
    )
}

export default RestaurantMenu;