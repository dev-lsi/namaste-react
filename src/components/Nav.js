import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Nav = () => {
    
  const cartItems = useSelector((store)=>store.cart.items);

    return (
      <ul className="flex p-4 m-4 justify-between gap-8 text-2xl">
        <li className="hover:bg-orange-700 hover:text-orange-200 p-4 "><Link to={"/"}>Home</Link></li>
        <li className="hover:bg-orange-700 hover:text-orange-200 p-4 "><Link to={"/about"}>About</Link></li>
        <li className="hover:bg-orange-700 hover:text-orange-200 p-4 "><Link to={"/contacts"}>Contacts</Link></li>
        <li className="hover:bg-orange-700 hover:text-orange-200 p-4 ">Cart ({cartItems.length} Items)</li>
      </ul>
    );
  };

  export default Nav;