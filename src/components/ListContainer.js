import RestaurantCard from "./ReastaurantCard";

const ListContainer = (props) => {
    const { restaurants } = props;

    //console.log(restaurants)
   
    return  (<div className="flex gap-9 flex-wrap justify-center" >
        {
            restaurants.map(res=>RestaurantCard(res))
        }
        </div>
    );
};

export default ListContainer;