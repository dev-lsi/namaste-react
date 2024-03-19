////"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

import { Link } from "react-router-dom";

const assets="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = (props) => {
  
  const {info} = props
  //console.log(info)
  return (
    <Link key={info.id} to={"/restaurants/" + info.id} >
      <img className="w-[300px]" src={assets+info.cloudinaryImageId}></img>
      <h2 className="text-sky-900">{info.name}</h2>
      <h2>{"Rating: " + info.avgRating}</h2>
    </Link>
  );
};



export default RestaurantCard;
