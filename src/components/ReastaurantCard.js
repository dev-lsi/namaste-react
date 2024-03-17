////"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"

import { Link } from "react-router-dom";

const assets="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = (props) => {
  
  const {info, cta} = props
  console.log("info.id:" + info.id)
  return (
    <Link key={info.id} to={"/restaurants/" + info.id} className="restaurant-card">
      <img src={assets+info.cloudinaryImageId}></img>
      <p className="info">{assets+ info.cloudinaryImageId}</p>
      <h2>{info.name}</h2>
      <h2>{"Rating: " + info.avgRating}</h2>
    </Link>
  );
};

export default RestaurantCard;
