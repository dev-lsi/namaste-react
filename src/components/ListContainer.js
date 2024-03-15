import RestaurantCard from "./ReastaurantCard";

const ListContainer = (props) => {
    const { restaurants } = props;
   
    return  (<div className="list-container" >
        {
            restaurants.map(res=>RestaurantCard(res))
        }
        </div>
    );
};

export default ListContainer;